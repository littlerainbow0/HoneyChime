import  query  from '../db.js';  // 引入資料庫查詢函數

// 取得所有使用者
export const getAllCards = async () => {
    const sql = 'SELECT * FROM CARDS'; 
    return query(sql);  // 傳給db
};

export const postCards = async (data) => {
    const sql = `INSERT INTO CARDS (CardImage, Title, Paragraph) VALUES (?, ?, ?)`;
    try {
        const result = await query(sql, [data.CardImage, data.Title, data.Paragraph]);
        return { cardsID: result.results.insertId };
    } catch (error) {
        console.error('新增CARDS資料錯誤：', error);
        throw new Error('新增CARDS資料錯誤');
    }
};

// 更新Cards
export const updateCards = async (cardsID, data) => {
    const sql = `UPDATE CARDS 
SET CardImage = ?, Title = ?, Paragraph = ?
WHERE cardsID = ?;`;
    try {
        const result = await query(sql, [data.CardImage, data.Title, data.Paragraph, cardsID]);
        return result.results.affectedRows;
    } catch (error) {
        console.error('更新CARDS資料錯誤：', error);
        throw new Error('更新CARDS資料錯誤');
    }
};