import React, { useEffect, useState } from 'react';
import './signin.css';
import RadiusCard from '../../components/user/card_radius.jsx';
import axios from 'axios';
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [message, setMessage] = useState('');
    const [cardBodyUser, setCardBodyUser] = useState({
        title: "註冊會員",
        items: [
            {
                tag: "input",
                subtitle: "電子信箱",
                inputType: "email",
                value: "",
                placeholderWords: "honey@gmail.com",
                readOnly: false
            },
            {
                tag: "input",
                subtitle: "密碼",
                inputType: "password",
                value: "",
                placeholderWords: "請輸入密碼",
                readOnly: false
            },
            {
                tag: "input",
                subtitle: "確認密碼",
                inputType: "password",
                value: "",
                placeholderWords: "請再次輸入密碼",
                readOnly: false
            },
        ],
    });
    const [cardBodyInfo, setCardBodyInfo] = useState({
        title: "建立個人資訊",
        items: [
            {
                tag: "input",
                subtitle: "姓名",
                inputType: "text",
                value: "",
                placeholderWords: "蜂鳴號",
                readOnly: false
            },
            {
                tag: "radio",
                subtitle: "性別",
                options: [
                    { label: "M", value: "M" },
                    { label: "F", value: "F" }
                ],
                value: "F",
                readOnly: false
            },
            {
                tag: "input",
                subtitle: "手機電話",
                inputType: "tel",
                value: "",
                placeholderWords: "09123456789",
                readOnly: false
            },
            {
                tag: "input",
                subtitle: "生日",
                inputType: "date",
                value: "",
                placeholderWords: "",
                readOnly: false
            },
        ]
    });

    const navigate = useNavigate();

    useEffect(() => {
        // 檢查用戶是否已經登入
        axios.get('http://localhost:8000/checklogin', { withCredentials: true })
            .then(response => {
                if (response.data.islogin) {
                    // 如果已經登入，跳轉到首頁
                    navigate("/contact");
                }
            })
            .catch(error => {
                console.error('檢查登入狀態時出錯:', error);
            });
    }, [navigate]);


    const handleChange = (source, index, value) => {
        if (source === "user") {
            const updatedItems = cardBodyUser.items.map((item, i) => {
                if (i === index) {
                    return { ...item, value: value };
                }
                return item;
            });
            setCardBodyUser(prevState => ({ ...prevState, items: updatedItems }));
        } else if (source === "info") {
            const updatedItems = cardBodyInfo.items.map((item, i) => {
                if (i === index) {
                    return { ...item, value: value };
                }
                return item;
            });
            setCardBodyInfo(prevState => ({ ...prevState, items: updatedItems }));
        }
    };

    const handleSubmit = () => {
        const signinData = {
            UserMail: cardBodyUser.items[0].value,
            Password: cardBodyUser.items[1].value,
            UserName: cardBodyInfo.items[0].value,
            Sex: cardBodyInfo.items[1].value,
            UserPhone: cardBodyInfo.items[2].value,
            Birth: cardBodyInfo.items[3].value
        };

        if (signinData.Password !== cardBodyUser.items[2].value) {
            alert("確認密碼與輸入密碼不符!");
            return;
        }

        axios.post('http://localhost:8000/signin', signinData, { withCredentials: true })
            .then(response => {
                setMessage(response.data.message);
                alert(response.data.message + '，即將跳轉至登入頁面');
                navigate("/login"); // 註冊完成後跳轉至登入頁面
            })
            .catch(error => {
                if (error.response) {
                    setMessage(error.response.data.message);
                    alert(error.response.data.message);
                } else {
                    setMessage('發生錯誤，請稍後再試。');
                }
            });
    };

    return (
        <div id="main">
            <RadiusCard data={
                {
                    ...cardBodyUser,
                    items: cardBodyUser.items.map(
                        (item, index) => ({ ...item, onChange: (value) => handleChange("user", index, value) })
                    )
                }
            } />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
                <BsArrowDownCircleFill />
            </div>
            <RadiusCard data={
                {
                    ...cardBodyInfo,
                    items: cardBodyInfo.items.map(
                        (item, index) => ({ ...item, onChange: (value) => handleChange("info", index, value) })
                    ),
                    handleSubmit: handleSubmit
                }
            } />
            <div className="full-background"></div>
        </div>
    );
};

export default SignIn;