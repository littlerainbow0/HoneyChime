import '../assets/css/style.css'


const HomeHeader=()=>{

    const toggleNav = () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('opacity-100');
        };


    return(
        <div className="h-screen font-sans">
            {/* Hero Section */}
            <div className="relative h-screen bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('../../src/assets/images/train_exterior/train_exterior_hero.png')` }}
            >
                {/* Header */}
                <header className="absolute top-0 left-0 flex justify-between w-full p-4 bg-transparent">
                    {/* 左側旋轉圖標 */}
                    <div
                    className="h-5 transform -rotate-90 bg-center bg-no-repeat bg-contain cursor-pointer w-14 bg-custom-icon2 hover:bg-custom-icon"
                    onClick={toggleNav}
                    />
                    
                    {/* 中間的 LOGO 和標題 */}
                    <div className="flex ">
                    <img src="../../src/assets/images/icon/LOGO.svg" alt="LOGO" className="h-10 opacity-60" />
                    <p className="text-white text-h6 font-titleFont">蜂鳴號</p>
                    </div>
                    
                    {/* 右側旋轉圖標 */}
                    <div
                    className="h-5 transform -rotate-90 bg-center bg-no-repeat bg-contain cursor-pointer w-14 bg-custom-icon2 hover:bg-custom-icon"
                    onClick={() => window.location.href = '/login'}
                    />
                </header>
        
                {/* Navigation menu */}
                <div id="navMenu" className="absolute z-0 p-3 text-white transition duration-1000 bg-black rounded-lg opacity-0 bg-opacity-60 top-12 left-5 text-h6 font-titleFont ">
                    <a href="/news" className="block mb-3 opacity-100 "><span className='h-4 bg-custom-icon4'></span>最新消息</a>
                    <a href="/about" className="block mb-3">概念</a>
                    <a href="/menu" className="block mb-3">饗宴</a>
                    <a href="#" className="block mb-3">設施</a>
                    <a href="#" className="z-20 block mb-3 opacity-100">旅程</a>
                    <img src="../../src/assets/images/icon/LOGO3.png" alt="LOGO" className="bottom-0 z-10 h-20 pl-5 opacity-100" />
                    
                </div>
        
                {/* 中間 button */}
                <button
                    className="absolute flex flex-col items-center px-8 py-4 text-white transform -translate-x-1/2 -translate-y-1/2 text-p-1 top-1/2 left-1/2 bg-opacity-70 group font-titleFont"
                    onClick={() => window.location.href = '/about'}
                >
                    <img
                    src="../../src/assets/images/icon/icon_ hexagon_whiteline.png"
                    alt="開始"
                    className="w-8 mr-2 group-hover:scale-150 group-hover:bg-opacity-90"
                    />
                    <span className="opacity-80">走一趟滋味的探索</span>
                </button>
        
                {/* Bottom triangle button & line*/}
                <div className="absolute w-full bottom-10">
                    <div className="flex bg-[url('../../src/assets/images/icon/Line1.svg')] bg-no-repeat bg-center opacity-80">
                    <div className="flex-auto group">
                        <a href="/about" className="flex items-center justify-center px-4 py-2 mx-auto text-center text-white ">
                        <div className="flex flex-col items-center justify-center">
                            <span className="block px-1 py-1 rounded-full" style={{ position: 'relative', top: '5px' }}>
                            <div className="h-12 bg-center bg-no-repeat bg-contain bg-custom-icon2 w-7 group-hover:bg-custom-icon"></div>
                            </span>
                            <span className="hidden text-center group-hover:inline-block font-titleFont text-h6" style={{ position: 'relative', top: '5px' }}>概念</span>
                        </div>
                        </a>
                    </div>
                    <div className="flex-auto group">
                        <a href="/menu" className="flex items-center justify-center px-4 py-2 mx-auto text-center text-white ">
                        <div className="flex flex-col items-center justify-center">
                            <span className="block px-1 py-1 rounded-full" style={{ position: 'relative', top: '10px' }}>
                            <div className="h-12 bg-center bg-no-repeat bg-contain w-7 bg-custom-icon group-hover:bg-custom-icon2"></div>
                            </span>
                            <span className="hidden text-center group-hover:inline-block font-titleFont text-h6" style={{ position: 'relative', top: '10px' }}>饗宴</span>
                        </div>
                        </a>
                    </div>
                    <div className="flex-auto group">
                        <a href="#" className="flex items-center justify-center px-4 py-2 mx-auto text-center text-white ">
                        <div className="flex flex-col items-center justify-center">
                            <span className="block px-1 py-1 rounded-full">
                            <div className="h-12 bg-center bg-no-repeat bg-contain bg-custom-icon2 w-7 group-hover:bg-custom-icon"></div>
                            </span>
                            <span className="hidden text-center group-hover:inline-block font-titleFont text-h6">設施</span>
                        </div>
                        </a>
                    </div>
                    <div className="flex-auto group">
                        <a href="#" className="flex items-center justify-center px-4 py-2 mx-auto text-center text-white ">
                        <div className="flex flex-col items-center justify-center">
                            <span className="block px-1 py-1 rounded-full" style={{ position: 'relative', top: '10px' }}>
                            <div className="h-12 bg-center bg-no-repeat bg-contain bg-custom-icon w-7 group-hover:bg-custom-icon2"></div>
                            </span>
                            <span className="hidden text-center group-hover:inline-block font-titleFont text-h6" style={{ position: 'relative', top: '10px' }}>旅程</span>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};
export default HomeHeader;