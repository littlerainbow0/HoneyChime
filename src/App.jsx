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
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



const App=()=>{
  return(
    <Router>
      

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/admin/news' element={<AdminNewsPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
