// components/home.jsx
import React, { useState } from 'react'; // 引入 useState
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import Modal from '../../components/admin/modal.jsx'
import { Button } from '@nextui-org/react';
import BtnBrown from '../../components/user/btn_brown.jsx'
import DataFetcherOrder from '../../dataProcessing/admin/GET_order.jsx';
import Background from '../../components/admin/background_admin.jsx'
import Calendar from '../../components/admin/calendar.jsx';

const filterCardName = [
    {
        dessertType: "歐式",
        imgSrc: "/src/assets/images/dessert/tripInfo_Eur04.png",
    },
    {
        dessertType: "日式",
        imgSrc: "/src/assets/images/dessert/dessert_dessert09.png",
    },
    {
        dessertType: "台式",
        imgSrc: "/src/assets/images/dessert/trip_Tw.png",
    },
]

const columns = [
    "OrderID",
    "DepartureDate",
    "DepartureTime",
    "StopStartName",
    "StopEndName",
    "DessertTitle",
    "PeopleNum",
    "SeatName",
    "Price",
    "OrderTime",
    "PaymentStatus",
]
const columnNames = {
    OrderID: "訂單ID",
    DepartureDate: "發車日期",
    DepartureTime: "發車時間",
    StopStartName: "起點站",
    StopEndName: "終點站",
    DessertTitle: "甜點風格",
    PeopleNum: "人數",
    SeatName: "桌號",
    Price: "總金額",
    OrderTime: "下單時間",
    PaymentStatus: "訂單狀態",
}

const detailColumns = [

    "MealFirstName",
    "MealSecondName",
    "MealThirdName",
    "MealFourthName",
];
const detailColumnNames =
{
    MealFirstName: "本桌餐點1",
    MealSecondName: "本桌餐點2",
    MealThirdName: "本桌餐點3",
    MealFourthName: "本桌餐點4",
};

const AdminTemplate = () => {
    const [showModal, setShowModal] = useState(false);

    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    const [getOrderDataFromServer, setGetOrderDataFromServer] = useState([]) // 儲存API資料用

    const [selectedDate, setSelectedDate] = useState(""); // 選中的日期，用於顯示在 Input 框-------------
    const filteredData = selectedDate
        ? getOrderDataFromServer.filter(item => item.DepartureDate === selectedDate)
        : getOrderDataFromServer;

    return (
        <div className="flex flex-row">
            <Navbar />
            <Background />
            <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'>
                    <RouteName />
                    <Calendar
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate} />
                    <hr className='mb-6' />

                    {/* <FilterCard data={filterCardName} /> */}
                    <div className='justify-between'>
                        {/* <BtnBrown btnText="新建一筆模板" onClick={clickShowModal} />
                        {showModal && <Modal onClose={clickShowModal} />} */}
                    </div>
                    <DataFetcherOrder setDataFromServer={setGetOrderDataFromServer} />
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={filteredData}
                        data2={filteredData}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminTemplate;