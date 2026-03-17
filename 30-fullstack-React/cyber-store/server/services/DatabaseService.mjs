import { env, platform, stdin, stdout } from 'node:process';
import * as readline from "node:readline";
import { config } from 'dotenv';
import sequelize from './sequelize.js'; // Импортируем sequelize
import * as models from '../models/models.js'; // Импортируем модели

config();

const syncDatabase = (env.SUBD_DB_SYNC || "no") === "yes";

class DatabaseService {
    constructor() {
        this.sequelize = sequelize;
        this.models = models;

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
            console.log("✅ Connection With Database Established Successfully 🛣️");

            if(syncDatabase) {
                // await this.sequelize.sync();   // Для замены точечных данных без перезаписи всей базы
                // ВАЖНО: используем force: true для создания таблиц
                await this.sequelize.sync({ force: true });
                console.log("✅ Database synchronized");
                
                // Проверим, какие таблицы создались
                const tables = await this.sequelize.getQueryInterface().showAllTables();
                console.log("📊 Созданные таблицы:", tables);
            }


        } catch (error) {
            console.error("❌ Sequelize Connection Error", error);
            process.exit(1);
        }
    }
};

const db = new DatabaseService();

export default db;