// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from "./navbar_admin";
import Btn_lightbrown from "../user/btn_lightbrown";

// import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";


const AdminNews = () => {
    const [newsList, setNewsList] = useState([]);
    //const [editNews,setEditNews]=usaState(null);//1023存當前編輯新聞
    //const [isModalOpen,setIsModalOpen]=useState(false);//1023控制彈窗顯示
    const [newNews, setNewNews] = useState({
        Date: '', Category: '', Content: '', NewsID:'',
    });
    

    // 從 API Ｇet sql現有的資料
    useEffect(() => {
        axios
            .get('http://localhost:8000/getNews') // 調用後端的 GET API
            .then(response => setNewsList(response.data))
            .catch(error => console.error(error));
    }, []);
    
    //1023點編輯按鈕時 打開彈窗並設置要編輯內容
    // const openEditModal=(news)=>{
    //     setEditNews(news);//設置當前要編輯的新聞
    //     setNewNews(news);//將表單設置成現有新聞內容
    //     setIsModalOpen(true);//打開彈窗
    // };
    const EditComponent = () => {
        const [isModalOpen, setModalOpen] = useState(false);
        setModalOpen(true);
        };
        const handleCloseModal = () => {
        setModalOpen(false);
        };
    

    // 新增消息
    const addNews = () => {
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
        axios
            .put(`http://localhost:8000/updates/${newsID}`) // 調用後端的 put API
            .then(() => {
                const updatedList = newsList.filter((news) => news.newsID !== newsID);
                setNewsList(updatedList); // 更新畫面
            })
            .catch((error) => console.error(error));
    };

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
                    <Btn_lightbrown btnText="編輯" onClick={updateNews}/>
                    
                </div>
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
                    <Btn_lightbrown btnText="新增" onClick={addNews}/>
                    
                </div>
                {/* 列出最新消息表單 */}
                <div>
                    {Array.isArray(newsList) && newsList.slice().reverse().map((news) => (
                            <div key={news.newsID}>
                            <p>{ news.Date} - {news.Category} - {news.Content}</p>
                            <button onClick={() => updateNews(news.newsID)}>編輯</button>
                            {/* 1023 */}
                            {/* <button onClick={handleOpenModal}>提交投票</button> 
                            <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}

                    </div>
                    ))}
                </div>
                {/* 編輯彈窗 */}
                {/* {isModalOpen&&(
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="p-5 bg-white rounded shadow-lg">
                            <h2 className="mb-4">編輯新聞</h2>
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
                            <button onClick={updateNews}>確定</button>
                            <button onClick={() => setIsModalOpen(false)}>取消</button>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default AdminNews;
