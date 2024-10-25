import query from '../db.js';  // 引入資料庫查詢函數

// 取得所有範本
export const getAllTemplate = async () => {
    const sql = `SELECT 
    T.TemplateID,
    T.TemplateDescription,
    T.RouteID,
    D.DessertTitle,
    S1.StopName AS StopStartName,
    S2.StopName AS StopEndName,
    M1.MealID AS MenuFirstID,
    M1.MealName AS MenuFirstName,
    M1.MealImagePath AS MenuFirstImage,
    M2.MealID AS MenuSecondID,
    M2.MealName AS MenuSecondName,
    M2.MealImagePath AS MenuSecondImage
FROM 
    TEMPLATES T
LEFT JOIN 
    DESSERTS D ON T.DessertTypeID = D.DessertTypeID
LEFT JOIN 
    ROUTES R ON T.RouteID = R.RouteID
LEFT JOIN 
    STOPS S1 ON R.StopStart = S1.StopID
LEFT JOIN 
    STOPS S2 ON R.StopEnd = S2.StopID
LEFT JOIN 
    MEALS M1 ON T.MenuFirst = M1.MealID
LEFT JOIN 
    MEALS M2 ON T.MenuSecond = M2.MealID`;

    try {
        const { results } = await query(sql);
        return { results };
    } catch (error) {
        console.log('查詢範本資料錯誤：', error);
        throw new Error('查詢範本資料錯誤：');
    }
};

export const getTemplateByScheduleID = async (scheduleID) => {
    const sql = `SELECT 
    S.ScheduleID,
    S.DepartureDate,
    DT.DepartureTime,
    SS.StopName AS StopStart,
    SE.StopName AS StopEnd,
    R.RouteImagePath,
    M1.MealID AS MenuFirstID,
    M1.MealName AS MenuFirstName,
    M1.MealImagePath AS MenuFirstImagePath,
    M1.MealContent AS MenuFirstContent,
    M2.MealID AS MenuSecondID,
    M2.MealName AS MenuSecondName,
    M2.MealImagePath AS MenuSecondImagePath,
    M2.MealContent AS MenuSecondContent
FROM 
    SCHEDULES S
JOIN 
    DEPARTURETIMES DT ON S.DepartureTimeID = DT.DepartureTimeID
JOIN 
    TEMPLATES T ON S.TemplateID = T.TemplateID
JOIN 
    ROUTES R ON T.RouteID = R.RouteID
JOIN 
    STOPS SS ON R.StopStart = SS.StopID
JOIN 
    STOPS SE ON R.StopEnd = SE.StopID
LEFT JOIN 
    MEALS M1 ON T.MenuFirst = M1.MealID
LEFT JOIN 
    MEALS M2 ON T.MenuSecond = M2.MealID
WHERE 
    S.ScheduleID = ?`;

    try {
        const { results } = await query(sql, [scheduleID]);  // 使用 ScheduleID 參數進行查詢
        return { results };
    } catch (error) {
        console.log('查詢特定旅程之範本資料錯誤：', error);
        throw new Error('查詢特定旅程之範本資料錯誤');
    }
};

export const postTemplate = async (data) => {
    const sql = `INSERT INTO TEMPLATES (DessertTypeID, RouteID, TemplateDescription, 
    MenuFirst, MenuSecond) 
    VALUES (?, ?, ?, ?, ?)`;

    try {
        const { results } = await query(sql, [data.DessertTypeID, data.RouteID, data.TemplateDescription, data.MenuFirst, data.MenuSecond]);
        return { templateID: results.insertId };
    } catch (error) {
        console.error('新增範本資料錯誤：', error);
        throw new Error('新增範本資料錯誤');
    }
};

// 更新範本
export const updateTemplate = async (templateID, data) => {
    const sql = `UPDATE TEMPLATES
SET DessertTypeID = ?, RouteID = ?, MenuFirst = ?, MenuSecond = ?, TemplateDescription = ?
WHERE templateID = ?;`;

    try {
        const { results } = await query(sql, [data.DessertTypeID, data.RouteID, data.MenuFirst, data.MenuSecond, data.TemplateDescription, templateID]);
        return results.affectedRows;
    } catch (error) {
        console.error('更新範本資料錯誤：', error);
        throw new Error('更新範本資料錯誤');
    }
};