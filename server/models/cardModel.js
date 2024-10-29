import query from '../db.js';  // 引入資料庫查詢函數

// 取得所有使用者
export const getAllCards = async () => {
    const sql = 'SELECT * FROM CARDS';
    const { results } = await query(sql);

    return { results };  // 傳給db
};

export const postCards = async (data) => {
    const sql = `INSERT INTO CARDS (CardImage, Title, Title2, Paragraph) VALUES (?, ?, ?, ?)`;
    try {
        const { results } = await query(sql, [data.CardImage, data.Title, data.Title2, data.Paragraph]);
        return { cardsID: results.insertId };
    } catch (error) {
        console.error('新增CARDS資料錯誤：', error);
        throw new Error('新增CARDS資料錯誤');
    }
};

// 更新Cards
export const updateCards = async (cardsID, data) => {
    const sql = `UPDATE CARDS 
SET CardImage = ?, Title = ?, Title2 = ?, Paragraph = ?
WHERE cardsID = ?;`;
    try {
        const { results } = await query(sql, [data.CardImage, data.Title, data.Title2, data.Paragraph, cardsID]);
        return results.affectedRows;
    } catch (error) {
        console.error('更新CARDS資料錯誤：', error);
        throw new Error('更新CARDS資料錯誤');
    }
};