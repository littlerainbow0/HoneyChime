import React, { Component } from 'react';

class OrderList extends Component {
    render() {
        return (
            <div className="order_list">
                <div className="trip_detail">
                    <div>
                        <h6>行程</h6>
                        <div>
                            <img src="/src/assets/images/train_exterior/tripInfo_train01.png" alt="" />
                            <p>台北⭢台中</p>
                        </div>
                    </div>

                    <div>
                        <h6>選擇餐點</h6>
                        <div>
                            <div>
                                <img src="/src/assets/images/dessert/trip_Jp.png" alt="" />
                                <label htmlFor="dessert_jpA_qty">
                                    套餐名稱：舒芙蕾套餐
                                    <br />
                                    套餐內容：舒芙蕾, 抹茶
                                </label>
                                <select id="dessert_jpA_qty">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <div>
                                <img src="/src/assets/images/dessert/tripInfo_Jp02.png" alt="" />
                                <label htmlFor="dessert_jpB_qty">
                                    套餐名稱：日式和菓子
                                    <br />
                                    套餐內容：日式和菓子, 煎茶
                                </label>
                                <select id="dessert_jpB_qty">
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
                        <span id="order_people"></span>
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
                        <span id="order_dessert">日式舒芙蕾套餐*1, <br />日式菓子套餐*1</span>
                    </p>
                    <p>
                        <span>金額</span>
                        <span id="order_price">$4000</span>
                    </p>
                </div>
            </div>
        );
    }
}
export default OrderList;