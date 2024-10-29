create DATABASE  HoneyTrainDB default character set utf8mb4;

use HoneyTrainDB;

DROP TABLE IF EXISTS `CARRIAGES`;
CREATE TABLE `CARRIAGES` (
   `CarriageID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `CarriageType` VARCHAR(40) NOT NULL,
   `Price` INT(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `CARRIAGES` (`CarriageType`, `Price`) VALUES
("F", 2000), ("E", 6000), ("D", 2000), ("A", 12000);

DROP TABLE IF EXISTS `SEATS`;
CREATE TABLE `SEATS` (
   `SeatID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `CarriageID` INT(11) NOT NULL,
   `SeatName` VARCHAR(40) NOT NULL,
    FOREIGN KEY (CarriageID) REFERENCES CARRIAGES (CarriageID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `SEATS` (`CarriageID`, `SeatName`) VALUES
("1", "F1"), ("1", "F2"), ("1", "F3"), ("1", "F4"), ("1", "F5"), ("1", "F6"), ("1", "F7"), ("1", "F8"), ("2", "E2"),
("2", "E3"), ("2", "E4"), ("3", "D1"), ("3", "D2"), ("3", "D3"), ("3", "D4"), ("3", "D5"), ("3", "D6"), ("4", "A1");

DROP TABLE IF EXISTS `DEPARTURETIMES`;
CREATE TABLE `DEPARTURETIMES` (
   `DepartureTimeID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `DepartureTime` VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `DEPARTURETIMES` (`DepartureTime`) VALUES
("13:00"),("17:00");

DROP TABLE IF EXISTS `USERS`;
CREATE TABLE `USERS` (
   `UserID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `UserName` VARCHAR(40) NOT NULL,
   `UserPhone` VARCHAR(20) NOT NULL,
   `UserMail` VARCHAR(50) NOT NULL,
   `Password` VARCHAR(100) NOT NULL,
   `Sex` VARCHAR(10) NOT NULL,
   `Birth` DATE NOT NULL,
   `RegistrationTime` DATE NOT NULL,
   `LatestLogin` DATETIME DEFAULT NULL,
   `Validity` VARCHAR(100) DEFAULT NULL,
   `ValidityExpired` DATETIME DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `USERS` (`UserName`, `UserPhone`, `UserMail`,  `Password`,  `Sex`, `Birth`, `RegistrationTime`) VALUES
("yeejun", "0903678922", "admin@gmail.com", "$2b$10$ZcWl8HbKWRhX35kVZtkWTuBTxThCilyQEEmrh.Gnc2iIUeU9M5HaW", "F", "1999-04-01", "2024-10-17"),
("shaoching", "0994785983", "user1@gmail.com", "$2b$10$tVAMd2MHVOVKA6VwURW1AegJkUd0nXZfObTEzS3O2THfXYAt5ysTy", "F", "1997-02-22", "2024-10-17"),
("hsinghui", "0987364923", "user2@gmail.com", "$2b$10$afIjb5QSlBwz5/MSrG4f7OVMRLtGGVzxwTAC3/K5ZmRE01Idntc.W", "F", "1999-07-09", "2024-10-17"),
("hongyu", "0976938475", "user3@gmail.com", "$2b$10$XkxQybPUd9b48z2Jhz2z/ujekTqkHqH6AT7xmK/sTp02rCn5YmX3W", "M", "2005-01-14", "2024-10-17");

DROP TABLE IF EXISTS `DESSERTS`;
CREATE TABLE `DESSERTS` (
   `DessertTypeID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `DessertType` VARCHAR(10) NOT NULL,
   `DessertTitle` VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `DESSERTS` (`DessertType`, `DessertTitle`) VALUES
("JP", "日式甜點"), ("TW", "台式甜點"), ("EU", "歐式甜點");

DROP TABLE IF EXISTS `NEWS`;
CREATE TABLE `NEWS` (
   `NewsID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `Date` DATE NOT NULL,
   `Category` VARCHAR(200) NOT NULL,
   `Content` VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `NEWS` (`Date`, `Category`, `Content`) VALUES
("2024-09-17", "員工部落格", "員工部落格已更新"), 
("2024-08-29", "營運資訊 旅遊諮詢台信息", "關於因10號颱風逼近「九州七星」營運計畫（後續）及旅遊諮詢台暫時關閉的通知"),
("2024-10-18", "甜點活動", "星鳴號甜點特別活動即將開始，敬請期待！"),
("2024-10-12", "列車服務", "甜點列車新增VIP包廂服務，讓旅客享受更私密的甜點旅程。"),
("2024-10-05", "甜點新作", "全新巧克力熔岩蛋糕限時推出，口感濃郁！"),
("2024-09-30", "旅遊諮詢", "九州七星颱風營運計畫已恢復，列車正常運行。"),
("2024-09-22", "甜點新作", "秋季限定南瓜派正式上架，享受秋天的味道。"),
("2024-09-18", "員工部落格", "甜點列車廚師團隊部落格更新，分享創意甜點背後故事。"),
("2024-09-12", "優惠活動", "預訂星鳴號旅程，享受雙人甜點套餐85折優惠。"),
("2024-09-05", "列車服務", "甜點列車新增免費Wi-Fi服務，讓旅客隨時分享甜蜜時光。"),
("2024-09-01", "旅程介紹", "星鳴號將開通新的觀光路線，途經更多甜點特色景點。"),
("2024-08-28", "甜點活動", "中秋節期間，甜點列車將提供特製月餅，敬請品嚐！"),
("2024-08-20", "營運資訊", "甜點列車將於9月進行例行維護，部分路線暫停運行。"),
("2024-08-15", "甜點新作", "藍莓乳酪蛋糕系列正式登場，香甜濃郁不容錯過。"),
("2024-08-10", "旅程介紹", "甜點列車新增環島甜點之旅，沿途欣賞壯麗風景。"),
("2024-08-05", "優惠活動", "8月特別優惠，凡預訂甜點列車，享受雙人同行85折。"),
("2024-07-30", "甜點新作", "夏日限定芒果雪糕推出，讓您感受沁涼的美味。"),
("2024-07-25", "列車服務", "新增兒童遊戲區，讓家庭旅客享受更多樂趣。"),
("2024-07-20", "員工部落格", "甜點列車團隊參加了甜點製作大賽，獲得殊榮。"),
("2024-07-15", "甜點活動", "甜點製作教學活動將於8月開放報名，限額20人。"),
("2024-07-10", "旅遊諮詢", "甜點列車新增夜間甜點遊，旅程中欣賞浪漫夜景。"),
("2024-07-05", "營運資訊", "由於例行保養，7月10日至15日部分班次暫停服務。"),
("2024-06-30", "甜點新作", "巧克力馬卡龍將於7月登場，滿足您的甜點需求。"),
("2024-06-25", "列車服務", "新增咖啡師服務，讓旅客享受現場手沖咖啡。"),
("2024-06-20", "甜點活動", "夏季特別活動，參加有機會贏得免費甜點之旅。"),
("2024-06-15", "旅程介紹", "新增甜點列車豪華包廂服務，提供高端客戶專屬體驗。"),
("2024-06-10", "員工部落格", "甜點列車內部裝潢大改造，邀請設計師分享創作過程。"),
("2024-06-05", "優惠活動", "預訂7月甜點列車班次，享受免費甜點飲品套餐。"),
("2024-06-01", "營運資訊", "甜點列車將於7月推出全新行程，包含特別甜點活動。"),
("2024-05-25", "甜點新作", "玫瑰草莓千層蛋糕登場，限量供應，敬請品嚐。"),
("2024-05-20", "甜點活動", "母親節特別活動，參加有機會贏得精美甜點禮盒。"),
("2024-05-15", "員工部落格", "甜點列車員工心得分享：在列車上的日常生活。");


DROP TABLE IF EXISTS `CARDS`;
CREATE TABLE `CARDS` (
   `CardsID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `CardImage` VARCHAR(200) NOT NULL,
   `Title` VARCHAR(20) NOT NULL,
   `Title2` VARCHAR(20) NOT NULL,
   `Paragraph` VARCHAR(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `CARDS` (`CardImage`, `Title`, `Title2`, `Paragraph`) VALUES
("/src/assets/images/train_exterior/train_exterior_starTrain_png.png", "星鳴號", "即將推出",
"星星的閃爍：星星在夜空中閃耀，就像是夢想與希望的象徵。火車穿梭於城市與大自然之間，宛如星星閃耀，象徵著追逐美好願望的過程。乘客登上星鳴號，彷彿搭乘一顆流星，朝著甜點之夢前進。流星的速度：火車如流星般劃破天際，象徵著快速、高效的服務，也隱含著每一段甜點旅程都充滿驚喜與感動。鳴叫與運行的聯想：鳴叫的星星就像火車運行時發出的聲響，這聲音伴隨著甜點之旅，帶來溫馨和滿足，讓每位旅客在愉悅的氛圍中，感受到專屬的美味與幸福。"),
("/src/assets/images/dessert/dessert_newDessert.jpg", "季節甜點", "莓果覆盆子",
"甜點列車推出全新季節限定甜點！伴隨著四季的變換，精心挑選當季新鮮食材，將自然風味與巧妙創意融入每一口甜點。"),
("/src/assets/images/train_interior/train_interior_newSite.png", "最新接駁", "站點介紹",
"甜點列車即將推出全新接駁休息站點！這些站點不僅提供便捷的接駁服務，還設有舒適的休息區和特色小吃。"),
("/src/assets/images/people/people_pastryChef.png", "米其林", "甜點大廚",
"甜點列車隆重宣布與米其林三星大廚合作，共同打造奢華的甜點饗宴！每一款甜點都由大廚精心設計，將精緻工藝與極致口感完美結合。");

DROP TABLE IF EXISTS `STOPS`;
CREATE TABLE `STOPS` (
    `StopID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `StopName` VARCHAR(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `STOPS` (`StopName`) VALUES
("台南"),("台北"),("台中"),("花蓮"),("高雄");

DROP TABLE IF EXISTS `ROUTES`;
CREATE TABLE `ROUTES` (
    `RouteID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `StopStart` INT(11) NOT NULL,
    `StopEnd` INT(11) NOT NULL,
    `RouteImagePath` VARCHAR(200) NOT NULL,
    `Duration` INT(11) NOT NULL,
    `Description` VARCHAR(200) NOT NULL,
    `LandScapeImage1` VARCHAR(500) NOT NULL,
    `LandScapeImage2` VARCHAR(500) NOT NULL,
    `LandScapeImage3` VARCHAR(500) NOT NULL,
    `LandScapeDescription` VARCHAR(500) NOT NULL,
    FOREIGN KEY (StopStart) REFERENCES STOPS (StopID),
    FOREIGN KEY (StopEnd) REFERENCES STOPS (StopID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `ROUTES` (`StopStart`, `StopEnd`, `RouteImagePath`, `Duration`,`Description`, `LandScapeImage1`, `LandScapeImage2`, `LandScapeImage3`, `LandScapeDescription`) VALUES
(2, 3, "/src/assets/images/train_exterior/tripInfo_train01.png", 121, 
"台北出發，搭乘鐵路前往台中，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
"/src/assets/images/train_exterior/tripInfo_MountainSm02.png",
"/src/assets/images/train_exterior/tripInfo_MountainLg01.png",
"/src/assets/images/train_exterior/tripInfo_SeaSm02.png",
"春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台北到台中的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。"),
(2, 4, "/src/assets/images/train_exterior/Facilities_train.png", 150, 
"台北出發，搭乘鐵路前往花蓮，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
"/src/assets/images/train_exterior/tripInfo_SeaLg02.png",
"/src/assets/images/train_exterior/train_exterior_7.png",
"/src/assets/images/train_exterior/tripInfo_MountainSm04.png",
"春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台北到花蓮的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。"),
(3, 1, "/src/assets/images/train_exterior/tripInfo_MountainSm03.png", 126, 
"台中出發，搭乘鐵路前往台南，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
"/src/assets/images/train_exterior/tripInfo_MountainSm04.png",
"/src/assets/images/train_exterior/tripInfo_MountainLg02.png",
"/src/assets/images/train_exterior/tripInfo_GrassLg02.png",
"春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台中到台南的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。"),
(3, 5, "/src/assets/images/train_exterior/train_exterior_4.png", 145, 
"台中出發，搭乘鐵路前往高雄，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
"/src/assets/images/train_exterior/tripInfo_train01.png",
"/src/assets/images/train_exterior/tripInfo_MountainLg03.png",
"/src/assets/images/train_exterior/tripInfo_GrassLg02.png",
"春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從台中到高雄的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。"),
(5, 3, "/src/assets/images/train_exterior/train_exterior_hero.png", 154, 
"高雄出發，搭乘鐵路前往台中，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
"/src/assets/images/train_exterior/tripInfo_GrassLg02.png",
"/src/assets/images/train_exterior/tripInfo_MountainSm01.png",
"/src/assets/images/train_exterior/tripInfo_train01.png",
"春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從高雄到台中的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。"),
(5, 4, "/src/assets/images/train_exterior/train_exterior_7.png", 240, 
"高雄出發，搭乘鐵路前往花蓮，沿途的景色會讓你驚艷不已。列車穿越繁華的都市後，逐漸進入寧靜的山林與田野。你可以看到壯麗的中央山脈在遠方矗立，隨著列車的前行，山谷與河流交織出一幅幅美麗的畫面。",
"/src/assets/images/train_exterior/tripInfo_SeaSm03.png",
"/src/assets/images/train_exterior/tripInfo_MountainLg03.png",
"/src/assets/images/landscape/landscape_landscape04.png",
"春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的雲霧，每個季節都有其獨特的風貌。這段旅程不僅是從高雄到花蓮的移動，更是一場視覺與心靈的饗宴，讓你在車窗外的美景中，感受到台灣的自然魅力與文化深度。");

DROP TABLE IF EXISTS `MEALS`;
CREATE TABLE `MEALS` (
    `MealID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `DessertTypeID` INT(11) NOT NULL,
    `MealName` VARCHAR(40) NOT NULL,
    `MealImagePath` VARCHAR(200) NOT NULL,
    `MealContent` VARCHAR(40) NOT NULL,
    `MealDescription` VARCHAR(1000) NOT NULL,
    FOREIGN KEY (DessertTypeID) REFERENCES DESSERTS (DessertTypeID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `MEALS` (`DessertTypeID`, `MealName`, `MealImagePath`, `MealContent`, `MealDescription`) VALUES
(1, "舒芙蕾佐時令水果", "/src/assets/images/dessert/dessert_newDessert.jpg", "舒芙蕾, 時令水果, 日本綠茶"," 舒芙蕾：<br>
                        由新鮮的雞蛋和高品質的牛奶製成，外層金黃酥脆，內裡則柔軟綿密。
                        <br>配料選擇：<br>
                        我們提供多種配料選擇，包括香滑的鮮奶油、時令水果   （如草莓、藍莓）、以及自製的焦糖醬或抹茶醬，讓您根據個人口味自由搭配，增添風味。
                        <br>飲品搭配：<br>
                        精選香醇的日式綠茶，與舒芙蕾相輔相成。"),
(1, "日式和菓子佐綠茶羊羹", "/src/assets/images/dessert/tripInfo_Jp02.png", "日式和菓子, 綠茶羊羹, 靜岡抹茶","日式菓子：<br>
                        和菓子：選用當季新鮮食材，製作出色彩繽紛的和菓子，像是細膩的麻糬、香甜的紅豆糕和繽紛的水果羊羹，無論是口感還是外觀都讓人驚喜。
                        <br>靜岡抹茶：<br>
            提供選自日本優質茶園，茶香濃郁，口感清新，完美搭配各式和菓子。"),
(2, "麻薏蛋糕佐焦糖鳳梨", "/src/assets/images/dessert/tripInfo_Tw01.png", "麻薏蛋糕, 炙烤焦糖鳳梨, 高山茶","麻薏蛋糕：<br/>
                        這款麻薏蛋糕以香濃的麻薏為主料，口感綿密，帶有淡淡的堅果香氣，搭配細緻的奶油霜，讓人一口接一口，回味無窮。
                        <br/><br/>
                        炙烤焦糖鳳梨：<br/>
                        我們的炙烤焦糖鳳梨採用新鮮的鳳梨，經過炙烤後，散發出誘人的焦香與甜味，外脆內嫩，是完美的甜點搭配。
                        <br/><br/>
                        高山茶：<br/>
                        選用來自高山的優質茶葉，泡出清新的茶湯，香氣撲鼻，帶有淡淡的甘甜，完美平衡了甜點的濃郁風味，讓你享受每一口的美好時光。"),
(2, "地瓜涼菓佐高山茶糕", "/src/assets/images/dessert/tripInfo_Tw04.png", "地瓜涼菓, 高山茶糕, 凍頂烏龍茶","地瓜涼菓：<br/>
                        這款地瓜涼菓採用新鮮地瓜製作，口感滑順，甜而不膩，搭配天然的椰漿，清爽可口，是夏日消暑的最佳選擇。
                        <br/><br/>
                        高山茶糕：<br/>
                        高山茶糕融合了優質高山茶的清香，質地柔軟且富有彈性，每一口都散發著茶葉的獨特風味，讓你在甜點中感受到自然的滋味。
                        <br/><br/>
                        凍頂烏龍茶：<br/>
                        選用凍頂烏龍茶，泡出醇厚的茶湯，帶有淡雅的花香與清新的甘味，與各式甜點相得益彰，讓你在享受美味的同時，感受到茶的悠然魅力。"),
(3, "蒙布朗佐馬卡龍", "/src/assets/images/dessert/trip_Eur.png", "蒙布朗, 馬卡龍, 卡布奇諾","蒙布朗：<br />
                        這款蒙布朗甜點以細膩的栗子餡為主角，搭配香滑的奶油霜，外層包裹著輕盈的蛋糕，展現出豐富的層次感，每一口都充滿秋天的暖意。
                        <br /><br />
                        馬卡龍：<br />
                        我們的馬卡龍外脆內軟，選用新鮮食材製作，口味多樣，從經典的香草到濃郁的巧克力，無論是哪一種，都帶來絕妙的甜蜜享受。
                        <br /><br />
                        卡布奇諾：
                        這杯卡布奇諾由濃郁的咖啡和綿密的奶泡完美結合，散發著香醇的咖啡香氣，微微的苦味與奶香交融，為甜點時光增添一抹溫暖與愉悅。"),
(3, "草莓塔佐馬卡龍", "/src/assets/images/dessert/tripInfo_Eur04.png", "草莓塔, 馬卡龍, 精品拿鐵","草莓塔：<br />
                        這款草莓塔以新鮮草莓為主料，搭配細緻的酥皮與香滑的奶油餡，酸甜的滋味讓每一口都充滿春天的清新氣息，是甜點中的經典之作。
                        <br /><br />
                        馬卡龍：<br />
                        我們的馬卡龍色彩繽紛，外脆內軟，口味多樣，從經典的香草、鮮果到濃郁的巧克力，每一口都是甜蜜的驚喜，讓你欲罷不能。
                        <br /><br />
                        精品拿鐵：<br />
                        這杯精品拿鐵由優質咖啡豆精心萃取而成，香濃的咖啡與綿密的奶泡完美結合，微微的甜味與濃郁的香氣，為你的甜點時光增添無限魅力。");



DROP TABLE IF EXISTS `QAs`;
CREATE TABLE `QAs` (
    `QAID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `UserID` INT(11) NOT NULL,
    `Type` VARCHAR(40) NOT NULL,
    `Content` VARCHAR(500) NOT NULL,
    `Reply` VARCHAR(10) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES USERS (UserID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `QAs` (`UserID`, `Type`, `Content`, `Reply`) VALUES
(1, "訂單/取消", "我有個問題A", "N"),
(1, "付款/退款", "我有個問題B", "N"),
(1, "車廂/設備", "我有個問題C", "Y");

DROP TABLE IF EXISTS `TEMPLATES`;
CREATE TABLE `TEMPLATES` (
    `TemplateID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `DessertTypeID` INT(11) NOT NULL,
    `RouteID` INT(11) NOT NULL,
    `TemplateDescription` VARCHAR(500) DEFAULT NULL,
    `MenuFirst` INT(11) NOT NULL,
    `MenuSecond` INT(11) NOT NULL,
    FOREIGN KEY (MenuFirst) REFERENCES MEALS (MealID),
    FOREIGN KEY (MenuSecond) REFERENCES MEALS (MealID),
    FOREIGN KEY (DessertTypeID) REFERENCES DESSERTS (DessertTypeID),
    FOREIGN KEY (RouteID) REFERENCES ROUTES (RouteID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `TEMPLATES` (`DessertTypeID`, `RouteID`, `TemplateDescription`, `MenuFirst`, `MenuSecond`) VALUES
(1, 1, "台北到台中JP", 1, 2),
(1, 2, "台北至花蓮JP", 1, 2),
(2, 3, "台中至台南TW", 3, 4),
(2, 4, "台中至高雄TW", 3, 4),
(3, 5, "高雄至台中EU", 5, 6),
(3, 6, "高雄至花蓮EU", 5, 6);

DROP TABLE IF EXISTS `BOOKERDETAILS`;
CREATE TABLE `BOOKERDETAILS` (
    `BookerDetailID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `BookerName` VARCHAR(40) NOT NULL,
    `BookerPhone` VARCHAR(20) NOT NULL,
    `BookerMail` VARCHAR(100) NOT NULL,
    `CreditCard` VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `BOOKERDETAILS` (`BookerName`, `BookerPhone`, `BookerMail`, `CreditCard`) VALUES
("AAA", "0911111211", "xxxsx@gmail.com", "5533-9587-5214-5561"),
("AAA", "0911111211", "xxxsx@gmail.com", "5533-9587-5214-5561"),
("AAA", "0911111211", "xxxsx@gmail.com", "5533-9587-5214-5561");

DROP TABLE IF EXISTS `SCHEDULES`;
CREATE TABLE `SCHEDULES` (
    `ScheduleID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `TemplateID` INT(11) NOT NULL ,
    `DepartureDate` DATE NOT NULL,
    `DepartureTimeID` INT(11) NOT NULL,
    FOREIGN KEY (TemplateID) REFERENCES TEMPLATES (TemplateID),
    FOREIGN KEY (DepartureTimeID) REFERENCES DEPARTURETIMES (DepartureTimeID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `SCHEDULES` (`TemplateID`, `DepartureDate`, `DepartureTimeID`) VALUES
(1, "2024-10-10", 1),(1, "2024-10-10", 2),(1, "2025-11-14", 1),
(1, "2025-11-14", 2),(2, "2025-11-14", 1),(3, "2025-11-14", 1),
(4, "2025-11-14", 2),(5, "2025-11-14", 2),(6, "2025-11-14", 2),
(1, "2025-11-12", 2),(1, "2025-11-12", 1),(2, "2025-11-12", 1),
(1, "2025-11-12", 2),(2, "2025-11-12", 1),(3, "2025-11-13", 2),
(4, "2025-11-13", 2),(5, "2025-11-13", 2),(6, "2025-11-13", 2),
(4, "2025-11-13", 1),(3, "2025-11-13", 2);

DROP TABLE IF EXISTS `ORDERS`;
CREATE TABLE `ORDERS` (
    `OrderID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `UserID` INT(11) NOT NULL ,
    `BookerDetailID` INT(11) DEFAULT NULL,
    `ScheduleID` INT(11) NOT NULL,
    `OrderTime` DATETIME NOT NULL,
    `PaymentStatus` VARCHAR(20) NOT NULL,
    `SeatID` INT(11) NOT NULL ,
    `PeopleNum` INT(11) NOT NULL,
    `MealFirst` INT(11) DEFAULT NULL ,
    `MealSecond` INT(11) DEFAULT NULL ,
    `MealThird` INT(11) DEFAULT NULL ,
    `MealFourth` INT(11) DEFAULT NULL ,
    FOREIGN KEY (UserID) REFERENCES USERS (UserID),
    FOREIGN KEY (BookerDetailID) REFERENCES BOOKERDETAILS (BookerDetailID),
    FOREIGN KEY (ScheduleID) REFERENCES SCHEDULES (ScheduleID),
    FOREIGN KEY (SeatID) REFERENCES SEATS (SeatID),
    FOREIGN KEY (MealFirst) REFERENCES MEALS (MealID),
    FOREIGN KEY (MealSecond) REFERENCES MEALS (MealID),
    FOREIGN KEY (MealThird) REFERENCES MEALS (MealID),
    FOREIGN KEY (MealFourth) REFERENCES MEALS (MealID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `ORDERS` (`UserID`, `BookerDetailID`, `ScheduleID`, `OrderTime`, `PaymentStatus`, `SeatID`, `PeopleNum`, `MealFirst`, `MealSecond`, `MealThird`, `MealFourth`) VALUES
(1, 1, 1, "2024-09-05 20:01:00", "已付款", 8, 2, 2, 2, NULL ,NULL),
(3, 2, 2, "2024-09-06 20:01:00", "已付款", 18, 4, 1, 1, 2, 2),
(2, 3, 2, "2024-09-04 20:01:00", "已取消", 2, 1, 1, NULL, NULL, NULL);