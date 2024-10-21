import mysql from 'mysql';
import dbConfig from './config/db.js';  // 從config引入db配置

//建立連線
//使用pool讓mysql處理連線與斷線問題
const pool = mysql.createPool(dbConfig);

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results, fields) => {
            if (error) {
                // 錯誤處理
                console.error('資料庫錯誤：', error);  
                reject({ message: '資料庫連線失敗', error });
            } else {
                resolve({ results, fields });
            }
        });
    });
};

export { pool, query };