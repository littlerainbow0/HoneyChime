const db = require('../db.js');  // 引入資料庫

// 取得所有使用者
exports.getAllNews = async () => {
    const sql = 'SELECT * FROM NEWS'; 
    return db.query(sql);  // 傳給db
};

exports.postNews = async (data) => {
    const sql = `INSERT INTO NEWS (Date, Category, Content) VALUES (?, ?, ?)`;
    try {
        const result = await db.query(sql, [data.Date, data.Category, data.Content]);
        // console.log('插入結果:', result.results.insertId); // 確認完整結果
        return { newsID: result.results.insertId };
    } catch (error) {
        console.error('新增NEWS資料錯誤：', error);
        throw new Error('新增NEWS資料錯誤');
    }
};