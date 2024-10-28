// components/home.jsx
import React, { Component } from 'react';
import './login.css';
import { RadioGroup, Radio } from "@nextui-org/react";
import axios from 'axios';

// */ Components
import RadiusCard from '../../components/user/card_radius.jsx'
// -- Components /*

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardBody: {
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
            },
            userData: null,
            message: ''
        };
    }

    handleChange = (index, value) => {
        // console.log(`Index: ${index}, New Value: ${value}`);
        const updatedItems = this.state.cardBody.items.map((item, i) => {
            if (i === index) {
                return { ...item, value: value };
            }
            return item;
        });

        this.setState(prevState => ({
            cardBody: {
                ...prevState.cardBody,
                items: updatedItems,
            }
        }));

    };

    handleSubmit = () => {

        const { items } = this.state.cardBody;
        const loginData = {
            UserMail: items[0].value,
            Password: items[1].value,
        };

        axios.post('http://localhost:8000/login', loginData, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        }
        ).then(response => {
            console.log('登入成功:', response.data);
            this.setState({ message: response.data.message });
        })
            .catch(error => {
                if (error.response) {
                    // 後端返回的錯誤訊息
                    this.setState({ message: error.response.data.message });
                } else {
                    // 其他錯誤
                    this.setState({ message: '發生錯誤，請稍後再試。' });
                }
            });
    };

    handleLogOut = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:8000/logout', {}, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        }).then(response => {

            const updatedItems = this.state.cardBody.items.map((item, i) => {

                return { ...item, value: '' };
            });

            this.setState(prevState => ({
                message: '登出成功！',
                cardBody: {
                    ...prevState.cardBody,
                    items: updatedItems,
                }
            }));


        }).catch(error => {
            if (error.response) {
                // 後端返回的錯誤訊息
                this.setState({ message: error.response.data.message });
            } else {
                // 其他錯誤
                this.setState({ message: '發生錯誤，請稍後再試。' });
            }
        });
    };

    render() {
        const { cardBody } = this.state;
        // console.log(cardBody);

        return (
            <div className='main'>
                <div className="fullscreen-background"></div>
                <div className="content" id='card'>
                    <RadiusCard
                        data={{
                            ...cardBody,
                            items: cardBody.items.map((item, index) => ({
                                ...item,
                                onChange: (value) => this.handleChange(index, value) // 傳遞 onChange 函數
                            })),
                            handleSubmit: this.handleSubmit // 傳遞 handleSubmit
                        }}
                    />
                    <button onClick={this.handleLogOut} >登出</button>
                    {this.state.message && <p>{this.state.message}</p>}

                </div>
            </div>
        );
    }
}

export default Login;