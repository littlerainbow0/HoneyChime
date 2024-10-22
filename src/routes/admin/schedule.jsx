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
    "TemplateDescription",
    "DessertTitle",
    "status"];
const columnNames = {
    ScheduleID: "行程ID",
    DepartureDate: "出發日期",
    DepartureTime: "出發時間",
    TemplateDescription: "模板描述",
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
        <div className="flex flex-row">
            <Navbar />
            <div className='ml-10 text-left w-full'>
                <RouteName />
                <FilterCard data={filterCardName} />
                <BtnLightBrown btnText={isDataByBtnFilter ? <MdFilterListOff /> : <MdFilterList />}
                    onClick={btnFilterClick} />
                <DataFetcher setDataFromServer={setDataFromServer} />
                <TableDefault
                    columns={columns}
                    data={dataByBtnFilter.length > 0 ? dataByBtnFilter : dataFromServer}
                    columnNames={columnNames} />

                <Table className='bg-lightyellow'>
                    <TableHeader>
                        <TableColumn>
                            出發日期
                        </TableColumn>
                        <TableColumn>
                            出發時間
                        </TableColumn>
                        <TableColumn>
                            模板描述
                        </TableColumn>
                        <TableColumn>
                            甜點標題
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <input type="data" />

                            </TableCell>
                            <TableCell>
                                <input type="data" />
                            </TableCell>
                            <TableCell>
                                <input type="data" />
                            </TableCell>
                            <TableCell>
                                <input type="data" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminSchedule;