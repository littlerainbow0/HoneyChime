// components/home.jsx
import React, {useState} from 'react';
import Navbar from '../../components/admin/navbar_admin.jsx';
import MailCard from '../../components/admin/card_text.jsx';
import RouteName from '../../components/admin/routeName.jsx';
import Background from '../../components/admin/background_admin.jsx'
import FilterCard from '../../components/admin/card_filter.jsx'
import DataFetcherQ from '../../dataProcessing/admin/GET_question.jsx';

const filterCardName = [
  {
    dessertType: "訂單/取消",
    imgSrc: "/src/assets/images/landscape/landscape_landscape01.png",
  },
  {
    dessertType: "付款/退款",
    imgSrc: "/src/assets/images/train_exterior/trip_hero.png",
  },
  {
    dessertType: "車廂/設備",
    imgSrc: "/src/assets/images/train_interior/train_interior_shop05.png",
  },
  {
    dessertType: "旅程相關",
    imgSrc: "/src/assets/images/train_exterior/train_exterior_1.png",
  },
  {
    dessertType: "菜單成分或內容",
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
  "reply"];
const data = [
  {
    userId: 1,
    name: "林少晴",
    email: "onoyi17@gmail.com",
    type: "訂單/取消",
    // 訂單/取消, 付款/退款, 車廂/設備, 旅程相關, 菜單成分或內容
    content: "我有個問題",
    time: "2024/10/10",
    reply: "Y"
    // Y, N
  }
];

const AdminHome = () => {
  const [qasDataFromServer, setQasDataFromServer] = useState([]) // 儲存API資料用

  return (
    <div className="flex flex-row">
      <Navbar />
      <Background />
      <div className='flex-grow pl-40 md:pl-64 3xl:pl-0 text-left w-full'>
        <div className='max-w-[1800px] mx-auto'>
          <RouteName />
          <FilterCard data={filterCardName} />
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