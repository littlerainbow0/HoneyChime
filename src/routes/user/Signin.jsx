// components/home.jsx
import React, { Component } from 'react';
import './signin.css';

// */ Components
import RadiusCard from '../../components/user/card_radius.jsx';
// -- Components /*
import axios from 'axios';

// */ icons
import { BsArrowDownCircleFill } from "react-icons/bs";
// -- icons /*

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            cardBodyUser: {
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
            },
            cardBodyInfo: {
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
                            { label: "M", value: "M" },
                            { label: "F", value: "F" }
                        ],
                        value: "F", // 預設選中的值
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
        };
    }

    handleChange = (source, index, value) => {
        console.log(`Source: ${source}, Index: ${index}, New Value: ${value}`);

        if (source === "user") {
            const updatedItems = this.state.cardBodyUser.items.map((item, i) => {
                if (i === index) {
                    return { ...item, value: value };
                }
                return item;
            });

            this.setState(prevState => ({
                cardBodyUser: {
                    ...prevState.cardBodyUser,
                    items: updatedItems,
                }
            }));
        } else if (source === "info") {
            const updatedItems = this.state.cardBodyInfo.items.map((item, i) => {
                if (i === index) {
                    return { ...item, value: value };
                }
                return item;
            });

            this.setState(prevState => ({
                cardBodyInfo: {
                    ...prevState.cardBodyInfo,
                    items: updatedItems,
                }
            }));
        }
    };
    handleSubmit = () => {

        const { items: userItems } = this.state.cardBodyUser;
        const { items: infoItems } = this.state.cardBodyInfo;

        const signinData = {
            UserMail: userItems[0].value,
            Password: userItems[1].value,
            UserName: infoItems[0].value,
            Sex: infoItems[1].value,
            UserPhone: infoItems[2].value,
            Birth: infoItems[3].value
        };
        const PasswordConfirm = userItems[2].value;

        // console.log(PasswordConfirm);
        console.log(signinData.Sex);


        axios.post('http://localhost:8000/signin', signinData, {
            withCredentials: true // 如果需要攜帶 session前後端都要加
        }
        ).then(response => {
            console.log('註冊成功:', response.data);
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

    render() {
        const { cardBodyUser, cardBodyInfo } = this.state;

        return (
            <div id="main">
                {/* <RadiusCard data={cardBodyUser} /> */}
                <RadiusCard
                    data={{
                        ...cardBodyUser,
                        items: cardBodyUser.items.map((item, index) => ({
                            ...item,
                            onChange: (value) => this.handleChange("user", index, value) // 傳遞 onChange 函數
                        })),
                    }}
                />


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
                    <BsArrowDownCircleFill />
                </div>

                <RadiusCard
                    data={{
                        ...cardBodyInfo,
                        items: cardBodyInfo.items.map((item, index) => ({
                            ...item,
                            onChange: (value) => this.handleChange("info", index, value) // 傳遞 onChange 函數
                        })),
                        handleSubmit: this.handleSubmit // 傳遞 handleSubmit
                    }}
                />
                {this.state.message && <p>{this.state.message}</p>}

                <div className="full-background"></div>
            </div>
        );
    }
}

export default SignIn;