const templateModel = require('../models/templateModel');  // 引入模型層

// 取得所有範本的資料
exports.getAllTemplate = async (req, res) => {
    try {
        const { results } = await templateModel.getAllTemplate();
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得旅程資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得旅程資料' });
    }
};

// 取得特定旅程之範本的資料
exports.getTemplateByScheduleID = async (req, res) => {
    const { scheduleID } = req.params;  // 從 URL 獲取 scheduleID 參數
    try {
        const { results } = await templateModel.getTemplateByScheduleID(scheduleID);
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得特定甜點之旅程資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定甜點之旅程資料' });
    }
};

exports.postTemplate = async (req, res) => {
    const data = req.body; //
    try {
        const result = await templateModel.postTemplate(data); // 插入資料
        // console.log('插入結果:', result); 
        res.status(201).json({ message: '範本資料已成功新增' , templateID: result.templateID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增範本資料，請確認傳輸資料內容' });
    }
};

//更新範本
exports.updateTemplate = async (req, res) => {

    const { templateID } = req.params;  // 從 URL 獲取 scheduleID 參數
    const data = req.body; 
    try {
        const isUpdated  = await templateModel.updateTemplate(templateID , data); // 更新資料
        // console.log(isUpdated);        
        if (isUpdated) {
            res.status(200).json({ message: '該範本已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該範本' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新旅程資料，請確認傳輸資料內容' });
    }
};

