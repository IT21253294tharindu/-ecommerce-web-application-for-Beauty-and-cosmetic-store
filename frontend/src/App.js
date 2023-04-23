import './App.css';
import React from 'react';
//import Counterclass from './components/counterclass';
//import CounterFunction from './components/counterfunction';
import AddDeliveryinfo from './components/adddeliveryinfo';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import DeliveryInfo from "./pages/deliveryinfo"
import Header from './components/navigation';
import ProfileNavigation from './components/profilenavigation';
import UpdateDeliveryinfo from './components/updateDeliveryinfo';




function App() {
  return (
    <div className="App"> 
    <Router>
      <Header/>
      <ProfileNavigation/>

     <Routes>
     <Route path='/deliveryinfo' exact Component={DeliveryInfo}/>
     <Route path="/addDeliveryinfo" exact Component={AddDeliveryinfo}/>
     <Route path="/deliveryinfo/update/:id" exact Component={UpdateDeliveryinfo}/>
    </Routes>
    </Router>
    
   
    
    </div>
  );
}

export default App;
