import AboutTitle from "../components/AboutTitle";
import Footerr from "../components/Footerr";
import AboutContent from "../components/AboutContent";
import BgImg from '../../src/assets/images/landscape/landscape_landscape03.png';
import '../assets/css/headerr.css'
import '../assets/css/style.css'

const About =()=>{
    return(
        <div>
            <div>
            <div className="w-full text-center bg-no-repeat bg-cover" 
            style={{
                backgroundImage: `url(${BgImg})`,
                width: '100vw',
                paddingBottom: '33.33%', // 設定高度為寬度的 1/3
                backgroundSize: 'cover', // 確保背景圖片覆蓋
                }}>                <div className="flex items-center justify-between px-4">
                <a href="#" className='h-full'>
                    <img src="../../../src/assets/images/icon/LOGO.svg" className="h-10" alt="LOGO"/>
                </a>
                <a href="#" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12"/>
                    </svg>
                </a>
                </div>
            
                <nav className="header_nav">
                    <ul>
                        <li><a href="/">首頁</a></li>
                        <li><a href="/about">概念</a></li>
                        <li><a href="/menu">饗宴</a></li>
                        <li><a href="">設施</a></li>
                        <li><a href="">旅程</a></li>
                    </ul>
                </nav>
            </div>
            </div>
            <AboutTitle/>
            <AboutContent/>
            <Footerr/>
            
        </div>
    );
};

export default About;