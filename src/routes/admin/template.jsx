// components/home.jsx
import React, { useState, useCallback, useEffect } from 'react'; // 引入 useState
import api from '../../api.jsx';

import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import Modal from '../../components/admin/modal.jsx'
import { Button } from '@nextui-org/react';
import BtnLightBrown from '../../components/user/btn_lightbrown.jsx';
import Background from '../../components/admin/background_admin.jsx'
import { RiAddLargeFill } from "react-icons/ri";


const filterCardName = [
    {
        type: "歐式",
        imgSrc: "/src/assets/images/dessert/tripInfo_Eur04.png",
        filter: ["歐式甜點"],
    },
    {
        type: "日式",
        imgSrc: "/src/assets/images/dessert/dessert_dessert09.png",
        filter: ["日式甜點"],
    },
    {
        type: "台式",
        imgSrc: "/src/assets/images/dessert/trip_Tw.png",
        filter: ["台式甜點"],
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
    const [loading, setLoading] = useState(false); // 加載狀態
    const [dataTrigger, setDataTrigger] = useState([]);
    const [dataFromServer, setDataFromServer] = useState([]) // 儲存API資料用
    const [filter, setFilter] = useState("");


    const clickShowModal = () => {
        setShowModal(prev => !prev); // 切換 Modal 顯示狀態
    };

    console.log("data",dataFromServer);
    
    const filteredMealData = dataFromServer.filter((meal) => {
        if (filter.length === 0) return true;  // 沒有篩選條件時顯示所有資料
        return filter.some(f => meal.DessertTitle.includes(f)); // 任一篩選條件符合時顯示資料
    });

    const handleSubmit = (modalData) => {
        console.log('modal拿到的數據', modalData);
        setDataTrigger(prev => !prev)

        if (!modalData.dessertTitle || !modalData.dessertTypeId ||
            !modalData.mealContent || !modalData.mealDescription ||
            !modalData.mealImagePath || !modalData.mealName
        ) {
            alert("請填寫所有必填欄位！");
            return;  // 不繼續執行後面的程式碼
        }

        const isDuplicate = dataFromServer.some(item => {
            if (modalData.mealId) {
                (
                    String(item.MealName) === String(modalData.mealName)
                )
            }
        });

        if (isDuplicate === true) {
            alert('此餐點已存在，')
        } else {
            if (!modalData.mealId) {
                api.post(`/postMeal`, {
                    DessertTitle: modalData.dessertTitle,
                    DessertTypeID: modalData.dessertTypeId,
                    MealContent: modalData.mealContent,
                    MealDescription: modalData.mealDescription,
                    MealImagePath: modalData.mealImagePath,
                    MealName: modalData.mealName,
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
                api.put(`/updateMeal/${modalData.mealId}`, {
                    MealID: modalData.mealId,
                    DessertTitle: modalData.dessertTitle,
                    DessertTypeID: modalData.dessertTypeId,
                    MealContent: modalData.mealContent,
                    MealDescription: modalData.mealDescription,
                    MealImagePath: modalData.mealImagePath,
                    MealName: modalData.mealName,
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
            };
        }
    }

    const fetchData = useCallback(async () => {
        try {
            const response = await api.get('/getMeals');
            setDataFromServer(response.data);
        } catch (error) {
            console.error('Failed to get data from server/getMeals', error);
        } finally {
            setLoading(false);
        }
    }, [loading])

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
                                <RiAddLargeFill />新增餐點
                            </>
                        } onClick={clickShowModal} />
                        {showModal &&
                            <Modal
                                onClose={clickShowModal}
                                handleSubmit={handleSubmit}
                            />}
                    </div>
                    {/* <DataFetcher setDataFromServer={setDataFromServer} /> */}
                    <TableDefault
                        columns={columns}
                        columnNames={columnNames}
                        detailColumns={detailColumns}
                        detailColumnNames={detailColumnNames}
                        data1={filteredMealData}
                        data2={filteredMealData}
                        handleSubmit={handleSubmit}
                    />                </div>
            </div>
        </div>
    );
};

export default AdminTemplate;