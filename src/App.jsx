import '../cssReset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import React from 'react';
import './assets/css/style.css'
import './all.css'

// React

import Home from './routes/Home.jsx';
import News from './routes/News.jsx';
import About from './routes/About.jsx';
import Menu from './routes/Menu.jsx';
import AdminNewsPage from './routes/AdminNews.jsx';
import Calendarr from './components/admin/Calendarr.jsx';


// */ admin pages
import AdminHome from './routes/admin/home.jsx'
import AdminMember from './routes/admin/member.jsx'
import AdminQuestion from './routes/admin/question.jsx'
import Schedule from './routes/admin/schedule.jsx'
import AdminMeal from './routes/admin/meal.jsx'
import AdminRoute from './routes/admin/route.jsx'
import AdminOrder from './routes/admin/orders.jsx'
// -- admin pages /*

// */ user pages
import Validate from './routes/user/Validate.jsx'
import Login from './routes/user/login.jsx'
import Signin from './routes/user/Signin.jsx'
import UserBias from './routes/user/userBias.jsx'
import UserOrder from './routes/user/userOrders.jsx'
import Contact from './routes/user/contact.jsx'
import FAQ from './routes/user/FAQ.jsx'
import VerifyCode from './routes/user/VerifyCode.jsx'
import ResetPassword from './routes/user/ResetPassword.jsx'
// -- user pages /*


function App() {
  const [count, setCount] = useState(0)

  return (
    // 版本問題，使用react-router-dom最新版路由結構
    // npm list react-router-dom: react-router-dom@6.27.0
    // BrowserRouter > Routes > Route element={別名}
    <BrowserRouter>
      <Routes>

        <Route path="/admin" element={<AdminHome />} exact />
        <Route path="/admin/member" element={<AdminMember />} />
        <Route path="/admin/question" element={<AdminQuestion />} />
        <Route path="/admin/schedule" element={<Schedule />} exact />
        <Route path="/admin/meal" element={<AdminMeal />} />
        <Route path="/admin/route" element={<AdminRoute />} />
        <Route path="/admin/order" element={<AdminOrder />} />

        <Route path="/validate" element={<Validate />} exact />
        <Route path="/verifyCode" element={<VerifyCode />} exact />
        <Route path="/ResetPassword" element={<ResetPassword />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/signin" element={<Signin />} exact />
        {/* <Route path="/user/info" element={<Userinfo />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/question" element={<FAQ />} exact />

        <Route path="/user/info/:userId" element={<UserBias />} />
        <Route path="/user/order/:userId" element={<UserOrder />} />

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/calendar' element={<Calendarr />}></Route>
        <Route path='/admin/news' element={<AdminNewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
