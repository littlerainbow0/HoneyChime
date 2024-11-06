import {useEffect} from 'react';
import '../assets/css/style.css'
import AOS from 'aos';
import polygonLineIcon from '../assets/images/icon/icon_polygonLine.png';
import './aboutcontent.css'





const AboutContent =()=>{
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
        <div className='relative mx-auto mt-10 overflow-hidden lg:mt-40 '>
            <div className="relative flex justify-center w-full h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px] ">
                <div className="relative flex items-center justify-center w-full h-[500px] p-4 md:h-[700px] xl:h-[750px] scale-in ">
                {/* 圖卡片1  */}
                    <div className="relative w-full max-w-[90%] z-10 mx-auto sm:max-w-[80%] ">
                        <img className="object-fill pl-16 pt-96 sm:pt-48 md:pl-48 xl:pl-96 " src="../../src/assets/images/train_exterior/train_exterior_partion01.png" alt="Train Exterior"/>
                    </div>
                    {/* Icon 卡片固定在底部  */}
                    <div className="absolute z-20 w-full -bottom-20 sm:-bottom-20 lg:-bottom-28">
                        <img className="w-full h-full object-cozver" src={polygonLineIcon}  alt="navbar" />
                    </div>
                </div>
                 {/* 文卡片1  */}
                <div className="absolute left-1/4 w-3/5 bg-[#ffffff] shadow-lg transform -translate-x-1/3 translate-y-[0%] z-20 border border-solid border-[#8F755A] mx-auto  md:w-1/3 sm:w-2/5 md:translate-y-[40%] lg:translate-y-[20%] 2xl:w-1/4 2xl:translate-y-[0%] 3xl:-translate-y-[10%]">
                    <h1 className="text-[#634A34] mx-2 pr-2 text-left font-titleFont text-h5 sm:text-h4 md:text-h3 lg:text-h2 font-bold  mb-1 mt-4 lg:px-5 xl:px-10 xl:py-5 ">
                        火車外觀
                    </h1>
                    {/* 限制段落高度  */}
                    <p className="p-2 mb-2 overflow-y-auto font-normal text-left font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 lg:p-5 xl:px-20 xl:pb-16 fade-in-section ">
                        甜點列車的外觀設計融合了現代奢華與復古元素，車身以優雅的鎏金細紋圖案作為點綴，
                        像極甜點的構圖與細膩。車內外都佈置有特殊的裝飾圖案，靈感來自台灣特色甜點的造型，
                        當您乘坐將會上得到獨家享受。列車整體設計不僅兼具美感，還富有文化氣息，象徵著我們對每段旅程的極心打磨。
                        甜點列車的外觀設計融合了現代奢華與復古元素，車身以優雅的鎏金細紋圖案作為點綴，
                        像極甜點的構圖與細膩。車內外都佈置有特殊的裝飾圖案，靈感來自台灣特色甜點的造型，
                        當您乘坐將會上得到獨家享受。列車整體設計不僅兼具美感，還富有文化氣息，象徵著我們對每段旅程的極心打磨。
                    </p>
                </div>
            </div>

            <div className="relative mx-auto mt-40 lg:mt-30 md:mb-10">
                <div className="relative flex justify-center w-full h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px] scale-in ">
                    {/* 圖卡片2  */}
                    <div className="relative w-full max-w-[90%] z-10 mx-auto sm:max-w-[80%]">
                        <img className="object-fill pt-20 pr-16 sm:pt-48 md:pr-48 xl:pr-96" src="../../src/assets/images/dessert/dessert_dessert04.png" alt="Train Exterior"/>
                    </div>
                    {/* Icon 卡片固定在底部  */}
                    <div className="absolute z-20 w-full -bottom-16 sm:-bottom-32 lg:-bottom-28 xl:-bottom-32 2xl:-bottom-48">
                        <img className="w-full h-full object-cozver" src={polygonLineIcon}  alt="navbar" />
                    </div>
                </div>
                {/* 文卡片2  */}
                <div className="absolute w-3/5 bg-[#ffffff] shadow-lg transform -translate-y-[80%] z-20 border border-solid border-[#8F755A] mx-auto  md:w-1/3 sm:w-2/5 md:-translate-y-[90%] lg:-translate-y-[95%] 2xl:w-1/4 2xl:-translate-y-[95%] 3xl:translate-y-[0%] right-5 md:right-20 lg:right-40 xl:right-52 2xl:right-60">
                    <h1 className="text-[#634A34] mx-2 pr-2 text-left font-titleFont text-h5 sm:text-h4 md:text-h3 lg:text-h2 font-bold  mb-1 mt-4 lg:px-5 xl:px-10 xl:py-5">
                        甜點選材與工藝 
                    </h1>
                    {/* 限制段落高度  */}
                    <p className="p-2 mb-2 overflow-y-auto font-normal text-left font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 lg:p-5 xl:px-20 xl:pb-16 fade-in-section">
                        甜點列車的外觀設計融合了現代美感與復古元素，車身以優雅的曲線和溫暖的色調為主，象徵著甜點的精緻與細膩。
                        車廂外部飾有獨特的藝術圖案，靈感來自各地特色甜點的造型，為旅客帶來視覺上的享受。列車整體設計不僅美觀大方，
                        更富有文化氣息，象徵著我們對每段旅程的細心打造。
                    </p>
                </div>
            </div>
            
            <div className="relative flex justify-center w-full h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px] mt-10 sm:mt-60 md:mt-40 lg:mt-72 2xl:mt-[600px]">
                <div className="relative flex items-center justify-center w-full h-[500px] p-4 md:h-[700px] xl:h-[750px] scale-in ">
                {/* 圖卡片3  */}
                    <div className="relative w-full max-w-[90%] z-10 mx-auto sm:max-w-[80%]">
                        <img className="object-fill pl-16 pt-96 sm:pt-48 md:pl-48 xl:pl-96" src="../../src/assets/images/people/people_staff01-3.png" alt="Train Exterior"/>
                    </div>
                    {/* Icon 卡片固定在底部  */}
                    <div className="absolute z-20 w-full -bottom-20 sm:-bottom-20 lg:-bottom-28">
                        <img className="w-full h-full object-cozver" src={polygonLineIcon}  alt="navbar" />
                    </div>
                </div>
                 {/* 文卡片3  */}
                <div className="absolute left-1/4 w-3/5 bg-[#ffffff] shadow-lg transform -translate-x-1/3 translate-y-[70%] z-20 border border-solid border-[#8F755A] mx-auto  md:w-1/3 sm:w-2/5 md:translate-y-[40%] lg:translate-y-[20%] 2xl:w-1/4 2xl:translate-y-[0%] 3xl:-translate-y-[10%]">
                    <h1 className="text-[#634A34] mx-2 pr-2 text-left font-titleFont text-h5 sm:text-h4 md:text-h3 lg:text-h2 font-bold  mb-1 mt-4 lg:px-5 xl:px-10 xl:py-5">
                        接待導覽
                    </h1>
                    {/* 限制段落高度  */}
                    <p className="p-2 mb-2 overflow-y-auto font-normal text-left font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 lg:p-5 xl:px-20 xl:pb-16 fade-in-section">
                    我們的接待團隊致力於提供專業且親切的導覽服務，讓每位旅客在旅程中能感受到賓至如歸的體驗。
                        從登車到旅程結束，專屬導覽員將介紹每一站的景點與美食文化，並解說甜點製作的故事，
                        讓旅客在享用美食的同時，深入了解當地的風土人情與甜點的歷史背景。
                    </p>
                </div>
            </div>

            <div className="relative mx-auto mt-40 lg:mt-30 ">
                <div className="relative flex justify-center w-full h-[600px] md:h-[700px] lg:h-[800px] xl:h-[1100px] scale-in ">
                    {/* 圖卡片4  */}
                    <div className="relative w-full max-w-[90%] z-10 mx-auto sm:max-w-[80%]">
                        <img className="object-fill pt-20 pr-16 sm:pt-48 md:pr-48 xl:pr-96" src="../../src/assets/images/people/people_staff02-1.png" alt="Train Exterior"/>
                    </div>
                    {/* Icon 卡片固定在底部  */}
                    <div className="absolute z-20 w-full -bottom-0 sm:bottom-4 lg:bottom-8 xl:bottom-16 2xl:bottom-16">
                        <img className="w-full h-full object-cozver" src={polygonLineIcon}  alt="navbar" />
                    </div>
                </div>
                {/* 文卡片4  */}
                <div className="absolute w-3/5 bg-[#ffffff] shadow-lg transform -translate-y-[120%] z-20 border border-solid border-[#8F755A] mx-auto md:w-1/3 sm:w-2/5 md:-translate-y-[130%] lg:-translate-y-[140%] 2xl:w-1/4 2xl:-translate-y-[140%] right-5 md:right-20 lg:right-40 xl:right-52 2xl:right-60">
                    <h1 className="text-[#634A34] mx-2 pr-2 text-left font-titleFont text-h5 sm:text-h4 md:text-h3 lg:text-h2 font-bold  mb-1 mt-4 lg:px-5 xl:px-10 xl:py-5">
                    服務承諾
                    </h1>
                    {/* 限制段落高度  */}
                    <p className="p-2 mb-2 overflow-y-auto font-normal text-left font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 lg:p-5 xl:px-20 xl:pb-16 fade-in-section">
                    甜點列車以提供頂級的旅遊與美食體驗為宗旨，我們承諾每一位旅客都能享受到高品質的服務與貼心的款待。
                        我們將以專業、熱情的態度，確保每個細節都能符合您的期待，讓您安心享受每一段旅程。
                        我們相信，無論是旅途中的美景、甜點還是服務，都會成為您難忘的美好回憶。
                    </p>
                </div>
            </div>
        </div>
        
    );
};

export default AboutContent;
