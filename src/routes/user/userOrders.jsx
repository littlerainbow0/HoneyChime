// components/home.jsx
import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import api from '../../api.jsx';

// */ Componenets
import NavbarUser from '../../components/user/navbar_user.jsx'
import OrderTable from '../../components/user/table_order.jsx'
import Header from '../../components/user/header.jsx';
import Footer from '../../components/user/footer.jsx'
// -- Componenets /*

const UserOrders = () => {
    const { userId } = useParams();
    const [loading, setLoading] = useState(false); // 加載狀態
    const [dataTrigger, setDataTrigger] = useState([]); // 用來觸發資料重載
    const [dataFromServer, setDataFromServer] = useState([])

    const fetchData = useCallback(async () => {
        if (loading) return;
        setLoading(true);
        // 排序用：台北 台中 台南 高雄 花蓮
        try {
            const response = await api.get(`/getOrders/1`);
            console.log("data", response.data);
            setDataFromServer(response.data);
        } catch (error) {
            console.error('獲取數據失敗', error);
        } finally {
            setLoading(false);
        }
    }, [loading]);

    useEffect(() => {
        console.log("useEffect triggered");
        fetchData();
    }, []);
    useEffect(() => {
        console.log("123");

        if (dataTrigger) {
            fetchData(); // 重新拉取 schedules 資料
            setDataTrigger(false); // 重置 trigger 狀態
        }
    }, [dataTrigger]);


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

    const currentTime = new Date();
    const departureTime = new Date(dataFromServer.DepartureDate + 'T' + dataFromServer.DepartureTime);  // 将 departureDate 和 departureTime 合并为 Date 对象
    const status = currentTime > departureTime ? '已過期' : '即將到來';
    const data = dataFromServer.map((elem, index) => (
        {
            userId: elem.UserID,
            orderId: elem.OrderID,
            travelId: elem.ScheduleID,
            templateTitle: elem.DessertTitle,
            status: status,
            // 已過期, 即將到來
            routeName: `${elem.StopStartName} 到 ${elem.StopEndName}`,
            people: elem.PeopleNum,
            seatsId: elem.SeatName,
            date: elem.DepartureDate,
            departureTime: elem.DepartureTime,
            orderStatus: elem.PaymentStatus,
            // 已付款 / 未付款 / 已取消 / 棄單
            menuName1: "舒芙蕾佐時令水果",
            menuName2: "日式和菓子佐綠茶羊羹",
            updateTime: new Date(),
            totalAmount: elem.Price,
        }
    ))
        ;

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
                        Hello!<br />
                        Amy
                    </h3>
                </header>
            </div>
            <div className='mt-[660px]'>
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
            <Footer />
        </div>
    );
};

export default UserOrders;