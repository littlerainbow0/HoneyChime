import MenuExperience from '../components/MenuExperience.jsx';
import MenuActivity from '../components/MenuActivity.jsx';
import MenuDrink from '../components/MenuDrink.jsx';
import MenuDessert from '../components/MenuDessert.jsx';
import MenuDessertTitle from '../components/MenuDessertTitle.jsx';
import Footerr from '../components/Footerr.jsx';
import BgImg from '../../src/assets/images/dessert/dessert_dessert05.png';
import '../assets/css/headerr.css'
import '../assets/css/style.css'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';


const Menu =()=>{
    return(
        <div>
            <div>
            <div className="w-full text-center bg-no-repeat bg-cover" 
            style={{
                backgroundImage: `url(${BgImg})`,
                width: '100vw',
                paddingBottom: '33.33%', // 設定高度為寬度的 1/3
                backgroundSize: 'cover', // 確保背景圖片覆蓋
                }}>
                <div className="flex items-center justify-between px-4">
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
            <MenuDessertTitle />
            <MenuDessert />
            <MenuDrink />
            <MenuExperience />
            <MenuActivity />
            <Footerr />
            <ScrollToTopButton></ScrollToTopButton>
            {/* 可以添加其他組件 */}
        </div>
    );
};

export default Menu;