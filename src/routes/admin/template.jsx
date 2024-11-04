// components/home.jsx
import React, { useState } from 'react'; // 引入 useState
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import Modal from '../../components/admin/modal.jsx'
import { Button } from '@nextui-org/react';
import BtnLightBrown from '../../components/user/btn_lightbrown.jsx';
import DataFetcher from '../../dataProcessing/admin/GET_meal.jsx';
import Background from '../../components/admin/background_admin.jsx'
import { RiAddLargeFill } from "react-icons/ri";


const filterCardName = [
    {
        type: "歐式",
        imgSrc: "/src/assets/images/dessert/tripInfo_Eur04.png",
    },
    {
        type: "日式",
        imgSrc: "/src/assets/images/dessert/dessert_dessert09.png",
    },
    {
        type: "台式",
        imgSrc: "/src/assets/images/dessert/trip_Tw.png",
    },
]

const columns = [
    "MealID",
    "DessertTitle",
    "MealImagePath",
    "MealName",
    "MealDescription",
]
const columnNames = {
    MealID: "甜點ID",
    DessertTitle: "甜點風格",
    MealImagePath: "甜點圖片",
    MealName: "甜點名稱",
    MealDescription: "甜點描述",
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

    const [dataFromServer, setDataFromServer] = useState([]) // 儲存API資料用


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
                                <RiAddLargeFill />新增餐點
                            </>
                        } onClick={clickShowModal} />
                        {showModal && <Modal onClose={clickShowModal} />}
                    </div>
                    <DataFetcher setDataFromServer={setDataFromServer} />
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={dataFromServer}
                        data2={dataFromServer}
                    />                </div>
            </div>
        </div>
    );
};

export default AdminTemplate;