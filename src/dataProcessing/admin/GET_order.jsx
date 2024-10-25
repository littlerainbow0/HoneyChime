import React, { useState, useEffect } from 'react';
import api from '../../api.jsx';

const DataFetcher = ({ setDataFromServer }) => {
  const [loading, setLoading] = useState(true); // 加載狀態

  useEffect(() => {

    // 參考資料: https://blog.51cto.com/u_16213421/11892761

    const fetchData = async () => {
      try {
        const response = await api.get('/getOrders');
        setDataFromServer(response.data);

      } catch (error) {
        console.error('Failed to get data from server/getOrders', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setDataFromServer]); // 確保只執行一次

  return loading ? <div>Loading...</div> : null; // 加載中顯示
};

export default DataFetcher;
