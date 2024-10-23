// components/home.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx' // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import { div } from 'framer-motion/m';
import DataFetcher from '../../dataProcessing/admin/data_schedule.jsx'
import BtnLightBrown from '../../components/user/btn_lightbrown.jsx';

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
    "status"];
const columnNames = {
    ScheduleID: "行程ID",
    
    DepartureDate: "出發日期",
    DepartureTime: "出發時間",
    DessertTitle: "甜點標題",
    status: "狀態",
};

const templateDetailColumns = [
    "templateId",
    "DessertTitle",
    "TemplateDescription",
    "themeName",
    "menuName1",
    "menuName2",
];
const templateDetailData = [
    {
        templateId: 1,
        DessertTitle: "日式甜點",
        TemplateDescription: "台中高雄",
        themeName: "日式",
        menuName1: "日式練切",
        menuName2: "日式團子",
    }
];

const AdminSchedule = () => {

    const [dataFromServer, setDataFromServer] = useState([]) // 儲存API資料用

    const [dataByBtnFilter, setDataByBtnFilter] = useState([]) // data BTN篩選器
    const [isDataByBtnFilter, setIsDataByBtnFilter] = useState(false) // data BTN篩選器

    const btnFilterClick = () => {
        if (isDataByBtnFilter) {
            setDataByBtnFilter([])
        } else {
            const filteredData = dataFromServer.filter(data => data.status === "即將到來");
            setDataByBtnFilter(filteredData); // 確保這個函數接收過濾後的數據
        }
        setIsDataByBtnFilter(!isDataByBtnFilter);
    };

    return (
        <div className="flex flex-row h-screen">
            <Navbar />
            <div className='flex-grow pl-40 md:pl-64 xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'> {/* 設定最大寬度並居中 */}
                    <RouteName content="您的路由名稱" /> {/* 確保傳遞內容 */}
                    <FilterCard data={filterCardName} />
                    <hr className='mt-12 mb-2'/>
                    <BtnLightBrown
                        btnText={isDataByBtnFilter ? 
                            (<><MdFilterListOff />取消篩選</>) : 
                            (<><MdFilterList />狀態篩選</>)}
                        onClick={btnFilterClick}
                    />
                    <DataFetcher setDataFromServer={setDataFromServer} />
                    <TableDefault
                        columns={columns}
                        data={dataByBtnFilter.length > 0 ? dataByBtnFilter : dataFromServer}
                        columnNames={columnNames}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminSchedule;