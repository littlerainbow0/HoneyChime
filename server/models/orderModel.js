import query from '../db.js';  // 引入資料庫查詢函數
import * as modelFuns from './modelFuns.js';

// 取得所有訂單
export const getAllOrders = async () => {
    const sql = `SELECT 
    O.OrderID,
    O.UserID,
    O.OrderTime,
    O.PaymentStatus,
    O.BookerDetailID,
    O.ScheduleID,
    O.PeopleNum,
    U.userName,
    D.DessertTitle,
    S.StopName AS StopStartName,
    E.StopName AS StopEndName,
    C.Price,
    SE.SeatName,
    DT.DepartureTime,
    Sch.DepartureDate,
    M1.MealName AS MealFirstName,
    M2.MealName AS MealSecondName,
    M3.MealName AS MealThirdName,
    M4.MealName AS MealFourthName
FROM 
    ORDERS O
JOIN 
    USERS U ON O.UserID = U.UserID
JOIN 
    SCHEDULES Sch ON O.ScheduleID = Sch.ScheduleID
JOIN 
    TEMPLATES T ON Sch.TemplateID = T.TemplateID
JOIN 
    DESSERTS D ON T.DessertTypeID = D.DessertTypeID
JOIN 
    ROUTES R ON T.RouteID = R.RouteID
JOIN 
    STOPS S ON R.StopStart = S.StopID
JOIN 
    STOPS E ON R.StopEnd = E.StopID
JOIN 
    SEATS SE ON O.SeatID = SE.SeatID
JOIN 
    CARRIAGES C ON SE.CarriageID = C.CarriageID
JOIN 
    DEPARTURETIMES DT ON Sch.DepartureTimeID = DT.DepartureTimeID
LEFT JOIN 
    MEALS M1 ON O.MealFirst = M1.MealID
LEFT JOIN 
    MEALS M2 ON O.MealSecond = M2.MealID
LEFT JOIN 
    MEALS M3 ON O.MealThird = M3.MealID
LEFT JOIN 
    MEALS M4 ON O.MealFourth = M4.MealID`;

    try {
        const { results } = await query(sql);
        return { results };
    } catch (error) {
        console.log('查詢訂單資料錯誤：', error);
        throw new Error('查詢訂單資料錯誤：');
    }
};

export const getOrderByUserID = async (userID) => {
    const sql = `SELECT 
    O.OrderID,
    O.UserID,
    O.OrderTime,
    O.PaymentStatus,
    O.BookerDetailID,
    O.ScheduleID,
    O.PeopleNum,
    U.userName,
    D.DessertTitle,
    S.StopName AS StopStartName,
    E.StopName AS StopEndName,
    C.Price,
    SE.SeatName,
    DT.DepartureTime,
    Sch.DepartureDate,
    M1.MealName AS MealFirstName,
    M2.MealName AS MealSecondName,
    M3.MealName AS MealThirdName,
    M4.MealName AS MealFourthName
FROM 
    ORDERS O
JOIN 
    USERS U ON O.UserID = U.UserID
JOIN 
    SCHEDULES Sch ON O.ScheduleID = Sch.ScheduleID
JOIN 
    TEMPLATES T ON Sch.TemplateID = T.TemplateID
JOIN 
    DESSERTS D ON T.DessertTypeID = D.DessertTypeID
JOIN 
    ROUTES R ON T.RouteID = R.RouteID
JOIN 
    STOPS S ON R.StopStart = S.StopID
JOIN 
    STOPS E ON R.StopEnd = E.StopID
JOIN 
    SEATS SE ON O.SeatID = SE.SeatID
JOIN 
    CARRIAGES C ON SE.CarriageID = C.CarriageID
JOIN 
    DEPARTURETIMES DT ON Sch.DepartureTimeID = DT.DepartureTimeID
LEFT JOIN 
    MEALS M1 ON O.MealFirst = M1.MealID
LEFT JOIN 
    MEALS M2 ON O.MealSecond = M2.MealID
LEFT JOIN 
    MEALS M3 ON O.MealThird = M3.MealID
LEFT JOIN 
    MEALS M4 ON O.MealFourth = M4.MealID
 WHERE
 	O.UserID=?;`;

    try {
        const { results } = await query(sql, [userID]);  // 使用 userID 參數進行查詢
        return { results };
    } catch (error) {
        console.log('查詢特定使用者ID之訂單資料錯誤：', error);
        throw new Error('查詢特定使用者ID之訂單資料錯誤');
    }
};

export const postOrder = async (data) => {
    const sql = `INSERT INTO ORDERS (UserID, BookerDetailID, ScheduleID, OrderTime, 
    PaymentStatus, SeatID, PeopleNum, MealFirst, MealSecond, MealThird, MealFourth) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    try {
        const { results } = await query(sql, [data.UserID, data.BookerDetailID, data.ScheduleID, data.OrderTime, data.PaymentStatus, data.SeatID, data.PeopleNum, data.MealFirst, data.MealSecond, data.MealThird, data.MealFourth]);
        return { orderID: results.insertId };
    } catch (error) {
        console.error('新增訂單資料錯誤：', error);
        throw new Error('新增訂單資料錯誤');
    }
};

// 更新訂單(user)
export const updateUserOrder = async (orderID, data) => {
    const sql = `UPDATE ORDERS
SET PaymentStatus = ?, MealFirst = ?, MealSecond = ?, MealThird = ?, MealFourth = ?
WHERE orderID = ?;`;

    try {
        const { results } = await query(sql, [data.PaymentStatus, data.MealFirst, data.MealSecond, data.MealThird, data.MealFourth, orderID]);
        return results.affectedRows;
    } catch (error) {
        console.error('更新訂單資料錯誤：', error);
        throw new Error('更新訂單資料錯誤');
    }
};