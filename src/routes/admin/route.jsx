// components/home.jsx
import React, { useState, useEffect, useCallback } from 'react'; // 引入 useState
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
        filter: ["台北"],
    },
    {
        type: "中部出發",
        imgSrc: "/src/assets/images/train_exterior/train_exterior_9.png",
        filter: ["台中"],
    },
    {
        type: "南部出發",
        imgSrc: "/src/assets/images/train_exterior/tripInfo_hero01.png",
        filter: ["台南", "高雄"],
    },
    {
        type: "東部出發",
        imgSrc: "/src/assets/images/train_exterior/train_exterior_1.png",
        filter: ["花蓮"],
    },
]

const columns = [
    "Index",
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
    Index: "排序",
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
    const [loading, setLoading] = useState(false); // 加載狀態
    const [dataTrigger, setDataTrigger] = useState([]); // 用來觸發資料重載
    const [dataFromServer, setDataFromServer] = useState([]) // 儲存API資料用
    const [filter, setFilter] = useState("");

    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    const handleSubmit = (modalData, setErrorMessages) => {
        setDataTrigger(prev => !prev)
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

        const isDuplicate = dataFromServer.some(item => {
            (
                (String(item.StopStartID) === String(modalData.stopStartId))
                && (String(item.StopEndID) === String(modalData.stopEndId))
            )
        });

        if (isDuplicate === true) {
            alert('此路線已存在，請重新選擇路線')
        } else {
            if (!modalData.routeId) {
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
                        setDataFromServer(prev => [...prev, newRouteData]);
                        setShowModal(false);
                        alert("新增路線成功!");
                    })
                    .catch((error) => {
                        console.log('新增路線發生錯誤:', error);
                    });
            } else {
                api.put(`/updateRoute/${modalData.routeId}`, {
                    RouteID: modalData.routeId,
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
                        setDataFromServer(prev =>
                            prev.map(item =>
                                item.routeId === modalData.routeId
                                    ? { ...item, ...modalData }
                                    : item
                            )
                        );
                        setShowModal(false);
                        alert("更新路線成功!");
                    })
                    .catch((error) => {
                        console.log('更新路線發生錯誤:', error);
                    });
            }
        }
    };

    const filteredRouteData = dataFromServer.filter((route) => {
        if (filter.length === 0) return true;  // 沒有篩選條件時顯示所有資料
        return filter.some(f => route.StopStartName.includes(f)); // 任一篩選條件符合時顯示資料
    });

    const fetchData = useCallback(async () => {
        if (loading) return;
        setLoading(true);
        // 排序用：台北 台中 台南 高雄 花蓮
        const stopOrder = [2, 3, 1, 4, 5]; // 自定義順序
        try {
            const response = await api.get('/getRoutes');
            // 自定義排序
            response.data.sort((a, b) => {
                const aIndex = stopOrder.indexOf(Number(a.StopStartID));
                const bIndex = stopOrder.indexOf(Number(b.StopStartID));
                return aIndex - bIndex;
            });
            response.data = response.data.map((e, index) => ({
                ...e,
                Index: index + 1,
            }))
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
        console.log(dataFromServer);
    }, []);
    useEffect(() => {
        if (dataTrigger) {
            fetchData(); // 重新拉取 schedules 資料
            console.log(dataFromServer);
            setDataTrigger(false); // 重置 trigger 狀態
        }
    }, [dataTrigger]);

    return (
        <div className="flex flex-row">
            <Navbar />
            <Background />
            <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
                <div className='max-w-[1800px] mx-auto'>
                    <RouteName />
                    <FilterCard data={filterCardName} onFilterSelect={setFilter} />
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
                    {/* <DataFetcherRoute
                        setDataFromServer={setDataFromServer}
                        setDataTrigger={setDataTrigger}
                        loading={loading} /> */}
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={filteredRouteData}
                        data2={filteredRouteData}
                        handleSubmit={handleSubmit}
                    />                </div>
            </div>
        </div>
    );
};

export default AdminRoute;