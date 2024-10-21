const db = require('../db.js');  // 引入資料庫

// 取得所有使用者
exports.getAllCards = async () => {
    const sql = 'SELECT * FROM CARDS'; 
    return db.query(sql);  // 傳給db
};

exports.postCards = async (data) => {
    const sql = `INSERT INTO CARDS (CardImage, Title, Paragraph) VALUES (?, ?, ?)`;
    try {
        const result = await db.query(sql, [data.CardImage, data.Title, data.Paragraph]);
        // console.log('插入結果:', result.results.insertId); // 確認完整結果
        return { cardsID: result.results.insertId };
    } catch (error) {
        console.error('新增CARDS資料錯誤：', error);
        throw new Error('新增CARDS資料錯誤');
    }
};

//更新Cards
exports.updateCards = async (cardsID, data) => {
    const sql = `UPDATE CARDS 
SET CardImage = ?, Title = ?, Paragraph = ?
WHERE cardsID = ?;
`;
    try {
        const result = await db.query(sql, [data.CardImage, data.Title, data.Paragraph, cardsID]);
        // console.log('插入結果:', result.results.affectedRows); // 確認完整結果
        return result.results.affectedRows ;
    } catch (error) {
        console.error('更新CARDS資料錯誤：', error);
        throw new Error('更新CARDS資料錯誤');
    }
};