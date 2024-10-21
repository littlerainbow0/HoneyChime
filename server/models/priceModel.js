import  query  from '../db.js';  // 引入資料庫查詢函數

export const getPriceByCarriageType = async (carriageType) => {
    const sql = `SELECT 
    CarriageID,
    Price
FROM 
    CARRIAGES
WHERE 
    carriageType = ?;`;
    try {
        const { results } = await query(sql, [carriageType]);  // 使用 carriageType 參數進行查詢
        return { results };
    } catch (error) {
        console.log('查詢特定車廂之價錢資料錯誤：', error);
        throw new Error('查詢特定車廂之價錢資料錯誤');
    }
};