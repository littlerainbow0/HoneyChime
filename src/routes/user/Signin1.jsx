// components/home.jsx
import React, { Component } from 'react';
import './signin.css';

import axios from 'axios';

class Signin1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            UserPhone: '',
            UserMail: '',
            Password: '',
            Birth: '',
            Sex: '',
            message: ''
        };
    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = async (e) => {
        e.preventDefault();
        const { UserMail, Password } = this.state;

        try {
            const response = await axios.post('http://localhost:8000/login', {
                UserMail: UserMail,
                Password: Password
            }, {
                withCredentials: true // 如果需要攜帶 session前後端都要加
            });
            this.setState({ message: '登入成功！' });
        } catch (error) {
            if (error.response) {
                // 後端返回的錯誤訊息
                this.setState({ message: error.response.data.message });
            } else {
                // 其他錯誤
                this.setState({ message: '發生錯誤，請稍後再試。' });
            }
        }
    };

    handleLogOut = async (e) => {
        e.preventDefault();
        const { UserMail, Password } = this.state;

        try {
            const response = await axios.post('http://localhost:8000/logout', {}, {
                withCredentials: true // 如果需要攜帶 session前後端都要加
            });
            this.setState({ message: '登出成功！', userMail: '', password: '' });
        } catch (error) {
            if (error.response) {
                // 後端返回的錯誤訊息
                this.setState({ message: error.response.data.message });
            } else {
                // 其他錯誤
                this.setState({ message: '發生錯誤，請稍後再試。' });
            }
        }
    };


    render() {

        return (
            <div className='main'>
                <div className="fullscreen-background"></div>
                <div>
                <div className="content" id='card'>
                    <form >
                        <label htmlFor="UserMail">電子信箱</label>
                        <input
                            type="text"
                            name="UserMail"
                            placeholder="honey@gmail.com"
                            value={this.state.UserMail}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="Passsword">密碼</label>
                        <input
                            type="password"
                            name="Password"
                            placeholder="請輸入密碼"
                            value={this.state.Password}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleLogin}>登入</button>
                    </form>
                    <button onClick={this.handleLogOut} >登出</button>
                    {this.state.message && <p>{this.state.message}</p>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
            
                </div>
                <div className="content2" id='card'>
                    <form >
                        <label htmlFor="UserMail">電子信箱</label>
                        <input
                            type="text"
                            name="UserMail"
                            placeholder="honey@gmail.com"
                            value={this.state.UserMail}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="Passsword">密碼</label>
                        <input
                            type="password"
                            name="Password"
                            placeholder="請輸入密碼"
                            value={this.state.Password}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleLogin}>登入</button>
                    </form>
                    <button onClick={this.handleLogOut} >登出</button>
                    {this.state.message && <p>{this.state.message}</p>}
                </div>
                </div>
            </div>
        )
    }
}

export default Signin1;


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

