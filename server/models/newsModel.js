import  query  from '../db.js';  // 引入資料庫查詢函數

// 取得所有新聞
export const getAllNews = async () => {
    const sql = 'SELECT * FROM NEWS'; 
    return query(sql);  // 傳給db
};

export const postNews = async (data) => {
    const sql = `INSERT INTO NEWS (Date, Category, Content) VALUES (?, ?, ?)`;
    try {
        const result = await query(sql, [data.Date, data.Category, data.Content]);
        return { newsID: result.results.insertId };
    } catch (error) {
        console.error('新增NEWS資料錯誤：', error);
        throw new Error('新增NEWS資料錯誤');
    }
};

export const updateNews = async (newsID, data) => {
    const sql = `UPDATE NEWS 
SET Date = ?, Category = ?, Content = ?
WHERE newsID = ?;`;
    try {
        const result = await query(sql, [data.Date, data.Category, data.Content, newsID]);
        return result.results.affectedRows;
    } catch (error) {
        console.error('更新NEWS資料錯誤：', error);
        throw new Error('更新NEWS資料錯誤');
    }
};