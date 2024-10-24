import * as newsModel from '../models/newsModel.js';  // 引入模型層
import * as cardsModel from '../models/cardModel.js';  // 引入模型層

// 取得所有news
export const getAllNews = async (req, res) => {
    try {
        const { results } = await newsModel.getAllNews();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得news資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得使用者資料' });
    }
};

// 取得所有Cards
export const getAllCards = async (req, res) => {
    try {
        const { results } = await cardsModel.getAllCards();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得cards資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得使用者資料' });
    }
};

// 新增NEWS
export const postNews = async (req, res) => {
    const data = req.body;
    try {
        const result = await newsModel.postNews(data); // 插入資料
        res.status(201).json({ message: 'NEWS資料已成功新增', newsID: result.newsID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增NEWS資料，請確認傳輸資料內容' });
    }
};

// 新增CARDS
export const postCards = async (req, res) => {
    const data = req.body;
    try {
        const result = await cardsModel.postCards(data); // 插入資料
        res.status(201).json({ message: 'CARDS資料已成功新增', cardsID: result.cardsID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增CARDS資料，請確認傳輸資料內容' });
    }
};

// 更新NEWS
export const updateNews = async (req, res) => {
    const { newsID } = req.params;  // 從 URL 獲取 newsID 參數
    const data = req.body;
    try {
        const isUpdated = await newsModel.updateNews(newsID, data); // 更新資料
        if (isUpdated) {
            res.status(200).json({ message: '該NEWS已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該NEWS' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新NEWS資料，請確認傳輸資料內容' });
    }
};

// 更新CARDS
export const updateCards = async (req, res) => {
    const { cardsID } = req.params;  // 從 URL 獲取 cardsID 參數
    const data = req.body;
    try {
        const isUpdated = await cardsModel.updateCards(cardsID, data); // 更新資料
        if (isUpdated) {
            res.status(200).json({ message: '該CARDS已成功更新' });
        } else {
            res.status(404).json({ message: '未找到該CARDS' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新CARDS資料，請確認傳輸資料內容' });
    }
};