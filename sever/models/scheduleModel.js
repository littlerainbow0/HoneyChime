const db = require('../db.js');  // 引入資料庫

// 取得所有旅程
exports.getAllSchedules = async () => {
    const sql = `SELECT 
    S.ScheduleID,
    S.DepartureDate,
    S.TemplateID,
    T.TemplateDescription,
    R.RouteID,
    SStart.StopName AS StopStartName,
    SEnd.StopName AS StopEndName,
    D.DessertTitle,
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
        return { results } = await db.query(sql);
    } catch (error) {
        console.log('查詢旅程資料錯誤：', error);
        throw new Error('查詢旅程資料錯誤：');
    }
};

exports.getScheduleByDessertType = async (dessertType) => {
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
        return { results } = await db.query(sql, [dessertType]);  // 使用 dessertType 參數進行查詢
    } catch (error) {
        console.log('查詢特定甜點之旅程資料錯誤：', error);
        throw new Error('查詢特定甜點之旅程資料錯誤');
    }
};

exports.postSchedule = async (data) => {
    const sql = `INSERT INTO SCHEDULES (TemplateID, DepartureDate, DepartureTimeID) VALUES (?, ?, ?)`;
    try {
        const result = await db.query(sql, [data.TemplateID, data.DepartureDate, data.DepartureTimeID]);
        // console.log('插入結果:', result.results.insertId); // 確認完整結果
        return { scheduleID: result.results.insertId };
    } catch (error) {
        console.error('新增CARDS資料錯誤：', error);
        throw new Error('新增CARDS資料錯誤');
    }
};

exports.updateSchedule = async (scheduleID, data) => {
    const sql = `UPDATE SCHEDULES 
SET TemplateID = ?, DepartureDate = ?, DepartureTimeID = ?
WHERE scheduleID = ?;`;
    try {
        const result = await db.query(sql, [data.TemplateID, data.DepartureDate, data.DepartureTimeID, scheduleID]);
        // console.log('插入結果:', result.results.affectedRows); // 確認完整結果
        return result.results.affectedRows ;
    } catch (error) {
        console.error('更新旅程資料錯誤：', error);
        throw new Error('更新旅程資料錯誤');
    }
};


