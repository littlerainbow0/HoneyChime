import '../assets/css/style.css'
import '../assets/css/triangle.css'


const AboutTitle =()=>{
    return(
            <div className="container mx-auto mt-10 sm:mt-28 md:mt-40">{/* 容器 */}
                <ul className="grid grid-cols-2 gap-4 sm:gap-20 md:gap-30 xl:gap-72 2xl:gap-96"> {/* 格線 */}
                    <li className="col-span-1 pl-4"> {/* 列 */}
                        <h1 className="font-titleFont text-h2 text-[#634A34] font-bold mb-4 text-center  pr-10">品牌理念</h1>{/* 標題區塊 */}
                        <div id="triangle"></div>{/* 底部三角形 */}
                    </li>
                    <li className="col-span-1 pr-4">
                        <p className="mt-10 font-normal font-bodyFont text-p-1">
                        甜點列車秉持結合美食與旅行的初衷，讓旅客不僅能在旅途中享受精緻甜點，
                        還能沉浸在充滿溫馨與驚喜的體驗中。我們強調當地文化與美食的融合，
                        從食材的選擇到服務的每一個細節，都力求完美，為旅客打造一段難忘的甜點之旅。
                        我們希望每位旅客在品味甜點的同時，也能感受到品牌對質感、創新與人文關懷的承諾。
                        </p>
                    </li>
                </ul>
            </div>
        
    );
};

export default AboutTitle;
