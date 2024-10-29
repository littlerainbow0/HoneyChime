import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import RadiusCard from '../../components/user/card_radius.jsx';
import { useNavigate } from 'react-router-dom';
import '@arco-design/web-react/dist/css/arco.css';
import { VerificationCode, Message } from '@arco-design/web-react';

const VerifyCode = () => {
    const [message, setMessage] = useState('');
    const [cardBody, setCardBody] = useState({
        title: "輸入驗證碼",
        items: [
        ],
    });

    const navigate = useNavigate();


    const handleSubmit = (result) => {
    
        const verifyCode = {
            inputCode: result
        };

        axios.post('http://localhost:8000/verifyCode', verifyCode, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        })
            .then(response => {
                console.log('驗證成功:', response.data.message);
                alert(response.data.message);
                navigate('/resetPassword');
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
                    }}
                />
                <VerificationCode
                    style={{ width: 100, paddingTop: 60 }}
                    onFinish={v => {
                        handleSubmit(v)
                    }}
                />

            </div>
        </div>
    );
};

export default VerifyCode;