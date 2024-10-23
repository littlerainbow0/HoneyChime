// components/home.jsx
import React, { useState } from 'react'; // 引入 useState
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import TableCollapse from '../../components/admin/table_collapse.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import Modal from '../../components/admin/modal_createSchedule.jsx'
import { Button } from '@nextui-org/react';
import BtnBrown from '../../components/user/btn_brown.jsx'
import DataFetcher from '../../dataProcessing/admin/GET_template.jsx';
import Background from '../../components/admin/background_admin.jsx'

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

const detailColumns = [
    "TemplateID",
    "DessertTitle",
    "MenuFirstName",
    "MenuSecondName",
]
const detailColumnsName = {
    TemplateID: "模板ID",
    DessertTitle: "甜點風格",
    MenuFirstName: "供餐1",
    MenuSecondName: "供餐2",
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
                    <div className='justify-between'>
                        <BtnBrown btnText="新建一筆模板" onClick={clickShowModal} />
                        {showModal && <Modal onClose={clickShowModal} />} {/* 传递 onClose 函数 */}
                    </div>
                    <DataFetcher setDataFromServer={setDataFromServer} />
                    <TableDefault columns={detailColumns} data={dataFromServer} columnNames={detailColumnsName} />
                </div>
            </div>
        </div>
    );
};

export default AdminTemplate;