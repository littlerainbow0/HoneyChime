// components/home.jsx
import React from 'react';
import './signin.css';

// */ Componenets
import RadiusCard from '../../components/user/card_radius.jsx'
// -- Componenets /*

// */ icons
import { BsArrowDownCircleFill } from "react-icons/bs";
// -- icons /*

// */ 假資料
// const columns = ["userId", "name", "email", "phone", "birth", "county", "dist", "address"];
// const data = [
//     {
//         userId: 1,
//         name: "林少晴",
//         email: "onoyi17@gmail.com",
//         phone: "0912345678",
//         birth: "1997/02/22",
//         county: "台中市",
//         dist: "南屯區",
//         address: "公益路二段51號18樓"
//     },
// ];
var cardBodyUser = {
    title: "註冊會員",
    items: [
        {
            tag: "input",
            subtitle: "電子信箱",
            inputType: "email",
            value: "",
            placeholderWords: "honey@gmail.com",
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "密碼",
            inputType: "password",
            value: "",
            placeholderWords: "請輸入密碼",
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "確認密碼",
            inputType: "password",
            value: "",
            placeholderWords: "請再次輸入密碼",
            readOnly: false,
        },
    ],
}
var cardBodyInfo = {
    title: "建立個人資訊",
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
            tag: "radio",
            subtitle: "性別",
            options: [
                { label: "男", value: "男" },
                { label: "女", value: "女" }
            ],
            selectedValue: "女", // 預設選中的值
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "手機電話",
            inputType: "tel",
            value: "",
            placeholderWords: "09123456789",
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "生日",
            inputType: "date",
            value: "",
            placeholderWords: "",
            readOnly: false,
        },
    ]
}
// -- 假資料 /*

const signin = () => (
    <div id="main">
        <RadiusCard data={cardBodyUser} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
            <BsArrowDownCircleFill />
        </div>
        <RadiusCard data={cardBodyInfo} />
        <div className="full-background"></div>
    </div>
)

export default signin;