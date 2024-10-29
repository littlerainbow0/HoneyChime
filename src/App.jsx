 //import { useState } from 'react'
//  import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
// import './App.css'

// --*/ admin pages
//import AdminHome from './routes/admin/home.jsx'
// --- admin pages /*
import './assets/css/style.css'; 

import Home from './routes/Home.jsx';
import News from './routes/News.jsx';
import About from './routes/About.jsx';
import Menu from './routes/Menu.jsx';
import AdminNewsPage from './routes/AdminNews.jsx';
import Calendarr from './components/admin/Calendarr.jsx';
import MenuDessertTitle from './components/MenuDessertTitle.jsx';
import MenuActivity from './components/MenuActivity.jsx';
import AboutTitle from './components/AboutTitle.jsx';
import MenuDessert from './components/MenuDessert.jsx';
import MenuDrink from './components/MenuDrink.jsx';
import HomeIntroduce2 from './components/HomeIntroduce2.jsx';
import HomeJourney from './components/HomeJourney.jsx';
import HomeIntroduce from './components/HomeIntroduce.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeCarousel from './components/HomeCarousel.jsx';
import HomeHeader from './components/HomeHeader.jsx';
import Test from './components/admin/test.jsx';



const App=()=>{
  return(
    <Router>
      

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/calendar' element={<Calendarr/>}></Route>
        <Route path='/admin/news' element={<AdminNewsPage/>}></Route>

        {/* test */}
        <Route path='/menu1' element={<MenuDessertTitle/>}></Route>
        <Route path='/menu2' element={<MenuActivity/>}></Route>
        <Route path='/menu3' element={<MenuDessert/>}></Route>
        <Route path='/menu4' element={<MenuDrink/>}></Route>
        <Route path='/about1' element={<AboutTitle/>}></Route>
        <Route path='/home1' element={<HomeIntroduce2/>}></Route>
        <Route path='/home2' element={<HomeJourney/>}></Route>
        <Route path='/home3' element={<HomeIntroduce/>}></Route>
        <Route path='/home4' element={<HomeCarousel/>}></Route>
        <Route path='/home5' element={<HomeHeader/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
        
      </Routes>
    </Router>
  )
}

export default App;
