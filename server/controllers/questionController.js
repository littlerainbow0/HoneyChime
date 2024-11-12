import * as questionModel from '../models/questionModel.js'
// 取得所有發車時間之旅程的資料
export const getQAS = async (req, res) => {
  try {
      const { results } = await questionModel.getQAS();
      res.json(results);  // 返回 JSON 格式的資料
  } catch (error) {
      console.error('取得發車時間資料錯誤：', error);
      res.status(500).json({ message: '伺服器錯誤，無法取得發車時間資料' });
  }
};