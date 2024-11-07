// components/home.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
    "Index",
    "DepartureDate",
    "DepartureTime",
    "StopStartName",
    "StopEndName",
    "DessertTitle",
    "Expired"];
const columnNames = {
    Index: "排序",
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

    const [loading, setLoading] = useState(false); // 用來控制請求過程中防止重複請求

    const [showModal, setShowModal] = useState(false);

    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    const [getScheduleDataFromServer, setGetScheduleDataFromServer] = useState([]) // 儲存API資料用
    const [getMenuDataFromServer, setGetMenuDataFromServer] = useState([]) // 儲存API資料用
    const [dataTrigger, setDataTrigger] = useState([])

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
        setDataTrigger(prev => !prev)
        console.log('modal拿到的數據', modalData);

        // 檢查欄位填寫狀況
        if (!modalData.routeId || !modalData.dessertTypeId || !modalData.departureDate || !modalData.departureTimeId) {
            alert("請填寫所有必填欄位！");
            return;  // 不繼續執行後面的程式碼
        }

        // 檢查重複行程
        const isDuplicate = getScheduleDataFromServer.some(item => {
            if (modalData.templateId) {
                return (
                    String(item.DepartureDate) === String(modalData.departureDate) &&
                    String(item.DepartureTime) === String(modalData.departureTime)
                );
            } else {
                return (
                    (String(item.RouteID) === String(modalData.routeId)
                        && String(item.DessertTypeID) === String(modalData.dessertTypeId))
                    ||
                    (String(item.DepartureDate) === String(modalData.departureDate) &&
                        String(item.DepartureTime) === String(modalData.departureTime))
                );
            }
        });
        console.log("檢查重複", isDuplicate);

        if (isDuplicate) {
            alert("該模板已經存在！無法建立新的旅程，請選擇同一模板再建立旅程");
            return; // 如果資料重複，不執行 post 或 put 請求
        }
        else {
            if (!modalData.templateId) {
                // 第一次 post 請求，拿到 ID
                console.log('modal拿到的數據', modalData);
                api.post('/postTemplate', {
                    DessertTypeID: modalData.relatedDetailItem.dessertTypeId,
                    RouteID: modalData.routeId,
                    MenuFirst: modalData.relatedDetailItem.menuFirstID,
                    MenuSecond: modalData.relatedDetailItem.menuSecondID,
                    TemplateDescription: `${modalData.StopStartName} 到 ${modalData.StopEndName}，${modalData.dessertTitle}`,
                })
                    .then((response) => {
                        console.log('API 返回資料:', response.data.templateID);

                        // 使用返回的 scheduleID，繼續發送第二個 post 請求
                        api.post('/postSchedule', {
                            TemplateID: response.data.templateID,  // 使用從第一個 API 拿到的 ID
                            DepartureDate: modalData.departureDate,
                            DepartureTimeID: modalData.departureTimeId,
                        })
                            .then((response) => {
                                console.log('第二次 API 返回資料:', response.data);
                                setGetScheduleDataFromServer(prev => [
                                    ...prev,
                                    {
                                        ...modalData
                                    }
                                ]);
                                alert("新增旅程成功!");
                                setShowModal(false);
                            })
                            .catch((error) => {
                                console.log('第二次 API 發生錯誤:', error);
                            });
                    })
                    .catch((error) => {
                        console.log('第一次 API 發生錯誤:', error);
                    });
            } else if (modalData.scheduleId) {
                // 如果有 scheduleId，需要更新資料
                api.put(`/updateSchedule/${modalData.scheduleId}`, {
                    TemplateID: modalData.templateId,
                    DepartureDate: modalData.departureDate,
                    DepartureTimeID: modalData.departureTimeId,
                })
                    .then((response) => {
                        setGetScheduleDataFromServer(prev =>
                            prev.map(item =>
                                item.scheduleId === modalData.scheduleId
                                    ? { ...item, ...modalData }
                                    : item
                            )
                        );
                        setShowModal(false);
                        alert("更新旅程成功!");
                    })
                    .catch((error) => {
                        console.log('更新旅程發生錯誤:', error);
                    });
            } else {
                api.post('/postSchedule', {
                    TemplateID: modalData.templateId,  // 使用從第一個 API 拿到的 ID
                    DepartureDate: modalData.departureDate,
                    DepartureTimeID: modalData.departureTimeId,
                })
                    .then((response) => {
                        console.log('返回資料:', response.data);
                        setGetScheduleDataFromServer(prev => [
                            ...prev,
                            {
                                ...modalData
                            }
                        ]);
                        alert("新增旅程成功!");
                        setShowModal(false);
                    })
                    .catch((error) => {
                        console.log('新增旅程發生錯誤:', error);
                    });
            }
        }
    };

    const fetchSchedules = useCallback(async () => {
        if (loading) return; // 如果正在加載，則不重複請求
        setLoading(true); // 設置為加載中
        try {
            const response = await api.get('/getSchedules');
            const sortedData = response.data.sort((a, b) => {
                const dateA = new Date(a.DepartureDate.replace(/\//g, '-'));
                const dateB = new Date(b.DepartureDate.replace(/\//g, '-'));
                return dateA - dateB;
            });
            const myData = sortedData.map((item, index) => ({
                ...item,
                Index: index + 1,
                Expired: item.Expired ? "已過期" : "即將到來",
            }));
            setGetScheduleDataFromServer(myData); // 更新 schedule 資料
        } catch (error) {
            console.error('Failed to get schedule data:', error);
        } finally {
            setLoading(false); // 請求完成後重設 loading
        }
    }, [loading]); // 不再依賴於其他 state

    const fetchMenu = useCallback(async () => {
        if (loading) return; // 如果正在加載，則不重複請求
        setLoading(true); // 設置為加載中
        try {
            const response = await api.get('/getTemplates');
            setGetMenuDataFromServer(response.data); // 更新 menu 資料
        } catch (error) {
            console.error('Failed to get menu data:', error);
        } finally {
            setLoading(false); // 請求完成後重設 loading
        }
    }, [loading]); // 不再依賴於其他 state

    useEffect(() => {
        console.log("useEffect triggered123");
        // 在 component mount 時加載資料
        fetchSchedules();
        fetchMenu();
    }, []);
    useEffect(() => {
        if (dataTrigger) {
            fetchSchedules(); // 重新拉取 schedules 資料
            setDataTrigger(false); // 重置 trigger 狀態
        }
    }, [dataTrigger]);
    
    // const filteredDataMemo = useMemo(() => {
    //     return getScheduleDataFromServer;
    // }, [getScheduleDataFromServer]);

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
                    {/* <DataFetcherSchedule
                        setDataFromServer={setGetScheduleDataFromServer}
                        setDataTrigger={setDataTrigger}
                    />
                    <DataFetcherMenu
                        setDataFromServer={setGetMenuDataFromServer}
                        setDataTrigger={setDataTrigger}
                    /> */}
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={dataByBtnFilter.length > 0 ? (dataByBtnFilter) :
                            (selectedDate ? (filteredData) : (getScheduleDataFromServer))}
                        data2={getMenuDataFromServer}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminSchedule;