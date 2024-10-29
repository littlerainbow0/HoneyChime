import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import RadiusCard from '../../components/user/card_radius.jsx';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [cardBody, setCardBody] = useState({
        title: "重設密碼",
        items: [
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

    const navigate = useNavigate();

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


    const handleSubmit = () => {
        const passwordData = {
            Password: cardBody.items[0].value,
        };

        if (passwordData.Password !== cardBody.items[1].value) {
            alert("確認密碼與輸入密碼不符!");
            return;
        }

        axios.post('http://localhost:8000/updatePassword', passwordData, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        })
            .then(response => {
                console.log('重設密碼成功:', response.data);
                alert(response.data.message+ '，返回登入頁面');
          
                navigate("/login");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('發生錯誤，請稍後再試。');
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

export default ResetPassword;