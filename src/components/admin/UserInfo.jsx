import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div className="user_info">
                <h6>訂位人資料</h6>
                <label htmlFor="Name">姓名</label>
                <br />
                <input type="text" id="Name" placeholder="請輸入姓名" minlength="2" required />
                <span className="error"></span>
                <br />
                <label htmlFor="phone">手機號碼</label>
                <br />
                <input type="tel" id="phone" pattern="09[0-9]{10}" placeholder="請輸入手機號碼" required />
                <span className="error"></span>
                <br />
                <label htmlFor="email">電子郵件</label>
                <br />
                <input type="email" id="email" placeholder="請輸入電子郵件" required />
                <span className="error"></span>
                <br />
                <label htmlFor="creditCard">信用卡號</label>
                <br />
                <input type="text" id="creditCard" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                <span className="error"></span>
                <button type="submit" id="complete">下一步</button>
            </div>
        );
    }
}
    export default UserInfo;