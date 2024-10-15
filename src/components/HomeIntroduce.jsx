import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/'
import '../assets/css/style.css'

const HomeIntroduce=()=>{
    useEffect(() => {
        AOS.init();
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
                });
            });
        
            const elements = document.querySelectorAll('.fade-in-section');
            elements.forEach((el) => observer.observe(el));
            }, []);
        
        return(
                <div className="containerF sm:containerF">
                {/* 第一部分：列車介紹 */}
                <div className="grid grid-cols-12 text-[#2e2e2e]">
                    {/* 左側圖片欄 */}
                    <div className="col-span-2">
                    <img
                        className="object-cover w-full max-w-md h-1/3 max-h-[1040px] overflow-hidden"
                        src="../../src/assets/images/people/people_client01.png"
                        alt="people01"
                        style={{ maskImage: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 25%)" }}
                    />
                    </div>

                    {/* 中間主要內容 */}
                    <div className="flex flex-col col-span-8 bg-[#D9CCBB]">
                    <h1 className="pr-40 mt-40 font-bold text-right text-h3 font-titleFont">
                        列車<span className="font-semibold text-h6 font-titleFont">概覽</span>
                    </h1>
                    <p className="items-center px-48 pt-24 font-normal text-p-1 text-indent-1 font-bodyFont fade-in-section">
                        火車名稱「蜂鳴號」 象徵蜜蜂在自然中穿梭飛行的忙碌與精準，與火車行駛的穩定和專注相呼應。火車如同蜜蜂穿越田野般，帶著乘客感受沿途的風景與甜點的美好。
                    </p>
                    <br />
                    <br />
                    <p className="items-center px-48 font-normal text-p-1 text-indent-1 font-bodyFont fade-in-section">
                        公司名稱「蜂巢集」 則強調了這趟旅程的終點：一個精心製作的甜點世界，像蜜蜂回到蜂巢一樣，為乘客提供豐富多樣的甜點享受。每一次旅程都是一場對甜點的探索，讓顧客不僅是乘坐列車，更是進入一個甜美的世界。
                    </p>
                    <br />
                    <br />
                    <p className="items-center px-48 font-normal text-p-1 text-indent-1 font-bodyFont fade-in-section">
                        甜點列車的概念 將「蜂鳴」與「蜂巢」聯結在一起，表達了整個品牌從開始的「鳴響」（旅程的啟動），到結尾的「甜蜜享受」（回到蜂巢的甜點聚會）的完整體驗。每一程都像蜜蜂般專注、忙碌，最終為顧客呈現無與倫比的甜點品味。
                    </p>
                    <div className="items-center px-48 my-32">
                        <img className="w-full" src="../../src/assets/images/icon/LOGO.svg" alt="logo" data-aos="fade-up" />
                    </div>
                    </div>

                    {/* 右側圖片欄 */}
                    <div className="col-span-2">
                    <img
                        className="object-cover w-full max-w-md h-1/3 max-h-[1040px] overflow-hidden"
                        src="../../src/assets/images/people/people_musicplay01.png"
                        alt="people01"
                        style={{ maskImage: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 25%)" }}
                    />
                    </div>
                </div>

                {/* 第二部分：圖片垂直展示 */}
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                    <img
                        className="object-cover w-full max-w-md h-1/2 max-h-[1040px] overflow-hidden"
                        src="../../src/assets/images/dessert/dessert_dessert02.png"
                        alt="甜點02"
                        style={{ maskImage: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 25%)" }}
                    />
                    </div>
                    <div className="flex flex-col col-span-8">
                    <h1 className="pr-40 mt-40 font-bold text-right text-h3 font-titleFont">
                        甜點<span className="font-semibold text-h6 font-titleFont" data-aos="fade-up">精選</span>
                    </h1>
                    <p className="items-center px-48 py-24 mb-8 font-normal text-p-1 text-indent-1 font-bodyFont" data-aos="fade-up">
                        甜點列車的概念 將「蜂鳴」與「蜂巢」聯結在一起，表達了整個品牌從開始的「鳴響」（旅程的啟動），到結尾的「甜蜜享受」（回到蜂巢的甜點聚會）的完整體驗。每一程都像蜜蜂般專注、忙碌，最終為顧客呈現無與倫比的甜點品味。
                    </p>
                    <div className="flex flex-col items-center col-span-10 fade-in-section">
                        <img className="object-cover w-1/2 max-w-md mb-8 h-2/3" src="../../src/assets/images/dessert/dessert_dessert01.jpg" alt="甜點01" />
                    </div>
                    </div>
                    <div className="col-span-2">
                    <img
                        className="object-cover w-full max-w-md h-1/2 max-h-[1040px] overflow-hidden"
                        src="../../src/assets/images/dessert/dessert_dessert03.png"
                        alt="甜點03"
                        style={{ maskImage: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 25%)" }}
                    />
                    </div>
                </div>

                {/* 第三部分：甜點介紹 */}
                <div className="grid grid-cols-12 text-[#2e2e2e]">
                    <div className="flex flex-col justify-end h-full col-span-2">
                    <img
                        className="object-cover w-full max-w-md h-3/4 max-h-[1040px] overflow-hidden"
                        src="../../src/assets/images/landscape/landscape_landscape01.png"
                        alt="景02"
                        style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 25%)" }}
                    />
                    </div>
                    <div className="flex flex-col col-span-8">
                    <h1 className="pl-40 mt-40 font-bold text-left text-h3 font-titleFont fade-in-section">
                        沿途<span className="font-semibold text-h6 font-titleFont">風景</span>
                    </h1>
                    <p className="items-center px-48 py-24 mb-8 font-normal text-p-1 text-indent-1 font-bodyFont fade-in-section">
                        甜點列車帶您穿越台灣的壯麗景觀，從連綿的山巒到廣闊的稻田，每一段旅程都宛如置身於自然畫卷中。列車沿途經過翠綠的茶園、閃爍的湖泊與遠山，讓乘客不僅能品味美食，還能一邊欣賞獨特的台灣美景。四季變換，風景隨之展現不同的色彩與風韻，每一眼望去都令人心曠神怡，為您的甜點之旅增添無與倫比的視覺享受。
                    </p>
                    <button className="px-6 py-2 rounded-full fade-in-section">
                        <img className="inline w-6 h-6" src="../../src/assets/images/icon/icon_ hexagon_fill.svg"
                        />
                    </button>
                    </div>
                    <div className="flex flex-col justify-end h-full col-span-2">
                    <img className="object-cover w-full max-w-md h-3/4 max-h-[1040px] overflow-hidden" 
                    src="../../src/assets/images/landscape/landscape_landscape02.png" alt="景02"
                    style={{maskImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 25%)"}}
                    />
                    </div>{/* 右側空白列 */}
                </div>
                </div>
                            
            );
    };

export default HomeIntroduce