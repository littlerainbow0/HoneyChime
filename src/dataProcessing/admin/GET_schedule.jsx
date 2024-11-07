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

const DataFetcher = ({ setDataFromServer, setDataTrigger }) => {
  const [loading, setLoading] = useState(true); // 加載狀態

  useEffect(() => {

    // 參考資料: https://blog.51cto.com/u_16213421/11892761

    const fetchData = async () => {
      try {
        const response = await api.get('/getSchedules');
        
        
        // departureDate 從後台拿回來是 YYYY/MM/DD 格式
        response.data.sort((a, b) => {
          const dateA = new Date(a.DepartureDate.replace(/\//g,'-'));
          const dateB = new Date(b.DepartureDate.replace(/\//g,'-'));
          return dateA - dateB;
        });
        
        const myData = response.data.map((item,index) => ({
          ...item,
          Index: index+1,
          Expired: item.Expired ? "已過期" : "即將到來",
        }));        
        setDataFromServer(myData);

      } catch (error) {
        console.error('Failed to get data from server/getSchedules', error);
      } finally {
        setLoading(false);

      }
    };
    fetchData();
  }, [setDataTrigger]);

  // return loading ? "Loading..." : null; // 加載中顯示
};

export default DataFetcher;
