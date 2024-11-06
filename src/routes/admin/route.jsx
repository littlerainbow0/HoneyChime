// components/home.jsx
import React, { useState, useEffect } from 'react'; // 引入 useState
import api from '../../api.jsx';

import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import Modal from '../../components/admin/modal.jsx'
import { Button } from '@nextui-org/react';
import BtnLightBrown from '../../components/user/btn_lightbrown.jsx'
import Background from '../../components/admin/background_admin.jsx'
import { TbPlaylistAdd } from "react-icons/tb";
import { RiAddLargeFill } from "react-icons/ri";



import DataFetcherRoute from '../../dataProcessing/admin/GET_route.jsx';

const filterCardName = [
    {
        type: "北部出發",
        imgSrc: "/src/assets/images/train_exterior/trip_hero.png",
    },
    {
        type: "中部出發",
        imgSrc: "/src/assets/images/train_exterior/train_exterior_9.png",
    },
    {
        type: "南部出發",
        imgSrc: "/src/assets/images/train_exterior/tripInfo_hero01.png",
    },
    {
        type: "東部出發",
        imgSrc: "/src/assets/images/train_exterior/train_exterior_1.png",
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
    LandScapeImage1: "風景圖1",
    LandScapeImage2: "風景圖2",
    LandScapeImage3: "風景圖3",
    LandScapeDescription: "風景介紹",
}
const detailColumns = [
]
const detailColumnNames = {
}

const AdminRoute = () => {
    const [showModal, setShowModal] = useState(false);

    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    const [routeDataFromServer, setRouteDataFromServer] = useState([]) // 儲存API資料用
    const [routeDataTrigger, setRouteDataTrigger] = useState(false); // 用來觸發資料重載

    const handleSubmit = (modalData, setErrorMessages) => {
        console.log('modal拿到的數據', modalData);

        if (!modalData.stopStartId || !modalData.stopEndId ||
            !modalData.routeImagePath || !modalData.duration ||
            !modalData.description || !modalData.landScapeImage1 ||
            !modalData.landScapeImage2 || !modalData.landScapeImage3 ||
            !modalData.landScapeDescription
        ) {
            alert("請填寫所有必填欄位！");
            return;  // 不繼續執行後面的程式碼
        }

        const isDuplicate = routeDataFromServer.some(item =>
        (
            String(item.StopStartID) === String(modalData.stopStartId) && String(item.StopEndID) === String(modalData.stopEndId)
        )
        );

        if (isDuplicate === true) {
            alert('此路線已存在，請重新選擇路線')
        } else {
            api.post(`/postRoute`, {
                StopStart: modalData.stopStartId,
                StopEnd: modalData.stopEndId,
                RouteImagePath: modalData.routeImagePath,
                Duration: modalData.duration,
                Description: modalData.description,
                LandScapeImage1: modalData.landScapeImage1,
                LandScapeImage2: modalData.landScapeImage2,
                LandScapeImage3: modalData.landScapeImage3,
                LandScapeDescription: modalData.landScapeDescription,
            })
                .then((response) => {
                    const newRouteData = response.data;
                    setRouteDataFromServer(prev => [...prev, newRouteData]);
                    setRouteDataTrigger(prev => !prev);  // 触发重新加载数据
                    setShowModal(false);
                    alert("新增路線成功!");
                })
                .catch((error) => {
                    console.log('新增路線發生錯誤:', error);
                });
        }
    };

    useEffect(() => {
        if (routeDataFromServer.length > 0) {
            console.log("有沒有正確存入資料", routeDataFromServer);
        }
        setRouteDataFromServer(routeDataFromServer)
    }, [routeDataFromServer]);

    return (
        <div className="flex flex-row">
            <Navbar />
            <Background />
            <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'>
                    <RouteName />
                    <FilterCard data={filterCardName} />
                    <hr className='mt-10 mb-6' />
                    <div className='justify-between'>
                        <BtnLightBrown btnText={
                            <>
                                <RiAddLargeFill />新增路線
                            </>
                        } onClick={clickShowModal} />
                        {showModal &&
                            <Modal onClose={clickShowModal}
                                handleSubmit={handleSubmit} />} {/* 传递 onClose 函数 */}
                    </div>
                    <DataFetcherRoute
                        setDataFromServer={setRouteDataFromServer}
                        setDataTrigger={setRouteDataTrigger} />
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={routeDataFromServer}
                        data2={routeDataFromServer}
                        handleSubmit={handleSubmit}
                    />                </div>
            </div>
        </div>
    );
};

export default AdminRoute;