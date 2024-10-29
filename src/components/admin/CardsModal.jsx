// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

const Modal2=({ isOpen , onClose , cards, onUpdate, setSelectedCards}) =>{  //5種props道具--------------------
    if(! isOpen )return null; //是false就結束元件渲染
    

    
    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedCards({ ...cards, [name]: value }); // 更新選中的news資料---------------------------
    };
    console.log('CardImage URL:', cards.CardImage);

    //createPortal重點
    return ReactDOM.createPortal(
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="max-w-lg p-6 mx-auto bg-white rounded-lg">
            <h2>編輯首頁最新消息</h2>
            <div>
                <img src={cards?.CardImage || ''} alt="Card Image" />
                <input
                    type="text"
                    name="CardImage"
                    placeholder="圖片URL"
                    value={cards?.CardImage || ''}  // 使用 ?. 保護未定義的狀況
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="Title"
                    placeholder="標題"
                    value={cards?.Title || ''}  // 使用 ?. 保護未定義的狀況
                    onChange={handleInputChange}
                />
                <textarea
                    name="Paragraph"
                    placeholder="內容"
                    value={cards?.Paragraph || ''}  // 使用 ?. 保護未定義的狀況
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={onUpdate}>更新</button>
            <button onClick={onClose}>關閉</button>
            </div>
        </div>
        //createPortal重點第二個根目錄
        ,document.getElementById('modal-root')
    );
};


export default Modal2;


