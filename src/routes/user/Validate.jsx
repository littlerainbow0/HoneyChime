// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import RadiusCard from '../../components/user/card_radius.jsx';
import { useNavigate } from 'react-router-dom';
import '@arco-design/web-react/dist/css/arco.css';

const Validate = () => {
    const [message, setMessage] = useState('');
    const [cardBody, setCardBody] = useState({
        title: "忘記密碼",
        items: [
            {
                tag: "input",
                subtitle: "請輸入電子郵件",
                inputType: "text",
                value: "",
                placeholderWords: "honey@gmail.com",
                readOnly: false,
            },
        ],
    });

    // useEffect(() => {
    //     // 檢查用戶是否已經登入
    //     axios.get('http://localhost:8000/checklogin', { withCredentials: true })
    //         .then(response => {
    //             if (response.data.islogin) {
    //                 // 如果已經登入，跳轉到首頁
    //                 navigate("/contact");
    //             }
    //         })
    //         .catch(error => {
    //             console.error('檢查登入狀態時出錯:', error);
    //         });
    // }, [navigate]);

    const handleChange = (index, value) => {
        const updatedItems = cardBody.items.map((item, i) => {
            if (i === index) {
                return { ...item, value: value };
            }
            return item;
        });

        setCardBody(prevState => ({
            ...prevState,
            items: updatedItems,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = () => {
        const validateData = {
            UserMail: cardBody.items[0].value,
        };

        axios.post('http://localhost:8000/validate', validateData, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        })
            .then(response => {

                console.log('驗證成功:', response.data.Message);
                setMessage(response.data.message);
                alert(response.data.message + '即將跳轉');
                navigate("/verifyCode");
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
        <div className='main'>
            <div className="fullscreen-background"></div>
            <div className="content" id='card'>
                <RadiusCard
                    data={{
                        ...cardBody,
                        items: cardBody.items.map((item, index) => ({
                            ...item,
                            onChange: (value) => handleChange(index, value) // 傳遞 onChange 函數
                        })),
                        handleSubmit: handleSubmit // 傳遞 handleSubmit
                    }}
                />
            </div>
        </div>
    );
};

export default Validate;