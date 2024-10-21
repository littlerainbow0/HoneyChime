import * as routeModel from '../models/routeModel.js';  // 引入模型層

// 取得所有路徑的資料
export const getAllRoute = async (req, res) => {
    try {
        const { results } = await routeModel.getAllRoute();
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得路徑資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得路徑資料' });
    }
};

// 取得特定甜點之路徑的資料
export const getRouteByDessertType = async (req, res) => {
    const { dessertType } = req.params;  // 從 URL 獲取 dessertType 參數
    try {
        const { results } = await routeModel.getRouteByDessertType(dessertType);
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得特定甜點之路徑資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定甜點之路徑資料' });
    }
};
