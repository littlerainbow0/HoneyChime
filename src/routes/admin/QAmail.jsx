// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar.jsx';
import CustomTable from '../../components/admin/customTable.jsx'; // 確保導入的是正確的路徑
import MailCard from '../../components/admin/card_email.jsx';

const columns = ["userId", "name", "email", "type", "content", "time", "reply"];
const data = [
  {
    userId: 1,
    name:"",
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
      <div className='flex-col ml-10'>
        <h1>Admin Home</h1>
        <MailCard columns={columns} data={data} />
        <CustomTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AdminHome;