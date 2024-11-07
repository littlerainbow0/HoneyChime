import Footerr from "../components/Footerr";
import NewsNews from "../components/NewsNews";
import NewBgImg from '../../src/assets/images/landscape/landscape_landscape04.png';
import '../assets/css/style.css'
import Headerr from "../components/Headerr";

const News=()=>{
    return(
        <div>
            <Headerr bgImage={NewBgImg}/>
            <NewsNews/>
            <Footerr/>
        </div>
    );
};

export default News;