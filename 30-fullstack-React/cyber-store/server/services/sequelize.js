import { Sequelize } from 'sequelize';
import { env } from 'node:process';
import { configDotenv } from "dotenv";

configDotenv(); // ДЛЯ подгрузки переменных из .env

const dbName = env.POSTGRES_NAME || 'cyber_store';
const dbUser = env.POSTGRES_USER || 'pguser';
const dbPass = env.POSTGRES_PASSWORD || 'qwerty';
const dbHost = env.POSTGRES_HOST || 'localhost';
const dbPort = env.POSTGRES_PORT || '5432';
const dbDialect = env.POSTGRES_DIALECT || 'postgres';

// Создаем экземпляр Sequelize
const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPass,
    {
        host: dbHost,
        dialect: dbDialect,
        port: dbPort,
        logging: console.log
    }
);

export default sequelize;