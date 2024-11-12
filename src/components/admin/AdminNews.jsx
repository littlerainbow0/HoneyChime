// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/react";
import axios from 'axios';
import Sidebar from "./navbar_admin";
import Btn_lightbrown from "../user/btn_lightbrown";
import Modal from './NewsModal';
import Modal2 from "./CardsModal";
import Bg from "./background_admin"


const AdminNews = () => {
    const [newsList, setNewsList] = useState([]);// 用來存當前ａｐｉ的消息
    const [newNews, setNewNews] = useState({ Category: '', Content: '', Date: '' });// 用來存當前新增的消息
    const [selectedNews, setSelectedNews] = useState({ Date: '', Category: '', Content: '', });// 用來存當前選中的消息----------------------------------

    const [cardsList, setCardsList] = useState([]);// 用來存當前ａｐｉ的消息
    const [selectedCards, setSelectedCards] = useState({ CardImage: '', Title: '', Title2: '', Paragraph: '', });// 用來存當前選中的卡片----------------------------------

    const [refreshCards, setRefreshCards] = useState(false);//用來當news&card更新後給us..t的判斷的依賴項



    //最新消息 從 API Ｇet sql現有的資料 useeffect hook get(server端的路由)-then(response給func)-catch(error)
    useEffect(() => {
        axios
            .get('http://localhost:8000/getNews', { withCredentials: true }) // 調用後端的 GET API
            .then(response => setNewsList(response.data))
            .catch(error => console.error(error.response.data.message));
    }, [refreshCards]);//中括號 [] 是「依賴陣列」，用來指定useEffect何時執行，裡面可以填入依賴項當此變化us..t會再次執行，也可以不填只放中誇號那就只會在組件首次渲染時執行一次。

    // 首頁消息（有圖）從 API Get sql現有的資料 同上意思
    useEffect(() => {
        axios
            .get('http://localhost:8000/getCards', { withCredentials: true })
            .then(response => {
                //console.log('Fetched cards data:', response.data[0].CardImage);沒有axios就要用原生fetch 
                setCardsList(response.data);
            })
            .catch(error => console.error(error.response.data.message));

    }, [refreshCards]);

    // 處理 MySQL 日期格式，轉換成 YYYY-MM-DD， 中間過程：發生MySql轉到react日期格式會出現後面不必要資訊，後來伺服器端先轉好格式，故不用
    //const processDate = (dateString) => {
    //if (!dateString) return "";//如果是空或未定義會返回空字串， if括號裡為true會return空字串，而！邏輯運送符會將後面值轉成相反布林值 所以當後面值為null或undefined就會轉成true並且啟動if
    //return dateString.split("T")[0];  // 切掉 "T" 後面的部分，中刮號取第一個部分所以寫0
    //};

    // 新增消息
    const addNews = () => {
        axios
            .post('http://localhost:8000/postNews', newNews, { withCredentials: true }) // 調用後端的 POST API
            .then((response) => {
                const firstNews = [...newsList];//...newsList 是使用「展開運算符」，作用是將 newsList 陣列中的所有項目展開，並生成一個新陣列。
                //console.log(...newsList),
                setRefreshCards(ex => !ex);//useeffect依賴項重新渲染畫面
                firstNews.unshift(response.data);//將新項目添加到陣列的開頭
                alert('更新成功')
                setNewNews({ Date: '', Category: '', Content: '' }); // 清空表單
            })
            .catch((error) => console.error(error.response.data.message));
    };



    // 更新消息
    const updateNews = () => {
        axios
            .put(`http://localhost:8000/updateNews/${selectedNews.NewsID}`, selectedNews, { withCredentials: true }) // 調用後端的 put API－－－－－－－－－－－－－－－－－－－－－－
            .then(() => {
                alert('更新成功')
                //＋刷新畫面
                setSelectedNews(null);
                setModalOpen(false);  // 成功後關閉 Modal
                setRefreshCards(ex => !ex);
            })
            .catch((error) => console.error(error.response.data.message));
    };

    //更新首頁消息（有圖）
    const updateCards = () => {
        axios
            .put(`http://localhost:8000/updateCards/${selectedCards.CardsID}`, selectedCards, { withCredentials: true })
            .then((response) => {
                console.log('PUT response:', response.data);
                alert('更新成功')//＋刷新畫面
                setSelectedCards(null); //重置選中的新聞
                setModal2Open(false);
                setRefreshCards(ex => !ex);
            })
            .catch((error) => console.error(error.response.data.message));

    }

    // 中間過程：發生MySql轉到react日期格式會出現後面不必要資訊，後來伺服器端先轉好格式，故不用
    //function formatDate(mysqlDate){
    //先切割掉"T"和"Z"部分，只保留日期
    //const datePart=mysqlDate.split('T')[0];
    //return datePart;
    //}

    //1023點編輯按鈕時 打開彈窗並設置要編輯內容
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = (news) => {
        setModalOpen(true);
        // 中間過程（已取消）：處理日期顯示格式const processedDate = processDate(news.Date); setSelectedNews({ ...news, Date: processedDate }); 
        setSelectedNews(news);// 確保將完整的 news 資料傳入
    };
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedNews(null); // 清空當前選中的news
    };

    //1028點編輯按鈕時 打開彈窗並設置要編輯內容
    const [isModal2Open, setModal2Open] = useState(false);
    const handleOpenModal2 = (cards) => {
        setModal2Open(true);
        setSelectedCards(cards);  // 確保將完整的 cards 資料傳入
    };
    const handleCloseModal2 = () => {
        setModal2Open(false);
        setSelectedCards(null); // 清空當前選中的cardnews
    };



    return (

        <div className="grid grid-cols-5 gap-2">
            <Bg />
            <div className="col-span-1 ">
                <Sidebar />
            </div>
            <div className="col-span-4 ">
                <h1 className="font-semibold text-h5 font-titleFont text-[#634A34] mt-10">最新消息後台管理</h1>
                {/* input框新增最新消息表單 */}
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

                </div>
                <div className=" overflow-y-auto max-h-[500px]">
                    {/* 列出首頁最新消息表單 */}
                    <div className='flex flex-wrap justify-center gap-4'>
                        {/* isArray下方判斷Cardlist是否是陣列，＆＆確認後往右傳 slice建立副本避免直接更改到cardList原始數據 ，map來迭代檢查每個cards物件，再渲染成下方div組件*/}
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
                        {Array.isArray(newsList) && newsList.slice().map((news, index) => (
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
