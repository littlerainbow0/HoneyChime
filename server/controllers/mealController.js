import * as mealModel from '../models/mealModel.js';  // 引入模型層

// 取得特定甜點之餐點的資料
export const getMealsByDessertType = async (req, res) => {
    const { dessertType } = req.params;  // 從 URL 獲取 dessertType 參數
    try {
        const { results } = await mealModel.getMealsByDessertType(dessertType);
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定甜點之餐點資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定甜點之餐點資料' });
    }
};

// 取得特定訂單ID之菜單的資料
export const getMenuByOrderID = async (req, res) => {
    const { orderID } = req.params;  // 從 URL 獲取 orderID 參數
    try {
        const { results } = await mealModel.getMenuByOrderID(orderID);
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定訂單ID之菜單的資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定訂單ID之菜單的資料' });
    }
};

// 取得所有甜點類型資料
export const getAllDessertType = async (req, res) => {
    try {
        const { results } = await mealModel.getAllDessertType();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得甜點類型資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得甜點類型資料' });
    }
};

// 取得所有甜點資料
export const getAllMeals = async (req, res) => {
    try {
        const { results } = await mealModel.getAllMeals();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得甜點類型資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得甜點類型資料' });
    }
};

export const  postMeals = async (req,res) => {
    
}