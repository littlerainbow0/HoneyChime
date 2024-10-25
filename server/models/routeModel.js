import query from '../db.js';  // 引入資料庫查詢函數

// 取得所有路線
export const getAllRoute = async () => {
    const sql = `SELECT 
    R.RouteID,
    R.RouteImagePath,
    R.Duration,
    R.Description,
    R.LandScapeImage1,
    R.LandScapeImage2,
    R.LandScapeImage3,
    R.LandScapeDescription,
    S1.StopName AS StopStartName,
    S2.StopName AS StopEndName
FROM 
    ROUTES R
JOIN 
    STOPS S1 ON R.StopStart = S1.StopID
JOIN 
    STOPS S2 ON R.StopEnd = S2.StopID`;

    try {
        const { results } = await query(sql);
        return { results };
    } catch (error) {
        console.log('查詢路線資料錯誤：', error);
        throw new Error('查詢路線資料錯誤');
    }
};

//取得所有站點
export const getAllStops = async () => {
    const sql = `SELECT * FROM STOPS;`;

    try {
        const { results } = await query(sql);
        return { results };
    } catch (error) {
        console.log('查詢站點資料錯誤：', error);
        throw new Error('查詢站點資料錯誤');
    }
};

export const getRouteByDessertType = async (dessertType) => {
    const sql = `SELECT
    R.RouteID,
    R.RouteImagePath,
    R.Duration,
    R.Description,
    R.LandScapeImage1,
    R.LandScapeImage2,
    R.LandScapeImage3,
    R.LandScapeDescription,
    StartStop.StopName AS StartStopName,
    EndStop.StopName AS EndStopName
FROM
    DESSERTS D
JOIN
    TEMPLATES T ON D.DessertTypeID = T.DessertTypeID
JOIN
    ROUTES R ON T.RouteID = R.RouteID
JOIN
    Stops StartStop ON R.StopStart = StartStop.StopID
JOIN
    Stops EndStop ON R.StopEnd = EndStop.StopID
WHERE
    D.DessertType = ?;`;

    try {
        const { results } = await query(sql, [dessertType]);  // 使用 dessertType 參數進行查詢
        return { results };
    } catch (error) {
        console.log('查詢特定甜點之路線資料錯誤：', error);
        throw new Error('查詢特定甜點之路線資料錯誤');
    }
};

export const postRoute = async (data) => {
    const sql = `INSERT INTO ROUTES (StopStart, StopEnd, RouteImagePath, Duration,
    Description, LandScapeImage1, LandScapeImage2, LandScapeImage3, LandScapeDescription) VALUES 
    (?,?,?,?,?,?,?,?,?)`;
    try {
        const { results } = await query(sql, [data.StopStart, data.StopEnd, data.RouteImagePath, data.Duration, data.Description, data.LandScapeImage1, data.LandScapeImage2, data.LandScapeImage3, data.LandScapeDescription]);
        return { routeID: results.insertId };
    } catch (error) {
        console.error('新增訂單資料錯誤：', error);
        throw new Error('新增訂單資料錯誤');
    }
};

// 更新路線
export const updateRoute = async (routeID, data) => {
    const sql = `UPDATE ROUTES
SET StopStart = ?, StopEnd = ?, RouteImagePath = ?, Duration = ?, 
Description = ?, LandScapeImage1 = ?, LandScapeImage2 = ?, LandScapeImage3 = ?, LandScapeDescription = ?
WHERE routeID = ?;`;

    try {
        const { results } = await query(sql, [data.StopStart, data.StopEnd, data.RouteImagePath, data.Duration, data.Description, data.LandScapeImage1, data.LandScapeImage2, data.LandScapeImage3, data.LandScapeDescription, routeID]);
        return results.affectedRows;
    } catch (error) {
        console.error('更新路線資料錯誤：', error);
        throw new Error('更新路線資料錯誤');
    }
};