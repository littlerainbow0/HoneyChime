const db = require('../db.js');  // 引入資料庫

exports.getMealsByDessertType = async (dessertType) => {
    const sql = `SELECT 
    M.MealID,
    M.MealName,
    M.MealImagePath,
    M.MealContent,
    M.MealDescription
FROM 
    DESSERTS D
JOIN 
    MEALS M ON D.DessertTypeID = M.DessertTypeID
WHERE 
    D.DessertType = ?;`;
    try {
        return { results } = await db.query(sql, [dessertType]);  // 使用 dessertType 參數進行查詢
    } catch (error) {
        console.log('查詢特定甜點之餐點資料錯誤：', error);
        throw new Error('查詢特定甜點之餐點資料錯誤：');
    }
};


exports.getMenuByOrderID = async (orderID) => {
    const sql = `SELECT 
    O.PeopleNum,
    T.MenuFirst,
    T.MenuSecond,
    C.CarriageType
FROM 
    ORDERS O
JOIN 
    SCHEDULES S ON O.ScheduleID = S.ScheduleID
JOIN 
    TEMPLATES T ON S.TemplateID = T.TemplateID
JOIN 
    SEATS SE ON O.SeatID = SE.SeatID
JOIN 
    CARRIAGES C ON SE.CarriageID = C.CarriageID
WHERE 
    O.OrderID = ?;  `;
    try {
        return { results } = await db.query(sql, [orderID]);  // 使用 ScheduleID 參數進行查詢
    } catch (error) {
        console.log('查詢特定特定訂單ID之菜單的資料錯誤：', error);
        throw new Error('查詢特定特定訂單ID之菜單的資料錯誤：');
    }
};

//取得所有甜點類型資料
exports.getAllDessertType = async () => {
    const sql = `SELECT * FROM DESSERTS`;

    try {
        return { results } = await db.query(sql);  
    } catch (error) {
        console.log('查詢甜點類型資料錯誤：', error);
        throw new Error('查詢甜點類型資料錯誤：');
    }
};