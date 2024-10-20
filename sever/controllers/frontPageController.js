const newsModel = require('../models/newsModel');  
const cardsModel = require('../models/cardModel');  

// 取得所有news
exports.getAllNews = async (req, res) => {
    try {
        const { results } = await newsModel.getAllNews();
        res.json(results);  // 返回 JSON 格式的使用者資料
    } catch (error) {
        console.error('取得news資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得使用者資料' });
    }
};

//取得所有Cards
exports.getAllCards = async (req, res) => {
    try {
        const { results } = await cardsModel.getAllCards();
        res.json(results);  // 返回 JSON 格式的使用者資料
    } catch (error) {
        console.error('取得news資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得使用者資料' });
    }
};

//新增NEWS
exports.postNews = async (req, res) => {
    const data = req.body; //
    try {
        const result = await newsModel.postNews(data); // 插入資料
        // console.log('插入結果:', result); 
        res.status(201).json({ message: 'NEWS資料已成功新增' , newsID: result.newsID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增NEWS資料，請確認傳輸資料內容' });
    }
};

//新增CARDS
exports.postCards = async (req, res) => {
    const data = req.body; //
    try {
        const result = await cardsModel.postCards(data); // 插入資料
        // console.log('插入結果:', result); 
        res.status(201).json({ message: 'CARDS資料已成功新增' , cardsID: result.cardsID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法新增CARDS資料，請確認傳輸資料內容' });
    }
};
