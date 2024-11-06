import '../assets/css/style.css'


const Headerr=({bgImage})=>{
    return(
        
        <div>
            {/* 背景圖片佔整個navbar */}
            <div    className="relative w-full overflow-hidden text-center bg-no-repeat bg-cover md:pb-1/3 pb-6/10" 
                    style={{ backgroundImage: `url(${bgImage})`,  width: '100vw',backgroundSize: '100% 100%'}}>
                <div className='group'>
                    <div className="flex justify-center p-2 group-hover:bg-white/40 2xl:p-6 xl:p-4">
                        {/* 漢堡選單768px以下出現 */}
                            <label htmlFor="switch" className="absolute left-5 md:hidden">
                            <img src='../../src/assets/images/icon/burger.svg'className='h-10' alt="漢堡按鈕圖示"></img>{/* 漢堡按鈕圖示 */}
                            </label>
                            <input type='checkbox' id='switch' className='hidden peer'></input>{/* 選單開關 */}
                        {/* Logo置中 */}
                        <img src="../../../src/assets/images/icon/LOGO.svg" className="h-10 lg:h-16" alt="LOGO"/>
                        {/* 會員頭像 */}
                        <a href="/login" className="absolute text-center right-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: 'rgba(126, 126, 126, 1)' }}
                            width="32" height="32" viewBox="0 0 24 24" className='transition-colors duration-300 group-hover:fill-white '>
                            <path  d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12"/>
                            </svg>
                        </a>
                        {/* 小螢幕 navbar 注意peer要在兄弟層級*/}
                        <nav
                            className="absolute hidden top-16 peer-checked:flex "
                        >
                            <ul className="space-y-8 font-semibold text-white md:hidden text-h4 font-titleFont">
                                <li><a href="/">首頁</a></li>
                                <li><a href="/about">概念</a></li>
                                <li><a href="/menu">饗宴</a></li>
                                <li><a href="">設施</a></li>
                                <li><a href="">旅程</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* 白槓navbar大螢幕 */}
                        <nav className="hidden md:flex justify-center py-2 font-semibold text-center text-white bg-black/30 font-titleFont text-h4 group-hover:bg-white/80 group-hover:text-[#634A34] hover:font-bold 2xl:py-6 xl:py-4 ">
                            
                            <ul className='flex space-x-20 xl:space-x-24 2xl:space-x-28'>
                                <li><a href="/">首頁</a></li>
                                <li><a href="/about">概念</a></li>
                                <li><a href="/menu">饗宴</a></li>
                                <li><a href="">設施</a></li>
                                <li><a href="">旅程</a></li>
                            </ul>
                        </nav>
                    
                    </div>
            </div>
        </div>
    )

};
export default Headerr;