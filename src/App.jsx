// import React, { Component } from 'react';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/admin/Header.jsx';
import Facilities from './routes/admin/Facilities.jsx';
import Trip from './routes/admin/Trip.jsx'; // 根據你的文件結構調整路徑
import './assets/css/header.css';
import Reservation from './routes/admin/Reservation.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/2" element={<Facilities/>} exact />
            <Route path="/1" element={<Trip/>} exact />
            <Route path="/reservation.html"/>
            {/* <Route path="/reservation.html" element={<Reservation/>} exact /> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// --*/ admin pages
// import AdminHome from './routes/admin/home.jsx'
// --- admin pages /*

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//           <Route path="/" component={Header} exact/>
//           <Route path="/Facilities" component={Facilities} exact/>
//           <Route path="/Trip" component={Trip} exact/>
//     </div>
//   )
// }

// export default App;

