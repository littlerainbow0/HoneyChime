import React,{useState,useEffect} from "react";
import axios from 'axios';

const adminNews=()=>{
    const[  ]=useState([]);
    const[  ]=useState({});

    //從api取得現有的資料
    useEffect(()=>{
        axios.get('')
            .then(=>)
            .catch(=>);
    },[]);
    //新增新聞
    const addNews=()=>{
        axios.post('',newNews)
            .then(response=>{ 

            })//更新畫面與清空表單
            .catch(error=>console.error(error));
    };
    //刪除新聞
    const deleteNews=(index)=>{
        axios.delete(` /${index}`)
            .then(()=>{
                const 
                //更新畫面
            })
            .catch(error=>console.error(error));
    };
    return(
        <div>
            <h1>後台管理</h1>
            {/* 新增最新消息表單 */}
            <div>
                <input type="text" placeholder="日期" value={newNews.date} onChange={} />
                <input type="text" placeholder="圖示" value={newNews.icon} onChange={} />
                <input type="text" placeholder="類別" value={newNews.category} onChange={} />
                <textarea          placeholder="內容" value={newNews.content} onChange={} />
                <button onClick={addNews}>新增新聞</button>
            </div>
            {/* 列出最新消息表單 */}
            <div>
                {newsList.map((new.index)=>(<div key={index}>
                    <p>{news.date}-{news.category}-{news.content}</p>
                    <button onClick={()=>deleteNews(index)}>刪除</button>
                </div>))}
            </div>
        </div>
    )
};

export default adminNews;