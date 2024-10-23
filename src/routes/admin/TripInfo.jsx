// import React, { useState } from 'react';
// import React, { Component } from 'react';
import '../../assets/css/header.css';
import '../../assets/css/tripInfo.css';
import '../../assets/css/top_btn.css';
import React, { useState } from 'react';
import Header from '../../components/admin/Header.jsx'

// const tripData =
// [
//     {
//         "RouteID": 1,
//         "RouteImagePath": "/src/assets/images/train_exterior/tripInfo_train01.png",
//         "Duration": 121,
//         "Description": "台北出發，搭乘鐵路前往台中，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
//         "LandScapeImage1": "/src/assets/images/train_exterior/tripInfo_MountainSm02.png",
//         "LandScapeImage2": "/src/assets/images/train_exterior/tripInfo_MountainLg01.png",
//         "LandScapeImage3": "/src/assets/images/train_exterior/tripInfo_SeaSm02.png",
//         "LandScapeDescription": "春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台北到台中的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。",
//         "StopStartName": "台北",
//         "StopEndName": "台中"
//     },
//     {
//         "RouteID": 2,
//         "RouteImagePath": "/src/assets/images/train_exterior/Facilities_train.png",
//         "Duration": 150,
//         "Description": "台北出發，搭乘鐵路前往花蓮，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
//         "LandScapeImage1": "/src/assets/images/train_exterior/tripInfo_SeaLg02.png",
//         "LandScapeImage2": "/src/assets/images/train_exterior/train_exterior_7.png",
//         "LandScapeImage3": "/src/assets/images/train_exterior/tripInfo_MountainSm04.png",
//         "LandScapeDescription": "春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台北到花蓮的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。",
//         "StopStartName": "台北",
//         "StopEndName": "花蓮"
//     },
//     {
//         "RouteID": 3,
//         "RouteImagePath": "/src/assets/images/train_exterior/tripInfo_MountainSm03.png",
//         "Duration": 126,
//         "Description": "台中出發，搭乘鐵路前往台南，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
//         "LandScapeImage1": "/src/assets/images/train_exterior/tripInfo_MountainSm04.png",
//         "LandScapeImage2": "/src/assets/images/train_exterior/tripInfo_MountainLg02.png",
//         "LandScapeImage3": "/src/assets/images/train_exterior/tripInfo_GrassLg02.png",
//         "LandScapeDescription": "春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台中到台南的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。",
//         "StopStartName": "台中",
//         "StopEndName": "台南"
//     },
//     {
//         "RouteID": 4,
//         "RouteImagePath": "/src/assets/images/train_exterior/train_exterior_4.png",
//         "Duration": 145,
//         "Description": "台中出發，搭乘鐵路前往高雄，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
//         "LandScapeImage1": "/src/assets/images/train_exterior/tripInfo_train01.png",
//         "LandScapeImage2": "/src/assets/images/train_exterior/tripInfo_MountainLg03.png",
//         "LandScapeImage3": "/src/assets/images/train_exterior/tripInfo_GrassLg02.png",
//         "LandScapeDescription": "春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台中到高雄的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。",
//         "StopStartName": "台中",
//         "StopEndName": "高雄"
//     },
//     {
//         "RouteID": 5,
//         "RouteImagePath": "/src/assets/images/train_exterior/train_exterior_hero.png",
//         "Duration": 154,
//         "Description": "高雄出發，搭乘鐵路前往台中，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
//         "LandScapeImage1": "/src/assets/images/train_exterior/tripInfo_GrassLg02.png",
//         "LandScapeImage2": "/src/assets/images/train_exterior/tripInfo_MountainSm01.png",
//         "LandScapeImage3": "/src/assets/images/train_exterior/tripInfo_train01.png",
//         "LandScapeDescription": "春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從高雄到台中的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。",
//         "StopStartName": "高雄",
//         "StopEndName": "台中"
//     },
//     {
//         "RouteID": 6,
//         "RouteImagePath": "/src/assets/images/train_exterior/train_exterior_7.png",
//         "Duration": 240,
//         "Description": "高雄出發，搭乘鐵路前往花蓮，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
//         "LandScapeImage1": "/src/assets/images/train_exterior/tripInfo_SeaSm03.png",
//         "LandScapeImage2": "/src/assets/images/train_exterior/tripInfo_MountainLg03.png",
//         "LandScapeImage3": "/src/assets/images/landscape/landscape_landscape04.png",
//         "LandScapeDescription": "春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從高雄到花蓮的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。",
//         "StopStartName": "高雄",
//         "StopEndName": "花蓮"
//     }
// ];

// // const getDessertType = [
// // { "DessertTypeID": 1, "DessertType": "JP", "DessertTitle": "日式甜點" },
// // { "DessertTypeID": 2, "DessertType": "TW", "DessertTitle": "台式甜點" },
// // { "DessertTypeID": 3, "DessertType": "EU", "DessertTitle": "歐式甜點" }
// // ];
// const mealData =
// [
//     {
//         MealID: 1,
//         MealName: "舒芙蕾佐時令水果",
//         MealImagePath: "/src/assets/images/dessert/dessert_newDessert.jpg",
//         MealContent: "舒芙蕾, 時令水果, 日本綠茶",
//         MealDescription: " 舒芙蕾：<br>由新鮮的雞蛋和高品質的牛奶製成，外層金黃酥脆，內裡則柔軟綿密。<br>時令水果：<br>我們提供多種配料選擇，包括香滑的鮮奶油、時令水果（如草莓、藍莓）、以及自製的焦糖醬或抹茶醬，讓您根據個人口味自由搭配，增添風味。<br>日式綠茶：<br>精選香醇的日式綠茶，與舒芙蕾相輔相成。"
//     },
//     {
//         MealID: 2,
//         MealName: "日式和菓子佐綠茶羊羹",
//         MealImagePath: "/src/assets/images/dessert/tripInfo_Jp02.png",
//         MealContent: "日式和菓子, 綠茶羊羹, 靜岡抹茶",
//         MealDescription: "日式和菓子：<br>選用當季新鮮食材，製作出色彩繽紛的和菓子，像是細膩的麻糬、香甜的紅豆糕和繽紛的水果羊羹，無論是口感還是外觀都讓人驚喜。<br><br>靜岡抹茶：<br> 提供選自日本優質茶園，茶香濃郁，口感清新，完美搭配各式和菓子。"
//     },

//     {
//         MealID: 3,
//         MealName: "麻薏蛋糕佐焦糖鳳梨",
//         MealImagePath: "/src/assets/images/dessert/tripInfo_Tw01.png",
//         MealContent: "麻薏蛋糕, 炙烤焦糖鳳梨, 高山茶",
//         MealDescription: "麻薏蛋糕：<br>這款麻薏蛋糕以香濃的麻薏為主料，口感綿密，帶有淡淡的堅果香氣，搭配細緻的奶油霜，讓人一口接一口，回味無窮。<br>炙烤焦糖鳳梨：<br>我們的炙烤焦糖鳳梨採用新鮮的鳳梨，經過炙烤後，散發出誘人的焦香與甜味，外脆內嫩，是完美的甜點搭配。<br>高山茶：<br>選用來自高山的優質茶葉，泡出清新的茶湯，香氣撲鼻，帶有淡淡的甘甜，完美平衡了甜點的濃郁風味，讓你享受每一口的美好時光。"
//     },
//     {
//         MealID: 4,
//         MealName: "地瓜涼菓佐高山茶糕",
//         MealImagePath: "/src/assets/images/dessert/tripInfo_Tw04.png",
//         MealContent: "地瓜涼菓, 高山茶糕, 凍頂烏龍茶",
//         MealDescription: "地瓜涼菓：<br>這款地瓜涼菓採用新鮮地瓜製作，口感滑順，甜而不膩，搭配天然的椰漿，清爽可口，是夏日消暑的最佳選擇。<br>高山茶糕：<br>高山茶糕融合了優質高山茶的清香，質地柔軟且富有彈性，每一口都散發著茶葉的獨特風味，讓你在甜點中感受到自然的滋味。<br>凍頂烏龍茶：<br>選用凍頂烏龍茶，泡出醇厚的茶湯，帶有淡雅的花香與清新的甘味，與各式甜點相得益彰，讓你在享受美味的同時，感受到茶的悠然魅力。"
//     },
//     {
//         MealID: 5,
//         MealName: "蒙布朗佐馬卡龍",
//         MealImagePath: "/src/assets/images/dessert/trip_Eur.png",
//         MealContent: "蒙布朗, 馬卡龍, 卡布奇諾",
//         MealDescription: "蒙布朗：<br>這款蒙布朗甜點以細膩的栗子餡為主角，搭配香滑的奶油霜，外層包裹著輕盈的蛋糕，展現出豐富的層次感，每一口都充滿秋天的暖意。<br>馬卡龍：<br>我們的馬卡龍外脆內軟，選用新鮮食材製作，口味多樣，從經典的香草到濃郁的巧克力，無論是哪一種，都帶來絕妙的甜蜜享受。<br>卡布奇諾：<br>這杯卡布奇諾由濃郁的咖啡和綿密的奶泡完美結合，散發著香醇的咖啡香氣，微微的苦味與奶香交融，為甜點時光增添一抹溫暖與愉悅。"
//     },
//     {
//         MealID: 6,
//         MealName: "草莓塔佐馬卡龍",
//         MealImagePath: "/src/assets/images/dessert/tripInfo_Eur04.png",
//         MealContent: "草莓塔, 馬卡龍, 精品拿鐵",
//         MealDescription: "草莓塔：<br>這款草莓塔以新鮮草莓為主料，搭配細緻的酥皮與香滑的奶油餡，酸甜的滋味讓每一口都充滿春天的清新氣息，是甜點中的經 <br>馬卡龍：<br>我們的馬卡龍色彩繽紛，外脆內軟，口味多樣，從經典的香草、鮮果到濃郁的巧克力，每一口都是甜蜜的驚喜，讓你欲罷不能。<br>精品拿鐵： <br>這杯精品拿鐵由優質咖啡豆精心萃取而成，香濃的咖啡與綿密的奶泡完美結合，微微的甜味與濃郁的香氣，為你的甜點時光增添無限魅力。"
//     },
// ]

const tripData = [
    {
        RouteID: 1,
        RouteImagePath: "/src/assets/images/train_exterior/tripInfo_train01.png",
        Description: "台北出發，搭乘鐵路前往台中，沿途的景色會讓你驚艷不已。",
        LandScapeDescription: "春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。",
        StopStartName: "台北",
        StopEndName: "台中",
        LandScapeImages: [
            "/src/assets/images/train_exterior/tripInfo_MountainSm02.png",
            "/src/assets/images/train_exterior/tripInfo_MountainLg01.png",
            "/src/assets/images/train_exterior/tripInfo_SeaSm02.png",
        ],
    },
    // Add other routes here...
];

const mealData = [
    {
        MealID: 1,
        MealName: "舒芙蕾佐時令水果",
        MealImagePath: "/src/assets/images/dessert/dessert_newDessert.jpg",
        MealDescription: "由新鮮的雞蛋和高品質的牛奶製成...",
    },
    // Add other meals here...
];

const TripInfo = () => {
    const [currentRoute, setCurrentRoute] = useState(tripData[0]);

    const handleRouteChange = (routeId) => {
        const selectedRoute = tripData.find(route => route.RouteID === routeId);
        if (selectedRoute) {
            setCurrentRoute(selectedRoute);
        }
    };

    return (
        <div>
        <header className='tripInfo_hero'>
            <Header/>
        </header>
            <div className="itinerary">
                <nav className="top_nav">
                    <ul>
                        {tripData.map(route => (
                            <li key={route.RouteID}>
                                <button
                                    className="itinerary_btn"
                                    onClick={() => handleRouteChange(route.RouteID)}
                                >
                                    {route.StopStartName} ⭢ {route.StopEndName}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="trip_title">
                <div>
                    <p>
                        <span className="dessert_type">{currentRoute.DessertType}</span>
                        <span className="sm_font">
                            <span>{currentRoute.StopStartName}</span> ⭢ <span>{currentRoute.StopEndName}</span>
                        </span>
                    </p>
                    <img src={currentRoute.RouteImagePath} alt="Route" />
                </div>
                <div>
                    <p>{currentRoute.Description}</p>
                    <a href="/reservation.html">行程預約</a>
                </div>
            </div>

            <div className="view_info">
                <h3>沿途風景 <span>▼</span></h3>
                <div className="view_info_content">
                    <div>
                        <h5>Landscape</h5>
                        <p>{currentRoute.LandScapeDescription}</p>
                        <img src={currentRoute.LandScapeImages[0]} alt="Landscape 1" />
                    </div>
                    <div>
                        {currentRoute.LandScapeImages.slice(1).map((img, index) => (
                            <img key={index} src={img} alt={`Landscape ${index + 2}`} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="dessert_info">
                <h3>餐點介紹 <span>▼</span></h3>
                {mealData.map(meal => (
                    <div key={meal.MealID} className="dessert_section">
                        <h5>{meal.MealName}</h5>
                        <span dangerouslySetInnerHTML={{ __html: meal.MealDescription }} />
                        <img src={meal.MealImagePath} alt={meal.MealName} />
                    </div>
                    
                ))}
                
            </div>

            <a href="#" className="top">Λ<br />Top</a>
            </div>
    );
};

export default TripInfo;
