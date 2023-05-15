import React,{useState,useEffect} from "react";
import "./deliveryinfo.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProfileNavigation from "../components/profilenavigation";
import Homeheader from "../components/Homeheader";
import Homefooter from "../components/Homefooter";
import Card from 'react-bootstrap/Card';
import {AiFillDelete,AiFillEdit} from "react-icons/ai"; 


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
    
      const layout=({children})=>{
        return(
          <main style={{ minHeight: "80vh" }}>{children}</main>

        )
      }
 

    return(


   <>
   <Homeheader/>
   <ProfileNavigation/>
   <div className="iconplus">
    <Link to="/addDeliveryinfo" className="nav-link"><Fab color="primary" aria-label="add">
    <AddIcon /><br/></Fab></Link>
    <Link to="/addDeliveryinfo" id="label1" style={{textDecoration:"none"}} >add new delivery address</Link>
    </div>
      
        
    
      {deliveryinfos && deliveryinfos.map((deliveryinfo)=>(
       
         
        <Card  style={{background:"#dee1e3" ,borderRadius:"10px",fontFamily:"Fira Sans",width:"50%",marginLeft:"20%",marginBottom:"2%",justifyContent:"flex",border: "1px solid #dee2e6",padding: "1rem", color: "#212529",boxShadow: "0 4px 8px rgba(0, 0, 0.1, 0.3)"}} key={deliveryinfo._id} >

         <Card.Body>
          <Card.Text style={{textAlign:"center"}} >
          <dev>
           <input name="address" type="radio"/>
           </dev>
          
            <p><strong>Name :{deliveryinfo.name}</strong></p>
            <p><strong>Address: {deliveryinfo.address}</strong></p>
            <p><strong>City: {deliveryinfo.city}</strong></p>
            <p><strong>State: {deliveryinfo.state}</strong></p>
            <p><strong>Postalcode: {deliveryinfo.postalcode}</strong></p>
            <p><strong>contact no: {deliveryinfo.contactno}</strong></p><br/><br/>
           <div><Button variant="danger" onClick={()=>deleteDeliveryinfo(deliveryinfo._id)}  style={{marginLeft:"-20%"}} >Delete<AiFillDelete style={{ marginLeft: "5px" }}/></Button></div>
          <div><Link to={`/deliveryinfo/update/${deliveryinfo._id}`}> <Button variant="primary" style={{marginTop:"-7.5%",marginLeft:"15%"}}><AiFillEdit style={{marginRight: "5px" }}/>update</Button></Link>  </div>
          </Card.Text>
        </Card.Body>
        </Card>
        
       
        
       
        
      ))} 

      
    <Homefooter/>
    </>
   

 
    
    )
}  