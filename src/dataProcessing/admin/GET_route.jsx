import React, { useState, useEffect } from 'react';
import api from '../../api.jsx';


const DataFetcher = ({ setDataFromServer, setDataTrigger }) => {
    const [loading, setLoading] = useState(true); // 加載狀態

    useEffect(() => {

        // 參考資料: https://blog.51cto.com/u_16213421/11892761

        // 排序用：台北 台中 台南 高雄 花蓮
        const stopOrder = [2, 3, 1, 4, 5]; // 自定義順序

        const fetchData = async () => {
            try {
                const response = await api.get('/getRoutes');
                // 自定義排序
                response.data.sort((a, b) => {
                    const aIndex = stopOrder.indexOf(Number(a.StopStartID));
                    const bIndex = stopOrder.indexOf(Number(b.StopStartID));
                    return aIndex - bIndex;
                });

                setDataFromServer(response.data);

            } catch (error) {
                console.error('獲取數據失敗', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [setDataTrigger]);

    return loading ? "Loading..." : null; // 加載中顯示
};

export default DataFetcher;
