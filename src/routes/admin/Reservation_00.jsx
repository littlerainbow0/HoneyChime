import React, { useState, useEffect } from 'react';
import '../../assets/css/header.css';
import Header from '../../components/admin/Header.jsx'
import '../../assets/css/reservation.css';

const Reservation_00 = () => {
  const [passengerCount, setPassengerCount] = useState(2);
  const [dessertAOptions, setDessertAOptions] = useState([]);
  const [dessertBOptions, setDessertBOptions] = useState([]);
  const [carType, setCarType] = useState('f');
  const [seats, setSeats] = useState(['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']);
  const [carImage, setCarImage] = useState('/src/assets/images/plan/F.svg');

  useEffect(() => {
    updateDessertAOptions();
  }, [passengerCount]);

  const handlePassengerChange = (event) => {
    setPassengerCount(parseInt(event.target.value));
  };

  const handleCarTypeChange = (event) => {
    const type = event.target.value;
    setCarType(type);

    switch (type) {
      case 'e':
        setSeats(['e1', 'e2', 'e3']);
        setCarImage('/src/assets/images/plan/E.svg');
        break;
      case 'd':
        setSeats(['d1', 'd2', 'd3', 'd4', 'd5', 'd6']);
        setCarImage('/src/assets/images/plan/D.svg');
        break;
      case 'a':
        setSeats(['a1']);
        setCarImage('/src/assets/images/plan/A.svg');
        break;
      default:
        setSeats(['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']);
        setCarImage('/src/assets/images/plan/F.svg');
    }
  };

  const updateDessertAOptions = () => {
    const options = Array.from({ length: passengerCount + 1 }, (_, i) => i);
    setDessertAOptions(options);
    updateDessertBOptions(0); // Reset B options when A changes
  };

  const updateDessertBOptions = (dessertAValue) => {
    const maxDessertBValue = passengerCount - dessertAValue;
    const options = Array.from({ length: maxDessertBValue + 1 }, (_, i) => i);
    setDessertBOptions(options);
  };

  const handleDessertAChange = (event) => {
    const value = parseInt(event.target.value);
    updateDessertBOptions(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation logic here
  };

  return (
    <div className="reservation">
      <html>
      <header className="reservation_hero">
      <Header/>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="form_apply">
          <div>
            <label htmlFor="people">旅客人數：</label>
            <select id="people" value={passengerCount} onChange={handlePassengerChange}>
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="departure_date">出發日期：</label>
            <input type="date" id="departure_date" />
          </div>

          <div>
            <label htmlFor="departure_time">出發時間：</label>
            <select id="departure_time">
              <option value="14pm">14:00 - 17:00</option>
              <option value="15pm">15:00 - 18:00</option>
            </select>
          </div>

          <div>
            <label htmlFor="route">路線：</label>
            <select id="route">
              <option value="taipei_taichung">台北 ⭢ 台中</option>
              <option value="taipei_hualien">台北 ⭢ 花蓮</option>
              <option value="taichung_tainan">台中 ⭢ 台南</option>
              <option value="taichung_kaohsiung">台中 ⭢ 高雄</option>
              <option value="kaohsiung_taichung">高雄 ⭢ 台中</option>
              <option value="kaohsiung_hualien">高雄 ⭢ 花蓮</option>
            </select>
          </div>
        </div>

        <div className="form_seat">
          <div className="seat_title">
            <div>
              <label htmlFor="car_type">車廂類型：</label>
              <select id="car_type" value={carType} onChange={handleCarTypeChange}>
                <option value="f">景觀車廂Ｆ - 雙人座</option>
                <option value="e">景觀車廂Ｅ - 四人座</option>
                <option value="d">景觀車廂Ｄ - 雙人包廂</option>
                <option value="a">豪華景觀車廂Ａ - VIP 四人席</option>
              </select>
            </div>
            <div>
              <label htmlFor="seat">座位：</label>
              <select id="seat">
                <option value="0">請選擇座位</option>
                {seats.map(seat => (
                  <option key={seat} value={seat}>{seat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="seat_img">
            <p>車廂示意圖</p>
            <object id="car_image" data={carImage}></object>
          </div>
        </div>
      </form>

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
                <select id="dessert_jpA_qty" onChange={handleDessertAChange}>
                  {dessertAOptions.map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
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
                  {dessertBOptions.map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="order_detail">
          <p>您的預約 - 蜂鳴號</p>
          <p>
            <span>路線</span>
            <span>台北 ⭢ 台中</span>
          </p>
          <p>
            <span>出發時間</span>
            <span>Fri,20 Sep 2024 09:00</span>
          </p>
          <p>
            <span>抵達時間</span>
            <span>Fri,20 Sep 2024 13:00</span>
          </p>
          <p>
            <span>乘客人數</span>
            <span>{passengerCount} 人</span>
          </p>
          <p>
            <span>車廂</span>
            <span>{carType}</span>
          </p>
          <p>
            <span>座位</span>
            <span></span>
          </p>
          <p>
            <span>餐點</span>
            <span> 日式舒芙蕾套餐*1, <br />
              日式菓子套餐*1</span>
          </p>
          <p>
            <span>金額</span>
            <span>$4000</span>
          </p>
        </div>
      </div>

      <div className="user_info">
        <h6>訂位人資料</h6>
        <label htmlFor="Name">姓名</label>
        <br />
        <input type="text" id="Name" placeholder="請輸入姓名" minLength="2" required />
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

      <a href="#" className="top">
        Λ
        <br />
        Top
      </a>
      </html>
    </div>
  );
};

export default Reservation_00;
