import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import RadiusCard from '../../components/user/card_radius.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [message, setMessage] = useState('');
    const [cardBody, setCardBody] = useState({
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
        const loginData = {
            UserMail: cardBody.items[0].value,
            Password: cardBody.items[1].value,
        };

        axios.post('http://localhost:8000/login', loginData, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        })
            .then(response => {
                console.log('登入成功:', response.data);
                setMessage(response.data.message);
                alert(response.data.message);

                navigate("/");
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

    const handleLogOut = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:8000/logout', {}, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        }).then(response => {
            const updatedItems = cardBody.items.map(item => ({
                ...item,
                value: ''
            }));

            setCardBody(prevState => ({
                ...prevState,
                items: updatedItems,
            }));
            setMessage('登出成功！');
            alert("成功登出!");
        }).catch(error => {
            if (error.response) {
                setMessage(error.response.data.message);
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
                {/* <button onClick={handleLogOut}>登出</button> */}
            </div>
        </div>
    );
};

export default Login;