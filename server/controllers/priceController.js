import * as priceModel from '../models/priceModel.js';  // 引入模型層

// 取得特定甜點之餐點的資料
export const getPriceByCarriageType = async (req, res) => {
    const { carriageType } = req.params;  // 從 URL 獲取 carriageType 參數
    try {
        const { results } = await priceModel.getPriceByCarriageType(carriageType);
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定車廂之價錢資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定車廂之價錢資料' });
    }
};