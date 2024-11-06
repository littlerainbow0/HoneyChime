import MenuExperience from '../components/MenuExperience.jsx';
import MenuActivity from '../components/MenuActivity.jsx';
import MenuDrink from '../components/MenuDrink.jsx';
import MenuDessert from '../components/MenuDessert.jsx';
import MenuDessertTitle from '../components/MenuDessertTitle.jsx';
import Footerr from '../components/Footerr.jsx';
import BgImg from '../../src/assets/images/dessert/dessert_dessert05.png';
import '../assets/css/style.css'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';
import Headerr from '../components/Headerr.jsx';
import MenuBgImg from '../../src/assets/images/dessert/dessert_dessert05.png'


const Menu =()=>{
    return(
        <div>
            <Headerr bgImage={MenuBgImg}/>
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