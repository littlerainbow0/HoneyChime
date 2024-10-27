// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../assets/css/style.css'

    const HomeCarousel = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        //UI 組件和其內容數據分離
        const slides = [
        {
            image: "../../src/assets/images/train_exterior/train_exterior_starTrain.png.png",
            title: "星鳴號",
            title2: "即將開駛",
            description: "星星的閃爍：星星在夜空中閃耀，就像是夢想與希望的象徵。火車穿梭於城市與大自然之間，宛如星星閃耀，象徵著追逐美好願望的過程。乘客登上星鳴號，彷彿搭乘一顆流星，朝著甜點之夢前進。",
        },
        {
            image: "../../src/assets/images/dessert/dessert_newDessert.jpg",
            title: "季節甜點",
            title2: "莓果覆盆子",
            description: "甜點列車推出全新季節限定甜點！伴隨著四季的變換，精心挑選當季新鮮食材，將自然風味與巧妙創意融入每一口甜點。",
        },
        {
            image: "../../src/assets/images/train_interior/train_interior_newSite.png",
            title: "最新接駁",
            title2: "站點介紹",
            description: "甜點列車即將推出全新接駁休息站點！這些站點不僅提供便捷的接駁服務，還設有舒適的休息區和特色小吃。",
        },
        {
            image: "../../src/assets/images/people/people_pastryChef.png",
            title: "米其林",
            title2: "甜點大廚",
            description: "甜點列車隆重宣布與米其林三星大廚合作，共同打造奢華的甜點饗宴！每一款甜點都由大廚精心設計，將精緻工藝與極致口感完美結合。",
        },
        ];
    
        const updateCarousel = (index) => {
        setCurrentSlide(index);
        };
    
        const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        };
    
        const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        };
    
        return (
        <div className="relative mx-auto mt-10 overflow-hidden">
            <div className="flex carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
            {slides.map((slide, index) => (
                <div className="flex-shrink-0 w-full" key={index}>
                    <div className="relative flex justify-center w-full h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
                        <div className="relative flex items-center justify-center w-full h-[500px] p-4 md:h-[700px] xl:h-[750px]">
                            {/* 圖卡片 */}
                            <div className="relative w-full max-w-[90%] z-10 mx-auto">
                                <img className="object-fill pb-20 pl-16 md:pl-48 xl:pl-96" src={slide.image} alt={slide.title} />
                            </div>
                        </div>
                        {/* 文卡片 */}
                        <div className="absolute left-1/4 w-2/5 bg-[#ffffff] shadow-lg transform -translate-x-1/3 translate-y-[40%] z-20 border border-solid border-[#8F755A] mx-auto hover:opacity-0 md:w-1/3 ">
                            <h1 className="text-[#634A34] mx-2 pr-2 text-left font-titleFont text-h5 sm:text-h4 md:text-h3 lg:text-h2 font-bold  mb-1 mt-4 lg:px-5 xl:px-10 xl:py-5">{slide.title}</h1>
                            <h1 className="text-[#634A34] mx-1 px-4 text-right font-titleFont text-h6 sm:text-h5 md:text-h4 lg:text-h3 font-bold mb-1 lg:pt-5 xl:pr-16">{slide.title2}</h1>
                            <p className="p-2 mb-2 overflow-y-auto font-normal text-left font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 lg:p-5 xl:px-20 xl:pb-16">{slide.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
    
            {/* 導航按鈕 Navigation Buttons */}
            <button className="absolute w-3 h-3 p-2 transform rotate-90 -translate-y-1/2 bg-opacity-50 bg-center bg-no-repeat bg-contain rounded-full cursor-pointer top-1/2 left-4 bg-custom-icon4" onClick={prevSlide}></button>
            <button className="absolute w-3 h-3 p-2 transform -rotate-90 -translate-y-1/2 bg-opacity-50 bg-center bg-no-repeat bg-contain rounded-full cursor-pointer top-1/2 right-4 bg-custom-icon4" onClick={nextSlide}></button>
    
            {/* Dots Indicator */}
            <div className="absolute flex space-x-2 bottom-4 right-4">
            {slides.map((_, index) => (
                <div
                key={index}
                className={`w-3 h-3 bg-center bg-no-repeat bg-contain cursor-pointer ${index === currentSlide ? 'opacity-100' : 'opacity-50'} bg-custom-icon4`}
                onClick={() => updateCarousel(index)}
                ></div>
            ))}
            </div>
        </div>
        );
    };
    
    export default HomeCarousel;