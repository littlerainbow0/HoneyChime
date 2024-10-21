import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME,
    multipleStatements: true,
};

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_HOST);



export default dbConfig;