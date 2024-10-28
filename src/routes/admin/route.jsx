// components/home.jsx
import React, { useState } from 'react'; // 引入 useState
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import TableCollapse from '../../components/admin/table_collapse.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import Modal from '../../components/admin/modal_schedule.jsx'
import { Button } from '@nextui-org/react';
import BtnBrown from '../../components/user/btn_brown.jsx'
import Background from '../../components/admin/background_admin.jsx'

import DataFetcherRoute from '../../dataProcessing/admin/GET_route.jsx';

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
    "RouteID",
    "StopStartName",
    "StopEndName",
    "Duration",
    "RouteImagePath",
    "Description",
    "LandScapeImage1",
    "LandScapeImage2",
    "LandScapeImage3",
    "LandScapeDescription",
]
const columnNames = {
    RouteID: "路線ID",
    StopStartName: "起點站",
    StopEndName: "終點站",
    Duration: "車程(分)",
    RouteImagePath: "路線圖",
    Description: "路線介紹",
    LandScapeImage1:"風景圖1",
    LandScapeImage2:"風景圖2",
    LandScapeImage3:"風景圖3",
    LandScapeDescription:"風景介紹",
}
const detailColumns = [
]
const detailColumnNames = {
}

const AdminTemplate = () => {
    const [showModal, setShowModal] = useState(false);

    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    const [routeDataFromServer, setRouteDataFromServer] = useState([]) // 儲存API資料用


    return (
        <div className="flex flex-row">
            <Navbar />
            <Background />
            <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'>
                    <RouteName />
                    <FilterCard data={filterCardName} />
                    <div className='justify-between'>
                        <BtnBrown btnText="新建一筆模板" onClick={clickShowModal} />
                        {showModal && <Modal onClose={clickShowModal} />} {/* 传递 onClose 函数 */}
                    </div>
                    <DataFetcherRoute setDataFromServer={setRouteDataFromServer} />
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={routeDataFromServer}
                        data2={routeDataFromServer}
                    />                </div>
            </div>
        </div>
    );
};

export default AdminTemplate;