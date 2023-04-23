import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import { Link} from "react-router-dom";


function ShippedTable() {


const [order, setorder] = useState([]);

 
  function getorder(){
    
    axios.get("http://localhost:4000/order/shipped").then((res)=>
    {
     setorder(res.data);
     
    })
    .catch((err)=>{
      alert(err);
    })
    

  }
  useEffect(()=>{

    getorder();
    
  })

  return (
    
    <Table style={{marginTop:"10%" ,background:"#f8ad9d"}}  >
      <thead>
        <tr>     
          <th>orderID</th>
          <th>order Status</th>
          <th> </th>
          <th> </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {order.map((o,i)=>{
          return(
          <tr key={i}>
          <td>{o._id}</td>
          <td><Link to={`/order/update/${o._id}`}><button style={{borderRadius:"5px"}}>{o.orderstatus}</button></Link></td>
          <td><a href='/vieworderdetails'>view order details</a></td>
          <td><button style={{borderRadius:"5px",background:"blue",fontWeight:"bold",color:"white"}}>Invoice</button></td>
          <td><button style={{borderRadius:"5px",background:"red",fontWeight:"bold",color:"white"}}>cancel</button></td>
         </tr>

 
        )})}
       
      </tbody>
    </Table >
     
    
  )
 }

export default ShippedTable;