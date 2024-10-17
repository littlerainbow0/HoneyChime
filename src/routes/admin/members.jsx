// components/home.jsx
import React from 'react';
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import Navbar from '../../components/admin/navbar.jsx';
import CustomTable from '../../components/admin/customTable.jsx'; // 確保導入的是正確的路徑
import CustomTableCollapse from '../../components/admin/customTable_collapse.jsx'; // 確保導入的是正確的路徑

var columns = ["userId", "level", "numberOfRides", "abandonedOrders", "registrationTime", "latestLogin"];
const data = [
    {
        userId: 1,
        level: "VIP",
        numberOfRides: "2",
        // 不同訂單日期計算次數
        abandonedOrders: "0",
        // 訂單狀態計算超過發車日期狀態未匯款
        registrationTime: "2024/06/28 09:00",
        latestLogin: "2024/11/13 16:30",
    },
    {
        userId: 1,
        level: "VIP",
        numberOfRides: "2",
        // 不同訂單日期計算次數
        abandonedOrders: "0",
        // 訂單狀態計算超過發車日期狀態未匯款
        registrationTime: "2024/06/28 09:00",
        latestLogin: "2024/11/13 16:30",
    },
];
const individualInformationColumns = ["userId", "name", "email", "phone", "birth", "county", "dist", "address"];
const individualInformationData = [
    {
        userId: 1,
        name: "林少晴",
        email: "onoyi17@gmail.com",
        phone: "0912345678",
        birth: "1997/02/22",
        county: "台中市",
        dist: "南屯區",
        address: "公益路二段51號18樓"
    },
];
const historyOrdersColumns = ["orderId", "orderDate", "departureDate", "orderStatus", "updateTime", "totalAmount"];
const historyOrdersData = [
    {
        orderId: 1,
        orderDate: "2024/10/10",
        departureDate: "2024/11/11",
        orderStatus: "已付款",
        // 已付款 / 未付款 / 已取消 / 棄單
        updateTime: "2024/10/11",
        totalAmount: "4000",
    },
];

const AdminMember = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <div className='flex-col ml-10'>
                <h1>會員管理</h1>
                <CustomTableCollapse columns={columns} data={data} />
                <CustomTable columns={individualInformationColumns} data={individualInformationData}></CustomTable>
                <CustomTable columns={historyOrdersColumns} data={historyOrdersData}></CustomTable>
            </div>

        </div>
    );
};

export default AdminMember;