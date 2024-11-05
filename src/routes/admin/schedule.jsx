// components/home.jsx
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Navbar from '../../components/admin/navbar_admin.jsx';
import { div } from 'framer-motion/m';
import api from '../../api.jsx';

import DataFetcherSchedule from '../../dataProcessing/admin/GET_schedule.jsx'
import DataFetcherMenu from '../../dataProcessing/admin/GET_template.jsx';

import TableDefault from '../../components/admin/table_default.jsx' // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import BtnLightBrown from '../../components/user/btn_lightbrown.jsx';
import Background from '../../components/admin/background_admin.jsx';
import Modal from '../../components/admin/modal.jsx'
import Calendar from '../../components/admin/calendar.jsx';
import { RiAddLargeFill } from "react-icons/ri";

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

const AdminSchedule = () => {

    const [showModal, setShowModal] = useState(false);

    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    const [getScheduleDataFromServer, setGetScheduleDataFromServer] = useState([]) // 儲存API資料用
    const [getMenuDataFromServer, setGetMenuDataFromServer] = useState([]) // 儲存API資料用
    const [selectedDate, setSelectedDate] = useState(""); // 選中的日期，用於顯示在 Input 框-------------

    const filteredData = selectedDate
        ? getScheduleDataFromServer.filter(item => item.DepartureDate === selectedDate)
        : getScheduleDataFromServer;


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

    const handleSubmit = (modalData) => {
        console.log('modal拿到的數據', modalData);
        if (modalData.scheduleId) {
            api.put(`/updateSchedule/${modalData.scheduleId}`, {
                TemplateID: modalData.templateId,
                DepartureDate: modalData.departureDate,
                DepartureTimeID: modalData.departureTimeId,
            })
                .then((response) => {
                    // 更新数据
                    setGetScheduleDataFromServer(prev =>
                        prev.map(item =>
                            item.scheduleId === modalData.scheduleId
                                ? { ...item, ...modalData.data }
                                : item
                        )
                    );
                    setShowModal(false);
                    alert("更新旅程成功!");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // 没有 scheduleId，需要新建
            api.post('/postSchedule', {
                TemplateID: modalData.templateId,
                DepartureDate: modalData.departureDate,
                DepartureTimeID: modalData.departureTimeId,
            })
                .then((response) => {
                    console.log('API 返回資料:', response.data);
                    setGetScheduleDataFromServer(prev => [
                        ...prev,
                        {
                            scheduleId: response.data.scheduleID,
                            departureDate: modalData.departureDate,
                            departureTime: modalData.departureTime,
                            stopStartName: modalData.stopStartName,
                            stopEndName: modalData.stopEndName,
                            dessertTitle: modalData.dessertTitle,
                            expired: "即將到來"
                        }
                    ]);
                    alert("新增旅程成功!");
                    setShowModal(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        if (getScheduleDataFromServer.length > 0) {
            console.log("有沒有正確存入資料", getScheduleDataFromServer);
        }
        setGetScheduleDataFromServer(getScheduleDataFromServer)
    }, [getScheduleDataFromServer]);

    const filteredDataMemo = useMemo(() => {
        return selectedDate
            ? getScheduleDataFromServer.filter(item => item.DepartureDate === selectedDate)
            : getScheduleDataFromServer;
    }, [getScheduleDataFromServer, selectedDate]);

    return (
        <div className="flex flex-row h-screen">
            <Navbar />
            <Background />
            <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'>
                    {/* <RouteName /> */}
                    <Calendar
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate} />
                    {/* <FilterCard data={filterCardName} /> */}
                    <hr className='mb-6' />
                    <div className='flex justify-between'>
                        <BtnLightBrown btnText={
                            <>
                                <RiAddLargeFill />新增旅程
                            </>
                        } onClick={clickShowModal} />
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
                        data1={dataByBtnFilter.length > 0 ? (dataByBtnFilter) :
                            (selectedDate ? (filteredDataMemo) : (getScheduleDataFromServer))}
                        data2={getMenuDataFromServer}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminSchedule;