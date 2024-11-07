import React from 'react';
import './contact.css'

// */ Componenets
import RadiusCard from '../../components/user/card_radius.jsx'
import BtnContact from '../../components/user/card_contact.jsx'
import Header from '../../components/user/header.jsx';
import bgImage from '../../assets/images/landscape/landscape_landscape03.png';
import Footer from '../../components/user/footer.jsx'
// -- Componenets /*

const columns = ["userId", "type", "content", "time", "reply"];
const data = [
  {
    userId: 1,
    type: "訂單/取消",
    // 訂單/取消, 付款/退款, 車廂/設備, 旅程相關, 菜單成分或內容
    content: "我有個問題",
    time: "2024/10/10",
    reply: "Y"
    // Y, N
  }
];
// */ 假資料
var cardBody = {
  title: "郵件聯繫",
  items: [
    {
      tag: "input",
      subtitle: "姓名",
      inputType: "text",
      value: "",
      placeholderWords: "蜂鳴號",
      readOnly: false,
    },
    {
      tag: "input",
      subtitle: "e-mail",
      inputType: "text",
      value: "",
      placeholderWords: "honey@gmail.com",
      readOnly: false,
    },
    {
      tag: "select",
      subtitle: "問題分類",
      options: ["訂單/取消", "付款/退款", "車廂/設備", "旅程相關", "菜單成分或內容"],
      placeholderWords: "",
      readOnly: false,
    },
    {
      tag: "input",
      subtitle: "問題主旨",
      inputType: "text",
      value: "",
      placeholderWords: "請輸入主旨",
      readOnly: false,
    },
    {
      tag: "input",
      subtitle: "問題描述",
      inputType: "text",
      value: "",
      placeholderWords: "請概述您的問題",
      readOnly: false,
    },
  ],
}
// -- 假資料 /*

const Contact = () => {
  return (
    <div>
      <header className="flex-auto font-bold w-full text-center 
                  overflow-hidden text-clip min-w-[170px] 
                  absolute top-0 left-0 h-640"
        style={{
          background: ` url("/src/assets/images/train_exterior/tripInfo_SeaSm01.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Header />
      </header>
      <div className="flex flex-row py-20 justify-center mt-[600px]">
        <RadiusCard data={cardBody} id="" />
        <BtnContact />
      </div>
      <Footer />
    </div>
  )
}

export default Contact;