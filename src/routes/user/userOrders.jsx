// components/home.jsx
import React from 'react';

// */ Componenets
import NavbarUser from '../../components/user/navbar_user.jsx'
import OrderTable from '../../components/user/table_order.jsx'
import Header from '../../components/user/header_user.jsx'
// -- Componenets /*


const columns = [
    "userId",
    "orderId",
    "travelId",
    "templateTitle",
    "status",
    "routeName",
    "people",
    "seatsId",
    "date",
    "departureTime",
    "orderStatus",
    "menuName1",
    "menuName2",
    "updateTime",
    "totalAmount"
];
const data = [
    {
        userId: 1,
        orderId: 1,
        travelId: 1,
        templateTitle: "日式甜點",
        status: "即將到來",
        // 已過期, 即將到來
        routeName: "台中高雄",
        people: 3,
        seatsId: ["A1", "A2", "A3"],
        date: "2024/11/13",
        departureTime: "09:00",
        orderStatus: "已付款",
        // 已付款 / 未付款 / 已取消 / 棄單
        menuName1: "日式練切",
        menuName2: "日式團子",
        updateTime: "2024/10/11",
        totalAmount: "4000",
    },
    {
        userId: 1,
        orderId: 1,
        travelId: 1,
        templateTitle: "日式甜點",
        status: "即將到來",
        // 已過期, 即將到來
        routeName: "台中台北",
        people: 3,
        seatsId: ["A1", "A2", "A3"],
        date: "2024/11/13",
        departureTime: "09:00",
        orderStatus: "已付款",
        // 已付款 / 未付款 / 已取消 / 棄單
        menuName1: "日式練切",
        menuName2: "日式團子",
        updateTime: "2024/10/11",
        totalAmount: "4000",
    },
];

console.log(typeof (data[0].userId));

const UserOrders = () => {
    return (
        <div>
            <div className='contactTitle'>
                <header className="flex-auto font-bold w-full text-center 
                  overflow-hidden text-clip min-w-[170px] 
                  absolute top-0 left-0 h-640"
                    style={{
                        background: ` url("/src/assets/images/train_interior/train_interior_11.png")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <Header />
                    <h3 className="text-lightyellow px-40 py-2 font-titleFont text-h2 font-bold" style={{
                        zIndex: '1000', position: 'absolute',
                        top: '60%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '3rem',
                        backdropFilter: 'blur(16px)',
                    }}>
                        Hello! 您好
                    </h3>
                </header>
            </div>
            <div className='mt-[630px]'>
                <NavbarUser />
            </div>
            <div className="flex items-center ml-40 mt-24"> {/* 將下拉選單與其他內容放在同一行 */}
                <select name="" id="" className="bg-dark p-2 text-p-3 text-lightbrown"> {/* 加入 margin 右邊的空間 */}
                    <option value="">全部</option>
                    <option value="">已過期</option>
                    <option value="">即將到來</option>
                </select>
            </div>
            <OrderTable data={data} />
            <div className='mb-60' />
        </div>
    );
};

export default UserOrders;