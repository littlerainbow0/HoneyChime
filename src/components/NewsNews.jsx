// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/css/style.css';
import polygonLineIcon from '../assets/images/icon/icon_polygonLine.png';


const NewsNews = () => {
    const [news, setNews] = useState([]);

    // 從後端 API 獲取資料
    useEffect(() => {
        axios.get("http://localhost:8000/getNews")
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.error("取得最新消息時發生錯誤！", error);
            });
            
    }, []);

    return (
        <div>
            <div className="container flex p-5 mx-auto mt-6 border">
                {/* 左側標題 */}
                <div className="w-1/4 pr-5">
                    <h1 className="text-h2 font-bold font-titleFont mb-5 text-[#634A34]">最新消息</h1>
                    <a className="hidden pt-5 font-medium text-gray-600 no-underline pl-14 text-h4 font-bodyFont sm:block">
                        全部資訊 &#9651;
                    </a>
                </div>
                {/* 右側消息 */}
                <div className="flex-1 border border-dashed border-[#4a3f35] p-5 overflow-y-auto max-h-[500px] mt-20">
                    {news.map((item, index) => (
                        <div key={index} className="mb-5">
                            <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">
                                {item.date} &#x2022; {item.icon} {item.category}<br />{item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <span className="mt-5">
                <img src={polygonLineIcon}  alt="navbar" />
            </span>
        </div>
    );
};

export default NewsNews;

