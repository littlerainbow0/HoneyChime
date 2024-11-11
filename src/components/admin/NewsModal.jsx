// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from 'react-dom';
import './background_admin.css'
import PropTypes from "prop-types";

const Modal=({ isOpen , onClose , news, onUpdate, setSelectedNews}) =>{  //5種props道具--------------------
    if(! isOpen )return null; //如果isOpen是false就結束元件渲染
    

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedNews({ ...news, [name]: value }); // 更新選中的news資料---------------------------
    };
    

    //createPortal重點
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
            <div className="relative max-w-lg p-6 mx-auto overflow-hidden rounded-lg bg-lightbrown">
                {/* Modal 內容 */}
                <div className="relative z-10">
                    <h2 className="font-semibold text-h5 font-titleFont text-[#634A34] ">修改最新消息</h2>
                    <div >
                        <div className="grid grid-cols-2 gap-3 mt-5">
                            <input
                                className='h-10 col-span-1 p-2 font-normal text-gray-600 rounded-md text-p-2 font-bodyFont bg-lightyellow '
                                type="text"
                                name="Date"
                                placeholder="消息日期"
                                value={news?.Date || ''}  // 使用 ?. 保護未定義的狀況
                                onChange={handleInputChange}
                                />
                            <input
                                className='h-10 col-span-1 p-2 font-normal text-gray-600 rounded-md text-p-2 font-bodyFont bg-lightyellow '
                                type="text"
                                name="Category"
                                placeholder="消息標題"
                                value={news?.Category || ''}  // 使用 ?. 保護未定義的狀況
                                onChange={handleInputChange}
                                />
                        </div>
                        <br />
                        <div className="mt-1">
                            <textarea
                                className='w-full h-20 p-2 font-normal text-gray-600 rounded-md text-p-3 font-bodyFont bg-lightyellow text-wrap'
                                name="Content"
                                placeholder="消息內容"
                                value={news?.Content || ''}  // 使用 ?. 保護未定義的狀況
                                onChange={handleInputChange}
                                />
                            <br />
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-end gap-5">
                        <button onClick={onUpdate} className="font-bold text-white font-titleFont text-p-1">更新</button>
                        <button onClick={onClose}className="font-bold text-white font-titleFont text-p-1">關閉</button>
                    </div>
                </div>
            </div>
        </div>
        //createPortal重點第二個根目錄
        ,document.getElementById('modal-root')
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    news: PropTypes.shape({
        Date: PropTypes.any,
        Category: PropTypes.string,
        Content: PropTypes.string,
    }),
    onUpdate: PropTypes.func.isRequired,
    setSelectedNews: PropTypes.func.isRequired,
};


export default Modal;


