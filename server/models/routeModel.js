import  query  from '../db.js';  // 引入資料庫查詢函數

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