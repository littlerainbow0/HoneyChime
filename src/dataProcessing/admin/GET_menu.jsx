import React, { useState, useEffect } from 'react';
import api from '../../api.jsx';


const DataFetcher = ({ setGetMenuDataFromServer }) => {
  const [loading, setLoading] = useState(true); // 加載狀態

  useEffect(() => {

    // 參考資料: https://blog.51cto.com/u_16213421/11892761

    const fetchData = async () => {
      try {
        const response = await api.get('/getTemplates');
        // const myData = response.data.map((elem) => (
        //   {
        //     TemplateID: elem.TemplateID,
        //     DessertTitle: elem.DessertTitle,
        //     MenuFirstID: elem.MenuFirstID,
        //     MenuFirstName: elem.MenuFirstName,
        //     MenuFirstImage: elem.MenuFirstImage,
        //     MenuSecondID: elem.MenuSecondID,
        //     MenuSecondName: elem.MenuSecondName,
        //     MenuSecondImage: elem.MenuSecondImage,
        //   }
        // ))

        setGetMenuDataFromServer(response.data);

      } catch (error) {
        console.error('Failed to get data from server/getSchedules', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setGetMenuDataFromServer]); // 確保只執行一次

  return loading ? <div>Loading...</div> : null; // 加載中顯示
};

export default DataFetcher;
