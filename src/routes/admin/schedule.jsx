// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx' // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'

const filterCardName = [
    {
        dessertType:"歐式",
        imgSrc:"/src/assets/images/dessert/tripInfo_Eur04.png",
    },
    {
        dessertType:"日式",
        imgSrc:"/src/assets/images/dessert/dessert_dessert09.png",
    },
    {
        dessertType:"台式",
        imgSrc:"/src/assets/images/dessert/trip_Tw.png",
    },
]

const columns = [
    "travelId",
    "date",
    "departureTime",
    "routeName",
    "templateTitle",
    "status"];
const data = [
    {
        travelId: 1,
        date: "2024/11/13",
        departureTime: "09:00",
        routeName: "台中高雄",
        templateTitle: "日式甜點",
        status: "已過期"
        // 已過期, 即將到來
    }
];
const templateDetailColumns = [
    "templateId",
    "templateTitle",
    "routeName",
    "themeName",
    "menuName1",
    "menuName2",
];
const templateDetailData = [
    {
        templateId: 1,
        templateTitle: "日式甜點",
        routeName: "台中高雄",
        themeName: "日式",
        menuName1: "日式練切",
        menuName2: "日式團子",
    }
];

const AdminHome = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <div className='ml-10 text-left w-full'>
                <RouteName />
                <FilterCard data={filterCardName} />
                <TableDefault columns={columns} data={data} />
            </div>
        </div>
    );
};

export default AdminHome;