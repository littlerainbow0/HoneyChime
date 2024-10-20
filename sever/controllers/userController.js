const userModel = require('../models/userModel.js');  // 引入模型層

// 取得所有使用者的資料
exports.getAllUsers = async (req, res) => {
    try {
        const { results } = await userModel.getAllUsers();
        res.json(results);  // 返回 JSON 格式的使用者資料
    } catch (error) {
        console.error('取得使用者資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得使用者資料' });
    }
};

// 取得特定ID之使用者的資料
exports.getUserByUserID = async (req, res) => {
    const { userID } = req.params;  // 從 URL 獲取 scheduleID 參數
    try {
        const { results } = await userModel.getUserByUserID(userID);
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得特定ID之使用者資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定ID之使用者資料：' });
    }
};

//註冊
exports.signIn = async (req, res) => {
    const data = req.body; //
    try {
        const result = await userModel.signIn(data); // 插入資料
        // console.log('插入結果:', result); 
        res.status(201).json({ message: '註冊資料已成功新增' , userID: result.userID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增註冊資料，請確認傳輸資料內容' });
    }
};


//更新使用者資料
exports.updateUserInfo = async (req, res) => {
    const {userID } = req.params;  // 從 URL 獲取 scheduleID 參數
    const data = req.body; 
    try {
        const isUpdated  = await userModel.updateUserInfo(userID , data); // 更新資料
        // console.log(isUpdated);        
        if (isUpdated) {
            res.status(200).json({ message: '該使用者資訊已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該使用者' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新旅程資料，請確認傳輸資料內容' });
    }
};

//更新使用者資料
exports.updateUserLogInTime = async (req, res) => {
    const {userID } = req.params;  // 從 URL 獲取 scheduleID 參數
    const data = req.body; 
    try {
        const isUpdated  = await userModel.updateUserLogInTime(userID , data); // 更新資料
        // console.log(isUpdated);        
        if (isUpdated) {
            res.status(200).json({ message: '該使用者最近登入時間已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該使用者' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新旅程資料，請確認傳輸資料內容' });
    }
};


