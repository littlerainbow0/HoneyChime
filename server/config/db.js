import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME,
    multipleStatements: true,
};
//"檔名"
export default dbConfig;