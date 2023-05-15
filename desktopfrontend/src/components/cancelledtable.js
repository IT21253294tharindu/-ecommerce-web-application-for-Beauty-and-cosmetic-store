import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MDBCol, MDBIcon } from "mdbreact";
import { Link} from "react-router-dom";
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
  const [search,setsearch]=useState('')
  console.log(search)

  return (
    <><div style={{marginTop:"100px",marginLeft:"40%"}}><MDBCol md="8">
    <form className="form-inline mt-4 mb-4">
      <MDBIcon icon="search" />
      <input className="form-control form-control-sm ml-3 w-75" type="text" onChange={(e)=>setsearch(e.target.value)} placeholder="Search" aria-label="Search" />
    </form>
  </MDBCol></div>
    <Table style={{marginTop:"10%" ,background:"#5555"}}  >
      <thead>
        <tr>     
          <th>order Date</th>
          <th>order Status</th>
          <th> Delivery Info</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {order.filter((item)=>{
          return search.toLowerCase()==='' ? item:item.deliveryinfo?.toLowerCase().includes(search)||item.orderDate?.toLowerCase().includes(search);
          
        }).map((o,i)=>{
          return(
          <tr key={i}>
          <td>{new Date(o.orderDate).toISOString().substring(0,10)}</td>
          <td><Button variant='danger'>{o.orderstatus}</Button></td>
          <td>{o.deliveryinfo}</td>
          <td><Link to={`/order/view/${o._id}`}><Button variant='success'>view order</Button></Link></td>
        
         </tr>

 
        )})}
       
      </tbody>
    </Table >
     
    
  </>)
 }

export default CancelledTable;