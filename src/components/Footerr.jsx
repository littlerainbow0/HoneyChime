import '../assets/css/style.css'


const Footerr =()=>{
    return(
        <div>
            <footer className="mt-40 relative p-0 bg-[url('../../src/assets/images/icon/icon_footerBG.svg')] bg-no-repeat bg-right-bottom bg-fill m-0"> {/* 底部背景裝飾圖案  */}
                <div className="container mx-auto mt-6">
                    <ul className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">{/* 格線  */}
                        <li className="hidden col-span-2 mt-10 mb-40 ml-10 md:block">{/* 左側裝飾圖案  */}
                            <img className="w-full h-full" src="../../src/assets/images/icon/LOGO.svg" alt="logo"/>
                        </li>
                        <li className="mt-10 ml-10 text-left md:col-span-1 sm:col-span-2 sm:text-p-3 md:text-p-2"> {/* 中間聯繫資訊  */}
                            <h3 className="mb-2 text-h6 font-titleFont">聯絡我們</h3>
                            <p className="mb-2 text-h6 font-titleFont sm:text-p-3 md:text-p-2">電話：</p>
                            <p className="mb-2 text-h6 font-bodyFont sm:text-p-3 md:text-p-2">02 22222222</p>
                            <p className="mb-2 text-h6 font-titleFont sm:text-p-3 md:text-p-2">地址：日本晴空塔</p>
                            <p className="mt-10 text-h6 font-titleFont">追蹤我們
                                <span className="inline-flex justify-center mt-10 sm:ml-auto sm:mt-4 sm:justify-start">
                                    <a className="text-gray-700">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-700">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-700">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                </span>
                            </p>
                        </li>
                        <li className="mt-10 mb-40 ml-10 text-left md:col-span-1 sm:col-span-2 font-titleFont sm:text-p-3 md:text-p-2"> {/* 右側鏈接  */}
                            <p href="#" className="mb-2 text-black no-underline ">常見問題</p>
                            <p href="#" className="mb-2 text-black no-underline ">訂閱我們</p>
                            <p href="#" className="mb-2 text-black no-underline ">CopyRight</p>
                            <p href="#" className="mb-2 text-black no-underline ">隱私權政策</p>
                            <a href="/admin/news" className="mb-2 text-black no-underline ">後台連結</a>
                        </li>
                    </ul>
                </div>

            </footer>
        </div>
    );
};

export default Footerr;