import React, { Component } from 'react';
import '../../assets/css/header.css';
import Header from '../../components/admin/Header.jsx'
import '../../assets/css/reservation.css';
import FormApply from '../../components/admin/FormApply.jsx';
import OrderList from '../../components/admin/OrderList.jsx';
import UserInfo from '../../components/admin/UserInfo.jsx';
import axios from 'axios';
import 'flatpickr/dist/flatpickr.css';
import flatpickr from 'flatpickr';

class Reservation extends Component {
    state = {}
    render() {
        return (

            <div>
                <html>
                    <header className='reservation_hero'>
                    <Header />

                    </header>
                    <FormApply />
                    <OrderList />
                    <UserInfo />
                </html>

            </div>

        );
    }
}

export default Reservation;