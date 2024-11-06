// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "./navbar_admin";
import Btn_lightbrown from "../user/btn_lightbrown";
import Modal from './NewsModal';
import Modal2 from "./CardsModal";
import Bg from "./background_admin"
import { Card, CardBody } from "@nextui-org/react";

const AdminNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [newNews, setNewNews] = useState({ Date: '', Category: '', Content: '', NewsID: '', });
    const [selectedNews, setSelectedNews] = useState({ Date: '', Category: '', Content: '', NewsID: '' });// 用來存當前選中的新聞----------------------------------
    const [cardsList, setCardsList] = useState([]);
    const [selectedCards, setSelectedCards] = useState({ CardImage: '', Title: '', Title2: '', Paragraph: '', });

    //1023點編輯按鈕時 打開彈窗並設置要編輯內容
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = (news) => {
        setModalOpen(true);
        setSelectedNews(news); // 將選中的新聞設置到狀態中
    };
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedNews(null); // 清空選中的新聞
    };

    //1028點編輯按鈕時 打開彈窗並設置要編輯內容
    const [isModal2Open, setModal2Open] = useState(false);
    const handleOpenModal2 = (cards) => {
        setModal2Open(true);
        setSelectedCards(cards);  // 確保將完整的 cards 資料傳入
    };
    const handleCloseModal2 = () => {
        setModal2Open(false);
        setSelectedCards(null); // 清空選中的新聞
    };

    //最新消息 從 API Get sql現有的資料
    useEffect(() => {
        getNews();
        getCards();
    }, []);  // 只在組件首次加載時執行一次

    // 處理 MySQL 日期格式，轉換成 YYYY-MM-DD
    // const processDate = (dateString) => {
    //     if (!dateString) return "";
    //     return dateString.split("T")[0];  // 切掉 "T" 後面的部分
    // };

    //更新畫面
    const getNews = () => {
        axios.get('http://localhost:8000/getNews', { withCredentials: true })
            .then((response) => {
                setNewsList(response.data);  // 更新新聞列表
            }).catch((error) => {
                console.error(error.response.data.message);  // 顯示錯誤信息
            });
    };

    const getCards = () => {
        axios.get('http://localhost:8000/getCards', { withCredentials: true })
            .then((response) => {
                setCardsList(response.data); // 更新卡片
            }).catch((error) => {
                console.error(error.response.data.message);  // 顯示錯誤信息
            });
    };

    // 新增消息
    const addNews = () => {
        axios.post('http://localhost:8000/postNews', newNews, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        }) // 調用後端的 POST API
            .then((response) => {
                setNewNews({ Date: '', Category: '', Content: '' }); // 清空表單
                getNews();
            }).catch((error) =>
                console.error(error.response.data.message));
    };

    // 更新消息
    const updateNews = () => {
        axios.put(`http://localhost:8000/updateNews/${selectedNews.NewsID}`, selectedNews, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        }) // 調用後端的 put API－－－－－－－－－－－－－－－－－－－－－－
            .then((response) => {
                alert('更新成功')
                //＋刷新畫面
                getNews();
                setSelectedNews(null);
                setModalOpen(false);  // 成功後關閉 Modal
            }).catch((error) =>
                console.error(error.response.data.message));
    };

    //更新首頁消息（有圖）
    const updateCards = (CardsID) => {
        axios.put(`http://localhost:8000/updateCards/${selectedCards.CardsID}`, selectedCards,
            {
                withCredentials: true // 如果需要攜帶 session前後端都要加
            }
        ).then((response) => {
            console.log('PUT response:', response.data);
            alert('更新成功')//＋刷新畫面
            getCards();
            setSelectedCards(null); //重置選中的新聞
            setModal2Open(false);
        }).catch((error) =>
            console.error(error.response.data.message));
    }

    return (
        <div className="grid grid-cols-5 ">
            <Bg />
            <div className="col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-4 ">
                <h1 className="font-semibold text-h5 font-titleFont text-[#634A34] mt-10">最新消息後台管理</h1>
                {/* 新增最新消息表單 */}
                <div >
                    <input
                        className="m-4"
                        type="date"
                        placeholder="消息日期"
                        value={newNews.Date}
                        onChange={(e) => setNewNews({ ...newNews, Date: e.target.value })}
                    />
                    <input
                        className="m-4"
                        type="text"
                        placeholder="消息標題"
                        value={newNews.Category}
                        onChange={(e) => setNewNews({ ...newNews, Category: e.target.value })}
                    />
                    <input
                        className="m-4"
                        type="text"
                        placeholder="消息內容"
                        value={newNews.Content}
                        onChange={(e) => setNewNews({ ...newNews, Content: e.target.value })}
                    />
                    {/* <input
                        type="number"
                        placeholder="ID"
                        value={newNews.NewsID}
                        onChange={(e) => setNewNews({ ...newNews,NewsID: e.target.value })}
                    /> */}
                    <Btn_lightbrown btnText="新增" onClick={addNews} />
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

                </div>
                <div className=" overflow-y-auto max-h-[500px]">
                    {/* 列出首頁最新消息表單 */}
                    <div className='flex flex-wrap justify-center gap-4'>
                        {Array.isArray(cardsList) && cardsList.slice().map((cards, index) => (
                            <div key={index} className=' bg-lightyellow rounded-xl' style={{ flex: "1 1 calc(33% - 1rem)", minWidth: "150px", maxWidth: "200px" }}>
                                <Card variant="bordered" css={{ padding: "1rem" }}>
                                    <CardBody css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                                        <p style={{ fontSize: "16px", color: "#634A34", flexGrow: 1, textAlign: 'left' }}>{cards.Title}</p>
                                        <p style={{ fontSize: "10px", color: "#634A34", flexGrow: 1, textAlign: 'center' }}>{cards.Title2}</p>
                                        <img style={{ 'objectFit': "fill" }} src={cards.CardImage} alt="Card Image" />
                                        <p style={{ fontSize: "12px", flexShrink: 0, maxWidth: '150px', minHeight: '20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cards.Paragraph}</p>
                                        <Btn_lightbrown btnText="編輯" onClick={() => handleOpenModal2(cards)} />
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* 列出最新消息表單 */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                        {Array.isArray(newsList) && newsList.slice().reverse().map((news, index) => (
                            <div key={index} className=' bg-lightbrown rounded-xl' style={{ flex: "1 1 calc(33% - 1rem)", minWidth: "150px", maxWidth: "200px" }}>
                                <Card variant="bordered" css={{ padding: "1rem" }}>
                                    <CardBody css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                                        {/* 標題 */}
                                        <p style={{ fontSize: "16px", color: "#634A34", flexGrow: 1, textAlign: 'left' }}>{news.Category}</p>
                                        {/* 內容 */}
                                        <p style={{ fontSize: "12px", flexShrink: 0, maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{news.Content}</p>
                                        {/* 日期 */}
                                        <p style={{ fontSize: "12px", color: "brown", flexShrink: 0, textAlign: 'right' }}>{news.Date}</p>
                                        {/* 編輯按鈕 */}
                                        <Btn_lightbrown btnText="編輯" onClick={() => handleOpenModal(news)} />
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* News彈窗 Modal -----------------對應表------------------ready*/}
                {isModalOpen && selectedNews && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        news={selectedNews}
                        onUpdate={updateNews}
                        setSelectedNews={setSelectedNews}
                    />
                )}
                {/* Cards彈窗 Modal ------------------對應表-----------------ready*/}
                {isModal2Open && selectedCards && (
                    <Modal2
                        isOpen={isModal2Open}
                        onClose={handleCloseModal2}
                        cards={selectedCards}
                        onUpdate={updateCards}
                        setSelectedCards={setSelectedCards}
                    />
                )}

            </div>
        </div>
    );
};

export default AdminNews;
