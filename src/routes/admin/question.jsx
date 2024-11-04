// components/home.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/admin/navbar_admin.jsx';
import MailCard from '../../components/admin/card_text.jsx';
import RouteName from '../../components/admin/routeName.jsx';
import Background from '../../components/admin/background_admin.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import DataFetcherQ from '../../dataProcessing/admin/GET_question.jsx';

const filterCardName = [
  {
    type: "訂單/取消",
    imgSrc: "/src/assets/images/landscape/landscape_landscape01.png",
  },
  {
    type: "付款/退款",
    imgSrc: "/src/assets/images/train_exterior/trip_hero.png",
  },
  {
    type: "車廂/設備",
    imgSrc: "/src/assets/images/train_interior/train_interior_shop05.png",
  },
  {
    type: "旅程相關",
    imgSrc: "/src/assets/images/train_exterior/train_exterior_1.png",
  },
  {
    type: "菜單成分或內容",
    imgSrc: "/src/assets/images/dessert/dessert_dessert02.png",
  },
]

const columns = [
  "QAID",
  "UserID",
  "UserName",
  "UserMail",
  "Type",
  "Content",
  "Time",
  "reply"];


const AdminHome = () => {
  const [qasDataFromServer, setQasDataFromServer] = useState([]) // 儲存API資料用
  const [filterType, setFilterType] = useState(null);

  const handleFilterSelect = (type) => {
    const filteredData = qasDataFromServer.filter(e=> e.Type === filterCardName.type)
    setFilterType(filteredData);
  };

  // SQL篩選
  //   useEffect(() => {
  //     const fetchData = async () => {
  //         const data = await DataFetcherQ(filterType); // 假設 DataFetcherQ 根據 filterType 請求資料
  //         setQasDataFromServer(data); // 更新資料
  //     };

  //     if (filterType) {
  //         fetchData(); // 只有在 filterType 有值時才調用
  //     }
  // }, [filterType]);

  return (
    <div className="flex flex-row">
      <Navbar />
      <Background />
      <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
        <div className='max-w-[1800px] mx-auto'>
          <RouteName />
          <FilterCard data={filterCardName} onFilterSelect={handleFilterSelect} />
          <hr className='mt-10 mb-6' />
          <div className='flex flex-row justify-center flex-wrap'>
            <DataFetcherQ setDataFromServer={setQasDataFromServer} />
            <MailCard columns={columns} data={qasDataFromServer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;