import { Sequelize } from 'sequelize';
import { env, platform, stdin, stdout } from 'node:process';
import * as readline from "node:readline";
import {config} from 'dotenv';
config();

const dbName = env.POSTGRES_NAME || 'cyber_store';
const dbUser = env.POSTGRES_USER || 'pguser';
const dbPass = env.POSTGRES_PASSWORD || 'qwerty';
const dbHost = env.POSTGRES_HOST || 'localhost';
const dbPort = env.POSTGRES_PORT || '5432';
const dbDialect = env.POSTGRES_DIALECT || 'postgres';

class DatabaseService {
    sequelize = new Sequelize(
        dbName,
        dbUser,
        dbPass,
        {
            host: dbHost,
            dialect: dbDialect,
            port: dbPort,
        }
    );

    constructor() {
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
                console.log("Disconnected From DB Successfully");
                process.exit(0);
            } catch (error) {
                console.log("Disconnected From DB Error", error);
                process.exit(1);
            }
        });

        this.sequelize.authenticate().then(() => {
            console.log("Connection With Database Established Successfully");
        }).catch((error) => {
            console.error("Sequelize Connection Error", error);
        });
    }
};

const db = new DatabaseService();

export default db;