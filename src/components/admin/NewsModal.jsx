// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from 'react-dom';

const Modal=({ isOpen , onClose , news, onUpdate, setSelectedNews}) =>{  //5種props道具--------------------
    if(! isOpen )return null; //如果isOpen是false就結束元件渲染
    
  
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedNews({ ...news, [name]: value }); // 更新選中的news資料---------------------------
    };
    

    //createPortal重點
    return ReactDOM.createPortal(
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="max-w-lg p-6 mx-auto bg-white rounded-lg">
            <h2>編輯新聞</h2>
            <div>
                <input
                    type="text"
                    name="Date"
                    placeholder="日期"
                    value={news?.Date || ''}  // 使用 ?. 保護未定義的狀況
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="Category"
                    placeholder="類別"
                    value={news?.Category || ''}  // 使用 ?. 保護未定義的狀況
                    onChange={handleInputChange}
                />
                <textarea
                    name="Content"
                    placeholder="內容"
                    value={news?.Content || ''}  // 使用 ?. 保護未定義的狀況
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


export default Modal;


