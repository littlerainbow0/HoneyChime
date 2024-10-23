import  query  from '../db.js';  // 引入資料庫查詢函數

// 取得特定旅程之所有預定之座位
export const getOrderedSeatByScheduleID = async (scheduleID) => {
    const sql = `SELECT 
    S.SeatID,
    S.SeatName
FROM 
    ORDERS O
JOIN 
    SEATS S ON O.SeatID = S.SeatID
WHERE 
    O.ScheduleID = ?;`;
    
    try {
        const { results } = await query(sql, [scheduleID]);  // 使用 scheduleID 參數進行查詢
        return { results };
    } catch (error) {
        console.log('查詢特定旅程之已預定座位資料錯誤：', error);
        throw new Error('查詢特定旅程之已預定座位資料錯誤：');
    }
};