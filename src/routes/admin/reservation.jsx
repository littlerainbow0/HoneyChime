import React, { Component } from 'react';
import '../../assets/css/header.css';
import Header from '../../components/admin/Header.jsx'
import '../../assets/css/reservation.css';
// import formApply from '../../components/admin/formApply.jsx';
// import OrderList from '../../components/admin/OrderList.jsx';
// import UserInfo from '../../components/admin/UserInfo.jsx';
// import axios from 'axios';
import 'flatpickr/dist/flatpickr.css';
// import flatpickr from 'flatpickr';

class Reservation extends Component {
    state = {}
    render() {
        return (

            <div>
                <header className='reservation_hero'>
                    <Header />
                </header>
                <htmlForm action="">
                    <div className="form_apply">

                        <div>
                            <label htmlFor="dessert_type">主題甜點：</label>
                            <select name="" id="dessert_type">
                                <option value="jp">日式甜點</option>
                                <option value="tw">台式甜點</option>
                                <option value="eu">歐式甜點</option>
                            </select>

                        </div>

                        <div>
                            <label htmlFor="people">旅客人數：</label>
                            <select name="" id="people">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="departure_date">出發日期：</label>
                            <input type="date" name="" id="departure_date" placeholder="選擇日期" />
                        </div>

                        <div>
                            <label htmlFor="departure_time">出發時間：</label>
                            <select name="" id="departure_time">
                                <option value="0">選擇出發時間</option>
                                <option value="13:00">13:00</option>
                                <option value="17:00">17:00</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="route_start">起站：</label>
                            <select name="" id="route_start">
                                <option value="0">請選擇站點</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="route_end">迄站：</label>
                            <select name="" id="route_end">
                                <option value="0">請選擇站點</option>

                            </select>
                        </div>
                    </div>

                    <div className="htmlForm_seat">
                        <div className="seat_title">
                            <div>
                                <label htmlFor="car_type">車廂類型：</label>
                                <select name="" id="car_type">

                                </select>
                            </div>
                            <div>
                                <label htmlFor="seat">座位：</label>
                                <select name="" id="seat">
                                    <option value="0">請選擇座位</option>

                                </select>
                            </div>
                        </div>
                        <div className="seat_img">
                            <p>車廂示意圖</p>
                            <object id="car_image" data="/src/assets/images/plan/F.svg">
                            </object>
                        </div>
                    </div>

                </htmlForm>

                <div className="order_list">
                    <div className="trip_detail">

                        <div>
                            <h6>
                                行程
                            </h6>
                            <div>
                                <img id="tripRouteImg" src="/src/assets/images/train_exterior/tripInfo_train01.png" alt="" />
                                <p id="tripRoute">台北⭢台中</p>
                            </div>
                        </div>

                        <div>
                            <h6>
                                選擇餐點
                            </h6>
                            <div>
                                <div>
                                    <img id="dessert_img1" src="/src/assets/images/dessert/dessert_newDessert.jpg" alt="" />
                                    <label htmlFor="dessert_jpA_qty">
                                        套餐名稱：<span id="dessert_title1">舒芙蕾佐時令水果</span>
                                        <br />
                                        套餐內容：<span id="dessert_content1">舒芙蕾, 時令水果, 日本綠茶</span>
                                    </label>
                                    <select name="" id="dessert_jpA_qty">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>

                                <div>
                                    <img id="dessert_img2" src="/src/assets/images/dessert/tripInfo_Jp02.png" alt="" />
                                    <label htmlFor="dessert_jpB_qty">
                                        套餐名稱：<span id="dessert_title2">日式和菓子佐綠茶羊羹</span>
                                        <br />
                                        套餐內容：<span id="dessert_content2">日式和菓子, 綠茶羊羹, 靜岡抹茶</span>
                                    </label>
                                    <select name="" id="dessert_jpB_qty">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order_detail">
                        <p>您的預約 - 蜂鳴號</p>
                        <p>
                            <span>路線</span>
                            <span id="order_route"></span>
                        </p>
                        <p>
                            <span>出發時間</span>
                            <span id="order_start_date"></span>
                        </p>
                        <p>
                            <span>抵達時間</span>
                            <span id="order_arrive_date"></span>
                        </p>
                        <p>
                            <span>乘客人數</span>
                            <span id="order_people">
                            </span>
                        </p>
                        <p>
                            <span>車廂</span>
                            <span id="order_car"></span>
                        </p>
                        <p>
                            <span>座位</span>
                            <span id="order_seat"></span>
                        </p>
                        <p>
                            <span>餐點</span>
                            <span>
                                <span id="order_dessert1"> </span>
                                <br />
                                <span id="order_dessert2"> </span>
                            </span>

                        </p>
                        <p>
                            <span>金額</span>
                            <span id="order_price">$0</span>
                        </p>
                    </div>

                </div>

                <div className="user_info">
                    <h6>訂位人資料</h6>
                    <label htmlFor="lastName">姓名</label>
                    <br />
                    <input type="text" id="Name" placeholder="請輸入姓名" minlength="2" value="dd" required />
                    <span className="error"></span>

                    <br />
                    <label htmlFor="phone">手機號碼</label>
                    <br />
                    <input type="tel" id="phone" pattern="09[0-9]{10}" placeholder="請輸入手機號碼" value="0911222333" required />
                    <span className="error"></span>
                    <br />
                    <label htmlFor="email">電子郵件</label>
                    <br />
                    <input type="email" id="email" placeholder="請輸入電子郵件" value="abc@gmail.com" required />
                    <span className="error"></span>

                    <br />
                    <label htmlFor="creditCard">信用卡號</label>
                    <br />
                    <input type="text" id="creditCard" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                        placeholder="xxxx-xxxx-xxxx-xxxx" value="1111-2222-3333-4444" required />
                        <span className="error"></span>

                        <button type="submit" onclick="userInfoCheck()" id="complete">下一步</button>
                </div>

                <a href="#" className="top">
                    Λ
                    <br />
                    Top
                </a>



            </div>

        );
    }
}

export default Reservation;