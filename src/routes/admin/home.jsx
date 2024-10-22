// components/home.jsx
import React from 'react';
import Navbar from '../../components/admin/navbar_admin.jsx';
import TableDefault from '../../components/admin/table_default.jsx'; // 確保導入的是正確的路徑
import RouteName from '../../components/admin/routeName.jsx'

const columns = ["Name", "Age", "Email","hi"];
const data = [
  { Name: "Alice", Age: 25, Email: "alice@example.com" },
  { Name: "Bob", Age: 30, Email: "bob@example.com" },
];

const AdminHome = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <div className='ml-10 text-left w-full'>
            <RouteName/>
            <TableDefault columns={columns} data={data} />
            </div>
        </div>
    );
};

export default AdminHome;