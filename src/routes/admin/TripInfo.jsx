import React, { Component } from 'react';
import '../../assets/css/tripInfo.css';
import'../../assets/css/top_btn.css';

class TripInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: null,
        };
    }

    getRoute = (routeId) => {
        const route = this.props.getRouteData.find(item => item.RouteID === routeId);
        if (route) {
            this.setState({ route });
        } else {
            console.error("找不到該路線的資料");
        }
    }

    render() {
        const { route } = this.state;

        return (
            <div>
                {/* 行程按鈕 */}
                <div className="itinerary">
                    <nav className="top_nav">
                        <ul>
                            {[1, 2, 3, 4, 5, 6].map(routeId => (
                                <li key={routeId}>
                                    <button
                                        className="itinerary_btn"
                                        id={routeId}
                                        onClick={() => this.getRoute(routeId)}
                                    >
                                        {routeId === 1 ? '台北⭢台中' : 
                                         routeId === 2 ? '台北⭢花蓮' :
                                         routeId === 3 ? '台中⭢台南' :
                                         routeId === 4 ? '台中⭢高雄' :
                                         routeId === 5 ? '高雄⭢台中' :
                                         '高雄⭢花蓮'}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* 行程主題 */}
                <div className="trip_title">
                    <div>
                        <p>
                            <span className="dessert_type" id="dessertType">{route ? route.DessertType : '日式甜點'}</span>
                            <span className="sm_font">
                                <span id="stopStart">{route ? route.StopStartName : '台北'}</span> ⭢ 
                                <span id="stopEnd">{route ? route.StopEndName : '台中'}</span>
                            </span>
                        </p>
                        <img id="routeImg" src={route ? route.RouteImagePath : '/src/assets/images/train_exterior/tripInfo_train01.png'} alt="" />
                    </div>
                    <div>
                        <p id="description">
                            {route ? route.Description : '台北出發，搭乘鐵路前往台中，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。'}
                        </p>
                        <a href="/reservation.html">行程預約</a>
                    </div>
                </div>

                {/* 風景介紹 */}
                <div className="view_info">
                    <h3>沿途風景<span>▼</span></h3>
                    <div className="view_info_content">
                        <div>
                            <h5>Landscape</h5>
                            <p id="LandscapeDescription">
                                {route ? route.LandScapeDescription : '春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台北到台中的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。'}
                            </p>
                            <img id="landscapeimg1" src={route ? route.LandScapeImage1 : '/src/assets/images/train_exterior/tripInfo_MountainSm02.png'} alt="" />
                        </div>
                        <div>
                            <img id="landscapeimg2" src={route ? route.LandScapeImage2 : '/src/assets/images/train_exterior/tripInfo_MountainLg01.png'} alt="" />
                            <img id="landscapeimg3" src={route ? route.LandScapeImage3 : '/src/assets/images/train_exterior/tripInfo_SeaSm02.png'} alt="" />
                        </div>
                    </div>
                </div>

                {/* 餐點介紹 */}
                <div className="dessert_info">
                    <h3>餐點介紹<span>▼</span></h3>
                    <div>
                        <div className="dessert_section">
                            <h5 id="mealName1">舒芙雷套餐（含飲料）</h5>
                            <span id="mealContent1">舒芙蕾：<br />
                                由新鮮的雞蛋和高品質的牛奶製成，外層金黃酥脆，內裡則柔軟綿密。
                                <br />配料選擇：<br />
                                我們提供多種配料選擇，包括香滑的鮮奶油、時令水果（如草莓、藍莓）、以及自製的焦糖醬或抹茶醬，讓您根據個人口味自由搭配，增添風味。
                                <br />飲品搭配：<br />
                                精選香醇的日式綠茶，與舒芙蕾相輔相成。
                            </span>
                            <img id="mealImg1" src="/src/assets/images/dessert/dessert_newDessert.jpg" alt="" />
                        </div>
                        <div className="dessert_section">
                            <h5 id="mealName2">日式和菓子套餐（含飲料）</h5>
                            <span id="mealContent2">日式菓子：<br />
                                和菓子：選用當季新鮮食材，製作出色彩繽紛的和菓子，像是細膩的麻糬、香甜的紅豆糕和繽紛的水果羊羹，無論是口感還是外觀都讓人驚喜。
                                <br />靜岡抹茶：<br />
                                提供選自日本優質茶園，茶香濃郁，口感清新，完美搭配各式和菓子。
                            </span>
                            <img id="mealImg2" src="/src/assets/images/dessert/tripInfo_Jp02.png" alt="" />
                        </div>
                    </div>
                </div>

                <a href="#" className="top">
                    Λ
                    <br />
                    Top
                </a>
            </div>
        );
    }
}

export default TripInfo;
