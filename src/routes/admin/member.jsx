// components/home.jsx
import React, { useState, useEffect } from 'react';

import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import Background from '../../components/admin/background_admin.jsx';

import DataFetcherMember from '../../dataProcessing/admin/GET_members.jsx';
import DataFetcherOrder from '../../dataProcessing/admin/GET_order.jsx';

const filterCardName = [
    {
        dessertType: "VIP",
        imgSrc: "/src/assets/images/people/people_activity04.png",
    },
    {
        dessertType: "一般會員",
        imgSrc: "/src/assets/images/people/people_activity03.png",
    },
]

var columns = [
    "UserID",
    "UserName",
    "UserPhone",
    "UserMail",
    "Sex",
    "Birth",
    "RegistrationTime",
    "LatestLogin",
];

var columnNames = {
    UserID: "會員ID",
    UserName: "會員",
    UserPhone: "聯絡電話",
    UserMail: "郵件",
    Sex: "性別",
    Birth: "生日",
    RegistrationTime: "註冊時間",
    LatestLogin: "最新登入時間",
};

const detailColumns = [
    "OrderID",
    "PaymentStatus",
    "Price",
    "OrderTime",
]
const detailColumnNames = {
    OrderID: "歷史訂單ID",
    PaymentStatus: "訂單狀態",
    Price: "總金額",
    OrderTime: "下單時間",
}


const AdminMember = () => {

    const [getMembersDataFromServer, setGetMembersDataFromServer] = useState([])
    const [getOrderDataFromServer, setGetOrderDataFromServer] = useState([])

    return (
        <div className="flex flex-row">
            <Navbar />
            <Background />
            <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'>
                    <RouteName />
                    <FilterCard data={filterCardName} />
                    <hr className='my-12 mb-6' />
                    <DataFetcherMember setDataFromServer={setGetMembersDataFromServer} />
                    <DataFetcherOrder setDataFromServer={setGetOrderDataFromServer} />
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={getMembersDataFromServer}
                        data2={getOrderDataFromServer}
                    />
                </div>
            </div>
        </div >
    );
};

export default AdminMember;