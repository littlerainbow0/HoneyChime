// import React, { Component } from 'react';
import React, { useEffect } from 'react';
import '../../assets/css/header.css';
import '../../assets/css/trip.css';
import Header from '../../components/admin/Header.jsx'

const Trip = () => {
    const slideIndexes = [1, 1, 1];

    const showSlides = (n, sectionIndex) => {
        const slides = document.querySelectorAll(`.trip_section:nth-child(${sectionIndex + 1}) .mySlides`);
        
        if (n > slides.length) { slideIndexes[sectionIndex] = 1; }
        if (n < 1) { slideIndexes[sectionIndex] = slides.length; }

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        slides[slideIndexes[sectionIndex] - 1].style.display = "block";
    };

    const plusSlides = (n, sectionIndex) => {
        showSlides(slideIndexes[sectionIndex] += n, sectionIndex);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('.trip_section');

        sections.forEach((section, index) => {
            showSlides(slideIndexes[index], index);
        });
    }, []);

    return (
        <div>
            <html>

            
            <div className="trip_hero">
            <Header/>

            </div>
            <main>
                <div className="trip_section">
                    <div className="slider_info">
                        <h3>日式甜點行程</h3>
                        <p>日式甜點融入日本文化，展現精緻與自然之美，讓每一口都感受傳統與創意的和諧。</p>
                        <a href="/tripInfo.html">查看行程
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor"
                                className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </a>
                    </div>
                    <div className="slider">
                        <img src="/src/assets/images/dessert/trip_Jp.png" alt="" className="mySlides fade" />
                        <img src="/src/assets/images/dessert/dessert_newDessert.jpg" alt="" className="mySlides fade" />
                        <img src="/src/assets/images/dessert/trip_JpDrink2.png" alt="" className="mySlides fade" />
                        <a className="next" onClick={() => plusSlides(1, 0)}>&#10095;</a>
                    </div>
                </div>

                <div className="trip_section">
                    <div className="slider_info">
                        <h3>台式甜點行程</h3>
                        <p>台式甜點色彩繽紛，口味多樣，結合傳統與創新，帶來獨特的味蕾享受與懷舊情懷。</p>
                        <a href="/tripInfo.html">查看行程
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor"
                                className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </a>
                    </div>
                    <div className="slider">
                        <img src="/src/assets/images/dessert/trip_Tw.png" alt="" className="mySlides fade" />
                        <img src="/src/assets/images/dessert/trip_TwDrink.png" alt="" className="mySlides fade" />
                        <img src="/src/assets/images/dessert/tripInfo_Tw03.png" alt="" className="mySlides fade" />
                        <a className="next" onClick={() => plusSlides(1, 1)}>&#10095;</a>
                    </div>
                </div>

                <div className="trip_section">
                    <div className="slider_info">
                        <h3>歐式甜點行程</h3>
                        <p>歐式甜點講究工藝與口感，融合精緻的外觀和豐富的風味，為味蕾帶來無限的驚喜與享受。</p>
                        <a href="/tripInfo.html">查看行程
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor"
                                className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </a>
                    </div>
                    <div className="slider">
                        <img src="/src/assets/images/dessert/trip_Eur.png" alt="" className="mySlides fade" />
                        <img src="/src/assets/images/dessert/tripInfo_Eur03.png" alt="" className="mySlides fade" />
                        <img src="/src/assets/images/dessert/trip_EurDrink.png" alt="" className="mySlides fade" />
                        <a className="next" onClick={() => plusSlides(1, 2)}>&#10095;</a>
                    </div>
                </div>
            </main>
            </html>
        </div>
    );
};

export default Trip;
