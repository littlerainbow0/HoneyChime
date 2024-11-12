import React, { useState, useEffect } from 'react';
import api from '../../api.jsx';


const DataFetcher = ({ setDataFromServer, setDataTrigger }) => {
  const [loading, setLoading] = useState(true); // 加載狀態

  useEffect(() => {

    // 參考資料: https://blog.51cto.com/u_16213421/11892761

    const fetchData = async () => {
      try {
        const response = await api.get('/getTemplates');

        setDataFromServer(response.data);

      } catch (error) {
        console.error('Failed to get data from server/getTemplates', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setDataTrigger]); // setDataTrigger每更新一次就刷新資料

  // return loading ? "Loading..." : null; // 加載中顯示
};

export default DataFetcher;
