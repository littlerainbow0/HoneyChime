import * as seatModel from '../models/seatModel.js';  // 引入模型層

// 取得特定旅程之已預訂座位的資料
export const getOrderedSeatByScheduleID = async (req, res) => {
    const { scheduleID } = req.params;  // 從 URL 獲取 scheduleID 參數
    try {
        const { results } = await seatModel.getOrderedSeatByScheduleID(scheduleID);
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定旅程資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定旅程資料' });
    }
};

// 取得所有座位的資料
export const getAllSeats = async (req, res) => {
    try {
        const { results } = await seatModel.getAllSeats();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得座位資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得座位資料' });
    }
};