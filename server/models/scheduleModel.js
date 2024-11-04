import query from '../db.js';  // 引入資料庫查詢函數
import * as modelFuns from './modelFuns.js';

// 取得所有旅程
export const getAllSchedules = async () => {
    const sql = `SELECT 
    S.ScheduleID,
    S.DepartureDate,
    S.TemplateID,
    T.TemplateDescription,
    R.RouteID,
    SStart.StopName AS StopStartName,
    SEnd.StopName AS StopEndName,
    D.DessertTitle,
    D.DessertTypeID,
    DT.DepartureTime
FROM 
    SCHEDULES S
LEFT JOIN 
    TEMPLATES T ON S.TemplateID = T.TemplateID
LEFT JOIN 
    ROUTES R ON T.RouteID = R.RouteID
LEFT JOIN 
    STOPS SStart ON R.StopStart = SStart.StopID
LEFT JOIN 
    STOPS SEnd ON R.StopEnd = SEnd.StopID
LEFT JOIN 
    DESSERTS D ON T.DessertTypeID = D.DessertTypeID
LEFT JOIN 
    DEPARTURETIMES DT ON S.DepartureTimeID = DT.DepartureTimeID`;

    try {
        const { results } = await query(sql);
        results.forEach((value, index) => {
            results[index].Expired = modelFuns.isExpired(results[index].DepartureDate);
            results[index].DepartureDate = modelFuns.dateFormat(value.DepartureDate);
        });
        return { results };
    } catch (error) {
        console.log('查詢旅程資料錯誤：', error);
        throw new Error('查詢旅程資料錯誤：');
    }
};

export const getScheduleByDessertType = async (dessertType) => {
    const sql = `SELECT 
    S.ScheduleID,
    S.DepartureDate,
    DT.DepartureTime,
    R.Duration,
    StartStop.StopName AS StartStopName,
    EndStop.StopName AS EndStopName
FROM 
    DESSERTS D
JOIN 
    TEMPLATES T ON D.DessertTypeID = T.DessertTypeID
JOIN 
    SCHEDULES S ON T.TemplateID = S.TemplateID
LEFT JOIN 
    DEPARTURETIMES DT ON S.DepartureTimeID = DT.DepartureTimeID
JOIN 
    ROUTES R ON T.RouteID = R.RouteID
JOIN 
    STOPS StartStop ON R.StopStart = StartStop.StopID
JOIN 
    STOPS EndStop ON R.StopEnd = EndStop.StopID
WHERE 
    D.DessertType = ?;`;

    try {
        const { results } = await query(sql, [dessertType]);  // 使用 dessertType 參數進行查詢
        results.forEach((value, index) => {
            results[index].Expired = modelFuns.isExpired(results[index].DepartureDate);
            results[index].DepartureDate = modelFuns.dateFormat(value.DepartureDate);
        });
        return { results };
    } catch (error) {
        console.log('查詢特定甜點之旅程資料錯誤：', error);
        throw new Error('查詢特定甜點之旅程資料錯誤');
    }
};

export const getDepartureTimeID = async () => {
    const sql = `
    SELECT * FROM departuretimes
    `;
    try {
        const { results } = await query(sql); 
        // results.forEach((value, index) => {
        //     results[index].Expired = modelFuns.isExpired(results[index].DepartureDate);
        //     results[index].DepartureDate = modelFuns.dateFormat(value.DepartureDate);
        // });
        return { results };
    } catch (error) {
        console.log('查詢發車時間之旅程資料錯誤：', error);
        throw new Error('查詢發車時間之旅程資料錯誤');
    }
};

export const postSchedule = async (data) => {
    const sql = `INSERT INTO SCHEDULES (TemplateID, DepartureDate, DepartureTimeID) VALUES (?, ?, ?)`;
    try {
        const { results } = await query(sql, [data.TemplateID, data.DepartureDate, data.DepartureTimeID]);
        return { scheduleID: results.insertId };
    } catch (error) {
        console.error('新增旅程資料錯誤：', error);
        throw new Error('新增旅程資料錯誤');
    }
};

export const updateSchedule = async (scheduleID, data) => {
    const sql = `UPDATE SCHEDULES 
SET TemplateID = ?, DepartureDate = ?, DepartureTimeID = ?
WHERE scheduleID = ?;`;
    try {
        const { results } = await query(sql, [data.TemplateID, data.DepartureDate, data.DepartureTimeID, scheduleID]);
        return results.affectedRows;
    } catch (error) {
        console.error('更新旅程資料錯誤：', error);
        throw new Error('更新旅程資料錯誤');
    }
};