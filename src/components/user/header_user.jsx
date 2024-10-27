// Header.jsx
import React, { Component } from 'react';
// import React from 'react';
import '../../assets/css/header.css';
// import '/src/assets/images/train_exterior/Facilities_hero.png';

const Header = () => {
    return (
        <header>
            <div className="header_logo">
                <a href="#">
                    <img src="/src/assets/images/icon/LOGO.svg" alt="Logo" />
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12" />
                    </svg>
                </a>
            </div>

            <nav className="header_nav">
                <ul>
                    <li><a href="">首頁</a></li>
                    <li><a href="">概念</a></li>
                    <li><a href="">饗宴</a></li>
                    <li><a href="/Facilities">設施</a></li>
                    <li><a href="/Trip">旅程</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;