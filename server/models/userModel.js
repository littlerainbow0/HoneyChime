const db = require('../db.js');  // 引入資料庫

// 取得所有使用者
exports.getAllUsers = async () => {
    const sql = 'SELECT * FROM USERS';  // 查詢所有使用者的 SQL 語句
    return db.query(sql);
};

exports.getUserByUserID = async (userID) => {
    const sql = `SELECT * 
FROM USERS 
WHERE userID = ?`;
    try {
        return { results } = await db.query(sql, [userID]);  // 使用 userID 參數進行查詢
    } catch (error) {
        console.log('查詢特定ID之使用者資料錯誤：', error);
        throw new Error('查詢特定ID之使用者資料錯誤：');
    }
};

exports.signIn = async (data) => {
    const sql = `INSERT INTO USERS (UserName, UserPhone, UserMail,  
    Password, Sex, Birth, RegistrationTime) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    try {
        const result = await db.query(sql, [data.UserName, data.UserPhone, data.UserMail, data.Password, data.Sex, data.Birth, data.RegistrationTime]);
        // console.log('插入結果:', result.results.insertId); // 確認完整結果
        return { userID: result.results.insertId };
    } catch (error) {
        console.error('新增註冊資料錯誤：', error);
        throw new Error('新增註冊資料錯誤');
    }
};


//更新使用者資訊
exports.updateUserInfo = async (userID, data) => {
    const sql = `UPDATE USERS
SET UserName = ?, UserPhone = ?, UserMail = ?, Password = ?, Birth = ?, 
Sex = ?
WHERE userID = ?;`;

    try {
        const result = await db.query(sql, [data.UserName, data.UserPhone, data.UserMail, data.Password, data.Birth, data.Sex, userID]);
        // console.log('插入結果:', result.results.affectedRows); // 確認完整結果
        return result.results.affectedRows ;
    } catch (error) {
        console.error('更新使用者資料錯誤：', error);
        throw new Error('更新使用者資料錯誤');
    }
};

//更新使用者最近登入時間
exports.updateUserLogInTime = async (userID, data) => {
    const sql = `UPDATE USERS
SET LatestLogin = ?
WHERE userID = ?;`;
    try {
        const result = await db.query(sql, [data.LatestLogin, userID]);
        // console.log('插入結果:', result.results.affectedRows); // 確認完整結果
        return result.results.affectedRows ;
    } catch (error) {
        console.error('更新使用者最近登入時間錯誤：', error);
        throw new Error('更新使用者最近登入時間錯誤');
    }
};
