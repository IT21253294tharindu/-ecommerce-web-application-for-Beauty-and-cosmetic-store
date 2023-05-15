
import './App.css';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import DashTabs from './components/tabs';
import UpdateorderStatus from './components/updateorderstatus';
import OrderContext from './components/ordercontext';
import { useState } from 'react';
import ReadytoshipTable from './components/readytoshiptable';
import CancelorderStatus from './components/cancel';
import Header from "./components/header";
import ViewOrder from './components/vieworderdetails';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <OrderContext.Provider value={useState([])}>
    <div className="App">
     
      <Router>
      <Header/>
      <DashTabs/>
      <Routes>
        <Route path='/order/update/:id' exact Component={UpdateorderStatus}/>
        <Route path='/order/ready' exact component={ReadytoshipTable}/>
        <Route path='/order/cancel/:id' exact Component={CancelorderStatus}/>
        <Route path='/order/view/:id' exact Component={ViewOrder}/>
      </Routes>

      </Router>
      
      
    
     
    </div>
    </OrderContext.Provider>
  );
}

export default App;
