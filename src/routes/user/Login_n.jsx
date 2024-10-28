// components/home.jsx
import React, { Component } from 'react';
import './login.css';

// */ Componenets

// -- Componenets /*
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserMail: '',
            Password: '',
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

        try {
            const response = await axios.post('http://localhost:8000/logout', {}, {
                withCredentials: true // 如果需要攜帶 session前後端都要加
            });
            this.setState({ message: '登出成功！', UserMail: '', Password: '' });
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
                <div className="content" id='card'>
                    <div>
                        <form >
                            <label htmlFor="UserMail">帳號</label>
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

export default Login;