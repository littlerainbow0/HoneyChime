const scheduleModel = require('../models/scheduleModel');  // 引入模型層

// 取得所有旅途的資料
exports.getAllSchedules = async (req, res) => {
    try {
        const { results } = await scheduleModel.getAllSchedules();
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得旅程資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得旅程資料' });
    }
};

// 取得特定甜點之旅程的資料
exports.getScheduleByDessertType = async (req, res) => {
    const { dessertType } = req.params;  // 從 URL 獲取 dessertType 參數
    try {
        const { results } = await scheduleModel.getScheduleByDessertType(dessertType);
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得特定甜點之旅程資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定甜點之旅程資料' });
    }
};

//新增旅程
exports.postSchedule = async (req, res) => {
    const data = req.body; //
    try {
        const result = await scheduleModel.postSchedule(data); // 插入資料
        // console.log('插入結果:', result); 
        res.status(201).json({ message: '旅程資料已成功新增' , scheduleID: result.scheduleID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增旅程資料，請確認傳輸資料內容' });
    }
};

//更新旅程
exports.updateSchedule = async (req, res) => {

    const { scheduleID } = req.params;  // 從 URL 獲取 scheduleID 參數
    const data = req.body; 
    try {
        const isUpdated  = await scheduleModel.updateSchedule(scheduleID , data); // 更新資料
        // console.log(isUpdated);        
        if (isUpdated) {
            res.status(200).json({ message: '該旅程資料已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該旅程' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新旅程資料，請確認傳輸資料內容' });
    }
};


