import React, { useState, useEffect } from 'react';
import api from '../../api.jsx';

// table_default假資料格式
// const data = [
//   {
//       ScheduleID: 1,
//       DepartureDate: "2024/11/13",
//       DepartureTime: "09:00",
//       TemplateDescription: "台中高雄",
//       DessertTitle: "日式甜點",
//       status: "已過期"
//       // 已過期, 即將到來
//   },
// ];

const DataFetcher = ({ setDataFromServer }) => {
  const [loading, setLoading] = useState(true); // 加載狀態

  useEffect(() => {

    // 參考資料: https://blog.51cto.com/u_16213421/11892761

    const fetchData = async () => {
      try {
        const response = await api.get('/getSchedules');
        const myData = response.data.map(item => ({
          ...item,
          Expired: item.Expired ? "已過期" : "即將到來"
        }));

        setDataFromServer(myData);

      } catch (error) {
        console.error('Failed to get data from server/getSchedules', error);
      } finally {
        setLoading(false);
        
      }
    };
    fetchData();
  }, [setDataFromServer]); // 確保只執行一次

  return loading ? <div>Loading...</div> : null; // 加載中顯示
};

export default DataFetcher;
