import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';


function CancelledTable() {


const [order, setorder] = useState([]);

 
  function getorder(){
    
    axios.get("http://localhost:4000/order/cancelled").then((res)=>
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
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {order.map((o,i)=>{
          return(
          <tr key={i}>
          <td>{o._id}</td>
          <td>{o.orderstatus}</td>
          <td><a href='/vieworderdetails'>view order details</a></td>
          <td><button>Refund</button></td>
         </tr>

 
        )})}
       
      </tbody>
    </Table >
     
    
  )
 }

export default CancelledTable;