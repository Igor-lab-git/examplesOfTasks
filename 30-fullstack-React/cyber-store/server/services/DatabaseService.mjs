import {Sequelize, DataTypes} from "sequelize";
import { env, platform, stdin, stdout } from 'node:process';
import * as readline from 'readline';
import { config } from 'dotenv';
config();

const dbName = env.POSTGRES_NAME || 'cyber_store';
const dbUser = env.POSTGRES_USER || 'postgres';
const dbPass = env.POSTGRES_PASSWORD || 'qwerty';
const dbHost = env.POSTGRES_HOST || 'localhost';
const dbPort = env.POSTGRES_PORT || '5432';

const syncDatabase = (env.SUBD_DB_SYNC || "no") === "yes";

class DatabaseService {
    sequelize = new Sequelize(
        dbName,
        dbUser,
        dbPass,
        {
            host: dbHost,
            dialect: "postgres",
            port: dbPort,
            logging: console.log,
            define: {
                schema: 'public'
            }
        }
    );

    // Модели объявлены прямо здесь!
    User = this.sequelize.define("user", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: { type: DataTypes.STRING, unique: true },
        password: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: "USER" },
    }, { timestamps: false });

    Basket = this.sequelize.define("basket", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    }, { timestamps: false, freezeTableName: true });

    BasketDevice = this.sequelize.define("basketDevice", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    }, { timestamps: false });

    Device = this.sequelize.define("device", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        rating: { type: DataTypes.INTEGER, defaultValue: 0 },
        img: { type: DataTypes.STRING, allowNull: false },
        images: { type: DataTypes.JSON, defaultValue: [] }
    }, { timestamps: false });

    Type = this.sequelize.define("type", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
    }, { timestamps: false });

    Brand = this.sequelize.define("brand", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
    }, { timestamps: false });

    Rating = this.sequelize.define("rating", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        rate: { type: DataTypes.INTEGER, allowNull: false },
    }, { timestamps: false });

    DeviceInfo = this.sequelize.define("device_info", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
    }, { timestamps: false });

    TypeBrand = this.sequelize.define("type_brand", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    }, { timestamps: false });

    constructor() {
        // Устанавливаем связи между моделями
        this.User.hasOne(this.Basket);
        this.Basket.belongsTo(this.User);

        this.User.hasMany(this.Rating);
        this.Rating.belongsTo(this.User);

        this.Basket.hasMany(this.BasketDevice);
        this.BasketDevice.belongsTo(this.Basket);

        this.Type.hasMany(this.Device);
        this.Device.belongsTo(this.Type);

        this.Brand.hasMany(this.Device);
        this.Device.belongsTo(this.Brand);

        this.Device.hasMany(this.Rating);
        this.Rating.belongsTo(this.Device);

        this.Device.hasMany(this.BasketDevice);
        this.BasketDevice.belongsTo(this.Device);

        this.Device.hasMany(this.DeviceInfo, {as: "info"});
        this.DeviceInfo.belongsTo(this.Device);

        this.Type.belongsToMany(this.Brand, { through: this.TypeBrand });
        this.Brand.belongsToMany(this.Type, { through: this.TypeBrand });

        // Обработка сигналов Windows
        if(platform === 'win32') {
            const rl = readline.createInterface({
                input: stdin,
                output: stdout,
            });
            rl.on('SIGINT', () => {
                process.emit('SIGINT');
            });
        }

        process.on('SIGTERM', async () => {
            try {
                await this.sequelize.close();
                console.log("✅ Disconnected From DB Successfully");
                process.exit(0);
            } catch (error) {
                console.log("❌ Disconnected From DB Error", error);
                process.exit(1);
            }
        });

        // Подключаемся к БД
        this.connect();
    }

    async connect() {
        try {
            await this.sequelize.authenticate();
            console.log("Connected To DB Successfully ✅✅✅✅");

            // СОЗДАЁМ СХЕМУ PUBLIC ПРЯМО ЗДЕСЬ!
            await this.sequelize.query('CREATE SCHEMA IF NOT EXISTS public;');
            console.log("Schema 'public' created or already exists ✅");

            if(syncDatabase) {
                await this.sequelize.sync({ force: true });
                // await this.sequelize.sync({ alter: true });
                console.log("Database synchronized ✅");

                const tables = await this.sequelize.getQueryInterface().showAllTables();
                console.log("Tables:", tables);
            }
        } catch (error) {
            console.error("Sequelize Connection Error ❌❌❌❌", error);
            process.exit(1);
        }
    }
}

const db = new DatabaseService();
export default db;