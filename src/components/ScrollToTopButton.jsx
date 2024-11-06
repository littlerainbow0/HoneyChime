import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 顯示/隱藏按鈕的函式
    const toggleVisibility = () => {
        if (window.scrollY > 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // 滾動到頂部的函式
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // 當用戶滾動時調用 toggleVisibility
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className=" fixed bottom-10 right-10 w-14 h-12 bg-[#B69C7C] text-[#634A34] border-2 border-[#B69C7C] flex items-center justify-center
                            text-sm font-medium opacity-50 hover:opacity-100 transition-opacity duration-300 "
                style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    
                }}
            >
                Top
            </button>
        )
    );
};

export default ScrollToTopButton;
