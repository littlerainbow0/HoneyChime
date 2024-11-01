import query from '../db.js';  // 引入資料庫查詢函數
import * as modelFuns from './modelFuns.js';

// 取得所有使用者
export const getAllUsers = async () => {
    const sql = 'SELECT * FROM USERS';  // 查詢所有使用者的 SQL 語句
    const { results } = await query(sql);

    results.forEach((value, index) => {
        results[index].Birth = modelFuns.dateFormat(value.Birth);
        results[index].RegistrationTime = modelFuns.dateTimeFormat(value.RegistrationTime);
    });
    return { results };  // 使用 query 函數執行查詢
};

export const getUserByUserID = async (userID) => {
    const sql = `SELECT * 
FROM USERS 
WHERE userID = ?`;
    try {
        const { results } = await query(sql, [userID]);  // 使用 userID 參數進行查詢
        results.forEach((value, index) => {
            results[index].Birth = modelFuns.dateFormat(value.Birth);
            results[index].RegistrationTime = modelFuns.dateTimeFormat(value.RegistrationTime);
        });
        return { results };
    } catch (error) {
        console.log('查詢特定ID之使用者資料錯誤：', error);
        throw new Error('查詢特定ID之使用者資料錯誤：');
    }
};


export const findByUserMail = async (userMail) => {
    const sql = `SELECT * FROM USERS WHERE UserMail = ?`;
    const { results } = await query(sql, [userMail]);

    return results[0]; // 返回第一個匹配的用戶
};


//註冊
export const signIn = async (data) => {
    const sql = `INSERT INTO USERS (UserName, UserPhone, UserMail,  
    Password, Sex, Birth, RegistrationTime) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    try {
        const { results } = await query(sql, [data.UserName, data.UserPhone, data.UserMail, data.Password, data.Sex, data.Birth, (new Date())]);
        // console.log(results.insertId);

        return { userID: results.insertId };  // 返回新增使用者的 ID
    } catch (error) {
        console.error('新增註冊資料錯誤：', error);
        throw new Error('新增註冊資料錯誤');
    }
};

// 更新使用者資訊
export const updateUserInfo = async (userID, data) => {
    const sql = `UPDATE USERS
SET UserName = ?, UserPhone = ?, Password = ?, Birth = ?, 
Sex = ?
WHERE userID = ?;`;

    try {
        const { results } = await query(sql, [data.UserName, data.UserPhone, data.Password, data.Birth, data.Sex, userID]);
        return results.affectedRows;  // 返回受影響的行數
    } catch (error) {
        console.error('更新使用者資料錯誤：', error);
        throw new Error('更新使用者資料錯誤');
    }
};

// 更新使用者最近登入時間
export const updateUserLogInTime = async (userID) => {
    const sql = `UPDATE USERS
SET LatestLogin = ?
WHERE userID = ?;`;
    try {
        const { results } = await query(sql, [(new Date()), userID]);
        return results.affectedRows;  // 返回受影響的行數
    } catch (error) {
        console.error('更新使用者最近登入時間錯誤：', error);
        throw new Error('更新使用者最近登入時間錯誤');
    }
};
//取得驗證碼與時效
export const getValidity = async (userID) => {
    const sql = `SELECT Validity,
    ValidityExpired
    FROM USERS 
    WHERE userID = ?`; // 查詢所有使用者的 SQL 語句
    const { results } = await query(sql, [userID]);
    return { results };  // 使用 query 函數執行查詢
};

//更新驗證碼與有效期限
export const updateUserValidate = async (userID, hashedCode, expirationTime) => {
    const exptime = new Date(expirationTime);
    const sql = `UPDATE USERS
    SET Validity = ?,
    ValidityExpired = ?
WHERE userID = ?;`;
    try {   
        const { results } = await query(sql, [hashedCode, exptime, userID]);
        return results.affectedRows;  // 返回受影響的行數
    } catch (error) {
        console.error('更新驗證碼錯誤：', error);
        throw new Error('更新驗證碼錯誤');
    }
};

//更新密碼
export const updateUserPassword = async (userID, hashedCode) => {
    const sql = `UPDATE USERS
    SET Password = ?
WHERE userID = ?;`;
    try {
        const { results } = await query(sql, [hashedCode.Password, userID]);
        return results.affectedRows;  // 返回受影響的行數
    } catch (error) {
        console.error('更新密碼錯誤：', error);
        throw new Error('更新密碼錯誤');
    }
};


