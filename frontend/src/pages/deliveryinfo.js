import React,{useState,useEffect} from "react";
import * as icons from "react-icons/bs"; 
import "./deliveryinfo.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DeliveryInfo(){

  const[deliveryinfos,setdeliveryinfos]=useState([]);
  useEffect(()=>{
    
      getDeliveryinfo();

      
  },[])
  function getDeliveryinfo(){
    axios.get("http://localhost:4000/deliveryinfo/").then((res)=>{
     setdeliveryinfos(res.data);

    }).catch((err)=>{
      alert(err);
    })
  }
  function deleteDeliveryinfo(_id)
      {
        axios.delete(`http://localhost:4000/deliveryinfo/delete/${_id}`).then(()=>{
         const newdeliveryinfo=deliveryinfos.filter((d)=>d._id!==_id);
         setdeliveryinfos(newdeliveryinfo);
         
        })
        .catch((err)=>{
          alert(err);
        })       
      }
    
      
 

    return(


   <>
      <div id="new1">
   <Link to="/addDeliveryinfo" className="nav-link"><icons.BsFillPlusCircleFill id="icon1"/><br/></Link>
    <Link to="/addDeliveryinfo" id="label1" >add new delivery address</Link>
    <div className="deliverydetails">
      {deliveryinfos && deliveryinfos.map((deliveryinfo)=>(
      <div className="flexRow addressContainer" key={deliveryinfo._id}> 
       <div className="delivery-details">
            <dev>
           <input name="address" type="radio"/>
           </dev>
            <p>Name : {deliveryinfo.name}</p>
            <p><strong>Address: {deliveryinfo.address}</strong></p>
            <p><strong>City: {deliveryinfo.city}</strong></p>
            <p><strong>State: {deliveryinfo.state}</strong></p>
            <p><strong>Postalcode: {deliveryinfo.postalcode}</strong></p>
            <p><strong>contact no: {deliveryinfo.contactno}</strong></p>
            <button onClick={()=>deleteDeliveryinfo(deliveryinfo._id)}  style={{background:"red",color:"white",borderRadius:"10px",position:"relative",margin:"50px"}} >Delete</button>
          <Link to={`/deliveryinfo/update/${deliveryinfo._id}`}> <button style={{background:"blue",color:"white",borderRadius:"10px",position:"relative",margin:"50px"}}>update</button></Link> 
            
        </div>
       
        </div>
      ))}
    </div>
      </div>
    
    </>
   

 
    
    )
}  