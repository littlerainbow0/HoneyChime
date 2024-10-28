// components/home.jsx
import React from 'react';
import './login.css';
import { RadioGroup, Radio } from "@nextui-org/react";

// */ Componenets
import RadiusCard from '../../components/user/card_radius.jsx'
// -- Componenets /*

const columns = [
    "userId",
    "email",
    "passwords"
];
const data = [
    {
        userId: 1,
        email: "onoyi17@gmail.com",
        passwords: "00000000"
    },
];

var cardBody = {
    title: "會員登入",
    items: [
        {
            tag: "input",
            subtitle: "帳號",
            inputType: "text",
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

const login = () => {
    return (
        <div className='main'>
            <div className="fullscreen-background"></div>
            <div className="content" id='card'>
                <RadiusCard data={cardBody} />
            </div>
        </div>
    )
}

export default login;