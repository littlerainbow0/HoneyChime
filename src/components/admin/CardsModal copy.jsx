// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

const Modal2=({ isOpen , onClose , cards, onUpdate, setSelectedCards}) =>{  //5種props道具--------------------
    if(! isOpen )return null; //是false就結束元件渲染
    
    const handleImageChange =(event)=>{
        const file=event.target.files[0];
        if(file){
            const reader=new FileReader();
            reader.onload=(e)=>{
                //讀取完畢將url設置到‘CardImage’
                setSelectedCards((prevCards)=>({
                    ...prevCards,
                    CardImage:e.target.result //更新圖片url來顯示圖片
                }));
            };
            reader.readAsDataURL(file);// 將檔案讀取為 Base64 格式
        }
    };
    
    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedCards({ ...cards, [name]: value }); // 更新選中的news資料---------------------------
    };
    // console.log('CardImage URL:', cards.CardImage);

    //createPortal重點
    return ReactDOM.createPortal(
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
            <div className="relative max-w-lg p-6 mx-auto overflow-hidden rounded-lg bg-lightbrown">
                <h2 className="font-semibold text-h5 font-titleFont text-[#634A34]  mb-5 ">編輯首頁最新消息</h2>
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-1">
                        <img className='w-full mb-2'src={cards?.CardImage || ''} alt="Card Image" />
                        <input
                            className='my-4 text-p-3'
                            type="file"
                            accept="images/*"
                            onChange={handleImageChange}
                            />
                    </div>
                    <div className="col-span-1">
                        <input
                            className='w-full h-10 col-span-1 p-2 mb-1 font-normal text-gray-600 rounded-md text-p-2 font-bodyFont bg-lightyellow'
                            type="text"
                            name="Title"
                            placeholder="消息標題"
                            value={cards?.Title || ''}  // 使用 ?. 保護未定義的狀況
                            onChange={handleInputChange}
                            />
                        <input
                            className='w-full h-10 col-span-1 p-2 mb-1 font-normal text-gray-600 rounded-md text-p-2 font-bodyFont bg-lightyellow'
                            type="text"
                            name="Title2"
                            placeholder="消息副標題"
                            value={cards?.Title2 || ''}  // 使用 ?. 保護未定義的狀況
                            onChange={handleInputChange}
                            />
                        <textarea
                            className='w-full h-40 p-2 mb-1 font-normal text-gray-600 rounded-md text-p-3 font-bodyFont bg-lightyellow text-wrap'
                            name="Paragraph"
                            placeholder="消息內容"
                            value={cards?.Paragraph || ''}  // 使用 ?. 保護未定義的狀況
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>

                </div>
                <div className="flex justify-end gap-5">
                        <button onClick={onUpdate} className="font-bold text-white font-titleFont text-p-1">更新</button>
                        <button onClick={onClose}className="font-bold text-white font-titleFont text-p-1">關閉</button>
                </div>
            </div>
        </div>
        //createPortal重點第二個根目錄
        ,document.getElementById('modal-root')
    );
};


export default Modal2;


