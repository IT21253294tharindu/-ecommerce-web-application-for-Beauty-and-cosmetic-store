import React from "react";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";
import DeliveryInfo from "../pages/deliveryinfo";

const Homelayout = ({ children }) => {
  return (
    <div>  
      <DeliveryInfo/>
     
    </div>
  );
};

export default Homelayout;
