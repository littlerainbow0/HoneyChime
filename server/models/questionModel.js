import  query  from '../db.js';  // 引入資料庫查詢函數

export const getQAS = async () => {
  const sql = `
  SELECT 
  Q.QAID,
  Q.UserID,
  U.UserName,
  U.UserMail,
  Q.Type,
  Q.Content,
  Q.Time,
  Q.Reply
  FROM qas Q
  JOIN users U ON U.UserID = Q.UserID
  `;
  try {
      const { results } = await query(sql); 
      // results.forEach((value, index) => {
      //     results[index].Expired = modelFuns.isExpired(results[index].DepartureDate);
      //     results[index].DepartureDate = modelFuns.dateFormat(value.DepartureDate);
      // });
      return { results };
  } catch (error) {
      console.log('查詢客戶諮詢資料錯誤：', error);
      throw new Error('查詢客戶諮詢資料錯誤');
  }
};