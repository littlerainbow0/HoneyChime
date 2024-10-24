import * as routeModel from '../models/routeModel.js';  // 引入模型層

// 取得所有路徑的資料
export const getAllRoute = async (req, res) => {
    try {
        const { results } = await routeModel.getAllRoute();
        res.json(results);  // 返回 JSON 格式的資料
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
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定甜點之路徑資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定甜點之路徑資料' });
    }
};

// 取得所有站點的資料
export const getAllStops = async (req, res) => {
    try {
        const { results } = await routeModel.getAllStops();
        res.json(results);  // 返回 JSON 格式的路徑資料
    } catch (error) {
        console.error('取得站點資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得站點資料' });
    }
};

// 新增路線
export const postRoute = async (req, res) => {
    const data = req.body; //
    try {
        const result = await routeModel.postRoute(data); // 插入資料
        res.status(201).json({ message: '路線資料已成功新增', routeID: result.routeID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增路線資料，請確認傳輸資料內容' });
    }
};

// 更新範本
export const updateRoute = async (req, res) => {
    const { routeID } = req.params;  // 從 URL 獲取 templateID 參數
    const data = req.body; 
    try {
        const isUpdated = await routeModel.updateRoute(routeID, data); // 更新資料
        if (isUpdated) {
            res.status(200).json({ message: '該路線已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該路線' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新路線資料，請確認傳輸資料內容' });
    }
};

