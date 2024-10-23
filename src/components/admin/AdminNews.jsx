// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from "./navbar_admin";
import Btn_lightbrown from "../user/btn_lightbrown";
import Modal from './NewsModal';

// import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";


const AdminNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [newNews, setNewNews] = useState({Date: '', Category: '', Content: '', NewsID:'',});
    const [selectedNews, setSelectedNews] = useState({Date: '',Category: '',Content: '',});// 用來存當前選中的新聞----------------------------------
    
    //1023點編輯按鈕時 打開彈窗並設置要編輯內容
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal=(news)=>{ setModalOpen(true);
                                    // 處理日期顯示格式
                                    const processedDate = processDate(news.Date);
                                    setSelectedNews({ ...news, Date: processedDate }); // 將選中的新聞設置到狀態中
    };
    const handleCloseModal = () => {setModalOpen(false);
                                    setSelectedNews(null); // 清空選中的新聞
    };
    
    
    // 從 API Ｇet sql現有的資料
    useEffect(() => {
        axios
            .get('http://localhost:8000/getNews') // 調用後端的 GET API
            .then(response => setNewsList(response.data))
            .catch(error => console.error(error));
    }, []);

    // 處理 MySQL 日期格式，轉換成 YYYY-MM-DD
    const processDate = (dateString) => {
        if (!dateString) return "";
        return dateString.split("T")[0];  // 切掉 "T" 後面的部分
    };
    
    // 新增消息
    const addNews = () => {
        const processedDate = processDate(newNews.Date);  // 處理日期

        const updatedNews = {
            ...newNews,
            Date: processedDate // 保存處理過的日期
        };
        axios
            .post('http://localhost:8000/postNews', newNews) // 調用後端的 POST API
            .then((response) => {
                const firstNews=[...newsList];
                firstNews.unshift(response.data.data);
                setNewsList(firstNews); // 更新畫面
                setNewNews({ Date: '', Category: '', Content: '' }); // 清空表單
            })
            .catch((error) => console.error(error));
    };

    // 更新
    const updateNews = (newsID) => {
        const processedDate = processDate(newNews.Date); // 處理日期

        const updatedNews = {
            ...newNews,
            Date: processedDate // 保存處理過的日期
        };
        axios
            .put(`http://localhost:8000/updateNews/${selectedNews.NewsID}`, selectedNews) // 調用後端的 put API－－－－－－－－－－－－－－－－－－－－－－
            .then(() => {
                alert('更新成功')
                //＋刷新畫面
                setModalOpen(false);  // 成功後關閉 Modal
            })
            .catch((error) => console.error(error));
    };
    
    function formatDate(mysqlDate){
        //先切割掉"T"和"Z"部分，只保留日期
        const datePart=mysqlDate.split('T')[0];
        return datePart;
    }
    


    
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-2">
                <h1>最新消息後台管理</h1>
                {/* 新增最新消息表單 */}
                <div>

                    <input
                        type="text"
                        placeholder="日期"
                        value={newNews.Date}
                        onChange={(e) => setNewNews({ ...newNews, Date: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="類別"
                        value={newNews.Category}
                        onChange={(e) => setNewNews({ ...newNews, Category: e.target.value })}
                    />
                    <textarea
                        placeholder="內容"
                        value={newNews.Content}
                        onChange={(e) => setNewNews({ ...newNews, Content: e.target.value })}
                    />
                    {/* <input
                        type="number"
                        placeholder="ID"
                        value={newNews.NewsID}
                        onChange={(e) => setNewNews({ ...newNews,NewsID: e.target.value })}
                    /> */}
                    <Btn_lightbrown btnText="新增" onClick={addNews}/>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                    
                </div>
            
                {/* 列出最新消息表單 */}
                <div>
                    {Array.isArray(newsList) && newsList.slice().reverse().map((news) => (
                            <div key={news.newsID}>
                                <p>{news.Category}</p> 
                                <p>{news.Content}</p>
                                <p>{formatDate(news.Date)}</p>
                            <Btn_lightbrown btnText="編輯" onClick={()=>handleOpenModal(news)}/>
                    </div>
                    ))}
                    
                </div>

                {/* 彈窗 Modal -----------------------------------read*/}
                {isModalOpen && selectedNews && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        news={selectedNews}
                        onUpdate={updateNews}
                        setSelectedNews={setSelectedNews}
                    />
                )}
    
            </div>
        </div>
    );
};

export default AdminNews;
