import React, { useState, useEffect } from 'react';
import api from '../../api.jsx';

const DataFetcher = ({ setDataFromServer }) => {
  const [loading, setLoading] = useState(true); // 加載狀態

  useEffect(() => {

    // 參考資料: https://blog.51cto.com/u_16213421/11892761

    const fetchData = async () => {
      try {
        const response = await api.get('/getQAS');
        setDataFromServer(response.data);

      } catch (error) {
        console.error('Failed to get data from server/getQAS', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setDataFromServer]); // 確保只執行一次

  return loading ? <div>Loading...</div> : null; // 加載中顯示
};

export default DataFetcher;

// SQL篩選
// export const DataFetcherByType = async (filterType) => {
//   // 根據 filterType 發送請求並獲取資料
//   const response = await fetch(`http://your-api-url/qas?filter=${filterType}`);
//   const data = await response.json();
//   return data.results; // 返回結果
// };