const db = require('../db.js');  // 引入資料庫

exports.getPriceByCarriageType = async (carriageType) => {
    const sql = `SELECT 
    CarriageID,
    Price
FROM 
    CARRIAGES
WHERE 
    carriageType = ?;`;
    try {
        return { results } = await db.query(sql, [carriageType]);  // 使用 dessertType 參數進行查詢
    } catch (error) {
        console.log('查詢特定車廂之價錢資料錯誤：', error);
        throw new Error('查詢特定車廂之價錢資料錯誤');
    }
};