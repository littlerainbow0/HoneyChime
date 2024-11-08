// import React, { Component } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import '../assets/css/header.css'

class Header extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <nav className="header_nav">
                        <div className="header_logo">
                            <Link to="/" className="logo">
                                <img src="/src/assets/images/icon/LOGO.svg" alt="Logo" />
                            </Link>
                            <Link to="/login" aria-label="Profile" className="member_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12" />
                                </svg>
                            </Link>
                        </div>
                        <ul>
                            <li><Link to="/">首頁</Link></li>
                            <li><Link to="/about">概念</Link></li>
                            <li><Link to="/menu">饗宴</Link></li>
                            <li><Link to="/Facilities">設施</Link></li>
                            <li><Link to="/Trip">旅程</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
