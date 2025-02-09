import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Orders/Order'
import { ToastContainer } from 'react-toastify';



const App = () => {

  const url="https://food-del-beckend.onrender.com";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url} />}/>
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/order' element={<Order url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
