import AboutTitle from "../components/AboutTitle";
import Footerr from "../components/Footerr";
import AboutContent from "../components/AboutContent";
import AboutBgImg from '../../src/assets/images/landscape/landscape_landscape03.png';
import '../assets/css/headerr.css'
import '../assets/css/style.css'
import ScrollToTopButton from "../components/ScrollToTopButton";
import Headerr from "../components/Headerr";

const About =()=>{
    return(
        <div>
            <Headerr bgImage={AboutBgImg}/>
            <AboutTitle/>
            <AboutContent/>
            <Footerr/>
            <ScrollToTopButton></ScrollToTopButton>
            
        </div>
    );
};

export default About;