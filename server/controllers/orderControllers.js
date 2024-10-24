import * as orderModel from '../models/orderModel.js';  // 引入模型層

// 取得所有訂單的資料
export const getAllOrders = async (req, res) => {
    try {
        const { results } = await orderModel.getAllOrders();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得訂單資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得訂單資料' });
    }
};

// 取得特定甜點之旅途的資料
export const getOrderByUserID = async (req, res) => {
    const { userID } = req.params;  // 從 URL 獲取 userID 參數
    try {
        const { results } = await orderModel.getOrderByUserID(userID);
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定使用者ID之訂單資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定使用者ID之訂單資料' });
    }
};

// 新增訂單
export const postOrder = async (req, res) => {
    const data = req.body; //
    try {
        const result = await orderModel.postOrder(data); // 插入資料
        res.status(201).json({ message: '訂單資料已成功新增', orderID: result.orderID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增訂單資料，請確認傳輸資料內容' });
    }
};

// 更新訂單
export const updateUserOrder = async (req, res) => {
    const { orderID } = req.params;  // 從 URL 獲取 orderID 參數
    const data = req.body; 
    try {
        const isUpdated = await orderModel.updateUserOrder(orderID, data); // 更新資料
        if (isUpdated) {
            res.status(200).json({ message: '該訂單已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該訂單' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新訂單資料，請確認傳輸資料內容' });
    }
};