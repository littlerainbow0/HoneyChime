import React, { Component } from 'react';
import './signin.css';
import RadiusCard from '../../components/user/card_radius.jsx';
import { BsArrowDownCircleFill } from "react-icons/bs";
import axios from 'axios';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserMail: '',
            Password: '',
            confirmPassword: '',
            UserName: '',
            Sex: '',
            UserPhone: '',
            Birth: '',
            message: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(event.target);
        
    };

    handleSubmit = async (event) => {
        const { UserMail, Password, UserName, Sex, UserPhone, Birth } = this.state;
        console.log(UserMail);
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/signIn', {
                UserMail: UserMail,
                Password: Password,
                UserName: UserName,
                Sex: Sex,
                UserPhone: UserPhone,
                Birth: Birth
            });
            console.log(response.data);
            this.setState({ message: '註冊成功！' });
            // 清空表單或重定向
        } catch (error) {
            console.error('註冊失敗:', error.response.data);
            this.setState({ message: '註冊失敗，請檢查輸入' });
        }
    };

    render() {
        return (
            <div id="main">
                <form >
                    <RadiusCard
                        data={{
                            title: "註冊會員",
                            items: [
                                {
                                    tag: "input",
                                    subtitle: "電子信箱",
                                    inputType: "email",
                                    value: this.state.UserMail,
                                    placeholderWords: "honey@gmail.com",
                                    readOnly: false,
                                    name: "UserMail", // 新增 name 屬性
                                    // onChange: this.handleChange
                                },
                                {
                                    tag: "input",
                                    subtitle: "密碼",
                                    inputType: "password",
                                    value: this.state.Password,
                                    placeholderWords: "請輸入密碼",
                                    readOnly: false,
                                    name: "Password", // 新增 name 屬性
                                    onChange: this.handleChange
                                },
                                {
                                    tag: "input",
                                    subtitle: "確認密碼",
                                    inputType: "password",
                                    value: this.state.confirmPassword,
                                    placeholderWords: "請再次輸入密碼",
                                    readOnly: false,
                                    name: "confirmPassword", // 新增 name 屬性
                                    onChange: this.handleChange
                                },
                            ],
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
                        <BsArrowDownCircleFill />
                    </div>
                    <RadiusCard
                        data={{
                            title: "建立個人資訊",
                            items: [
                                {
                                    tag: "input",
                                    subtitle: "姓名",
                                    inputType: "text",
                                    value: this.state.UserName,
                                    placeholderWords: "蜂鳴號",
                                    readOnly: false,
                                    name: "UserName", // 新增 name 屬性
                                    onChange: this.handleChange
                                },
                                {
                                    tag: "radio",
                                    subtitle: "性別",
                                    options: [
                                        { label: "男", value: "M" },
                                        { label: "女", value: "F" }
                                    ],
                                    selectedValue: this.state.Sex,
                                    readOnly: false,
                                    onChange: (event) => this.setState({ Sex: event.target.value }) // 單選按鈕的改變
                                },
                                {
                                    tag: "input",
                                    subtitle: "手機電話",
                                    inputType: "tel",
                                    value: this.state.UserPhone,
                                    placeholderWords: "09123456789",
                                    readOnly: false,
                                    name: "UserPhone", // 新增 name 屬性
                                    onChange: this.handleChange
                                },
                                {
                                    tag: "input",
                                    subtitle: "生日",
                                    inputType: "date",
                                    value: this.state.Birth,
                                    placeholderWords: "",
                                    readOnly: false,
                                    name: "Birth", // 新增 name 屬性
                                    onChange: this.handleChange
                                },
                            ]
                        }}
                    />
                    <button onClick={this.handleSubmit}>註冊</button>
                </form>
                {this.state.message && <p>{this.state.message}</p>}
                <div className="full-background"></div>
            </div>
        );
    }
}

export default Signin;