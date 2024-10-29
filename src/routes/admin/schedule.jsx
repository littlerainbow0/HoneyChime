// components/home.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx' // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import { div } from 'framer-motion/m';

import DataFetcherSchedule from '../../dataProcessing/admin/GET_schedule.jsx'
import DataFetcherMenu from '../../dataProcessing/admin/GET_template.jsx';

import BtnLightBrown from '../../components/user/btn_lightbrown.jsx';
import Background from '../../components/admin/background_admin.jsx';
import Modal from '../../components/admin/modal.jsx'

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@nextui-org/react";

// */ icon
import { MdFilterList } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";
// -- icon /*

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
    "ScheduleID",
    "DepartureDate",
    "DepartureTime",
    "StopStartName",
    "StopEndName",
    "DessertTitle",
    "Expired"];
const columnNames = {
    ScheduleID: "行程ID",
    StopStartName: "起點站",
    StopEndName: "終點站",
    DepartureDate: "出發日期",
    DepartureTime: "出發時間",
    DessertTitle: "甜點風格",
    Expired: "狀態",
};

const detailColumns = [
    "DessertTitle",
    "MenuFirstName",
    "MenuSecondName",
];
const detailColumnNames =
{
    DessertTitle: "甜點風格",
    MenuFirstName: "供餐1",
    MenuSecondName: "供餐2",
};

const handleSubmit = (modalData) => {
    console.log('modal拿到的數據', modalData);

    // let modalDataToTemplate

};

const AdminSchedule = () => {

    const [showModal, setShowModal] = useState(false);

    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    const [getScheduleDataFromServer, setGetScheduleDataFromServer] = useState([]) // 儲存API資料用
    const [getMenuDataFromServer, setGetMenuDataFromServer] = useState([]) // 儲存API資料用

    const [dataByBtnFilter, setDataByBtnFilter] = useState([]) // data BTN篩選器
    const [isDataByBtnFilter, setIsDataByBtnFilter] = useState(false) // data BTN篩選器

    const btnFilterClick = () => {
        if (isDataByBtnFilter) {
            setDataByBtnFilter([])
        } else {
            const filteredData = getScheduleDataFromServer.filter(data => data.Expired === "即將到來");
            setDataByBtnFilter(filteredData); // 確保這個函數接收過濾後的數據
        }
        setIsDataByBtnFilter(!isDataByBtnFilter);
    };

    return (
        <div className="flex flex-row h-screen">
            <Navbar />
            <Background />
            <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'>
                    <RouteName />
                    <FilterCard data={filterCardName} />
                    <hr className='my-12 mb-6' />
                    <div className='flex justify-between'>
                        <BtnLightBrown btnText="新建一筆模板" onClick={clickShowModal} />
                        {showModal && <Modal onClose={clickShowModal}
                        handleSubmit={handleSubmit} />} 
                        <BtnLightBrown
                            btnText={isDataByBtnFilter ?
                                (<><MdFilterListOff />取消篩選</>) :
                                (<><MdFilterList />狀態篩選</>)}
                            onClick={btnFilterClick}
                        />
                    </div>
                    <DataFetcherSchedule setDataFromServer={setGetScheduleDataFromServer} />
                    <DataFetcherMenu setDataFromServer={setGetMenuDataFromServer} />
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={dataByBtnFilter.length > 0 ? dataByBtnFilter : getScheduleDataFromServer}
                        data2={getMenuDataFromServer}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminSchedule;