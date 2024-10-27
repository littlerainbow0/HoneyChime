import * as userModel from '../models/userModel.js';  // 引入模型層
import bcrypt from 'bcrypt'; //密碼加密方式

// 取得所有使用者的資料
export const getAllUsers = async (req, res) => {
    try {
        const { results } = await userModel.getAllUsers();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得使用者資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得使用者資料' });
    }
};

// 取得特定ID之使用者的資料
export const getUserByUserID = async (req, res) => {
    const { userID } = req.params;  // 從 URL 獲取 userID 參數
    try {
        const { results } = await userModel.getUserByUserID(userID);
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定ID之使用者資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定ID之使用者資料' });
    }
};

// 註冊
export const signIn = async (req, res) => {
    const data = req.body;
    const { UserMail, Password } = req.body;

    try {
        const existingUser = await userModel.findByUserMail(UserMail);

        if (existingUser) {
            return res.status(500).json({ message: '該email已註冊' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);
        data.Password = hashedPassword;

        const result = await userModel.signIn(data); // 插入資料  

        res.status(201).json({ message: '註冊資料已成功新增', userID: result.userID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '註冊失敗，請確認傳輸資料內容' });
    }
};

export const logIn = async (req, res) => {
    const { UserMail, Password } = req.body;

    try {
        //尋找該用戶是否存在
        const existingUser = await userModel.findByUserMail(UserMail);
        if (!existingUser) {
            return res.status(401).json({ message: '登入失敗: 用戶不存在' });
        }

        // 驗證密碼
        const match = await bcrypt.compare(Password, existingUser.Password);

        if (!match) {
            return res.status(401).json({ message: '登入失敗: E-mail或密碼錯誤' });
        }

        const isUpdated = await userModel.updateUserLogInTime(existingUser.UserID); // 更新最近登入時間
        if (isUpdated) {
            req.session.UserID = existingUser.UserID; // 登入成功
            req.session.UserMail = existingUser.UserMail;
            res.status(200).json({ message: '登入成功', userMail: req.session.UserMail, userID: req.session.UserID });
        } else {
            res.status(404).json({ message: '更新最近登入時間失敗' });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '登入失敗' });
    }
};


// 更新使用者資料
export const updateUserInfo = async (req, res) => {
    const UserMail = req.session.UserMail;
    const data = req.body;
    const { Password } = req.body;

    try {
        const existingUser = await userModel.findByUserMail(UserMail);

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);
        data.Password = hashedPassword;

        const isUpdated = await userModel.updateUserInfo(existingUser.UserID, data); // 更新資料

        if (isUpdated) {
            res.status(200).json({ message: '該使用者資訊已成功更新', userID: existingUser.UserID });
        } else {
            res.status(404).json({ message: '更新該使用者資訊失敗' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新使用者資料，請確認傳輸資料內容' });
    }
};

//登出
export const logOut = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: '登出失敗' });
        }
        res.json({ message: '登出成功' });
    });
};
