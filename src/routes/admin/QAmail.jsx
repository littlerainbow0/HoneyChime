// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar_admin.jsx';
import MailCard from '../../components/admin/card_text.jsx';
import RouteName from '../../components/admin/routeName.jsx'

const columns = ["userId", "name", "email", "type", "content", "time", "reply"];
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
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className='flex-col ml-10 text-left w-full'>
        <RouteName />
        <div className='flex flex-row justify-center flex-wrap'>
          <MailCard columns={columns} data={data} />
          <MailCard columns={columns} data={data} />
          <MailCard columns={columns} data={data} />
          <MailCard columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;