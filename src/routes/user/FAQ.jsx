import React from 'react';
import Table1Col from '../../components/user/table_1Col.jsx';
import Header from '../../components/user/header.jsx';
import Footer from '../../components/user/footer.jsx'


const data = [
    {
        q: "列車有提供WI-FI嗎？",
        a: "每節車廂均有公用WI-FI，請開啟WI-FI查看網路清單，蜂鳴號車廂內的網路名稱為Honey Chime-A、Honey Chime-D、Honey Chime-E、HoneyChime-F，可依車廂編號進行連線，即可使用車廂內的網路。"
    },
    {
        q: "包廂有多大？",
        a: "D車廂的設計為雙人包廂，座位皆緊鄰窗戶，寬90公分、長200公分，約0.54坪。<br />A車廂為VIP車廂，為270∘環景車廂，三面開窗的設計讓乘客彷彿置身於景色之中，設計為最多容納四人的"
    },
    {
        q: "可以帶寵物嗎？",
        a: "目前蜂鳴號並沒有提供寵物友善空間，亦不能攜帶寵物。"
    },
    {
        q: "車廂內可以吸菸嗎？",
        a: "車廂內全面禁菸。"
    },
    {
        q: "要怎麼確認行程？",
        a: "會員可以在會員中心查看您的預約資訊。<br />如需要變更行程，登入會員後，在管理帳戶頁面點選「訂單和旅程」，可變更行程中的「發車時間」、「菜單」。<br />如需要變更出發日期、人數、車廂、座位等資訊，請重新預約您的行程。"
    },
    {
        q: "上車前需要身分驗證嗎？",
        a: "蜂鳴號邀請乘客上車前，會請乘客展示電子車票供剪票員以儀器查驗核對資訊，驗證時間只需花費數秒鐘。"
    }
];

const FAQ = () => {
    return (
        <div>
            <header className="flex-auto font-bold w-full text-center 
                  overflow-hidden text-clip min-w-[170px] 
                  absolute top-0 left-0 h-640"
                style={{
                    background: ` url("/src/assets/images/train_exterior/tripInfo_GrassLg01.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <Header />
            </header>
            <div className="flex py-20 justify-center mt-[600px]">
                <Table1Col data={data} />
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;