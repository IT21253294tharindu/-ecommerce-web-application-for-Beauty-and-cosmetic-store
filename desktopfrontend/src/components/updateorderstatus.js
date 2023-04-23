import axios from "axios";
import React, { useState,useContext} from "react";
import {useNavigate,useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderContext from "./ordercontext";




export default function UpdateorderStatus(){
    
  const{id}=useParams();
  const navigate=useNavigate();

  const [selectedStatus,setselectedStatus]=useState('');
  const [showModal, setShowModal] = useState(true);
  const [order, setorder] = useContext(OrderContext);


const Statusoption=[
  { label:"select order status"},
  { label:"pending", value:"pending"},
  { label:"ready to ship", value:"ready to ship"},
  { label:"shipped", value:"shipped"},
  { label:"delivered", value:"delivered"},
  { label:"returned", value:"returned"}
]

  




function HandleupdateStatus()

{ 
  


  axios.put(`http://localhost:4000/order/update/${id}`,{orderstatus:selectedStatus}).then(()=>{
        alert("order status updated!");
        setShowModal(false);
        navigate('/order/');

        
        setorder(order.map((o)=>{
          if(o._id===id){
           return {...o,orderstatus:selectedStatus};
          }else{
            return 0;
          }
        })
      );

       }).catch((err)=>{
        console.log(err);
    })
  }

    return(
      <>{showModal && (
            <div 
              className="modal show"
              style={{ display: 'block', position: "fixed" ,marginTop:"150px"}}
            >
              <Modal.Dialog >
             
                <Modal.Header closeButton onClick={() => {setShowModal(false);navigate('/order/');}}>
                  <Modal.Title>Order Status</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                
                <select id="dropdown-basic-button" value={selectedStatus} onChange={(e)=>setselectedStatus(e.target.value)} >   
                {Statusoption.map((option)=>(
                 <option key={option.value} value={option.value}>{option.label}</option>
                )

                )}
                    
                </select><br></br><br></br><br></br>
                <Button variant="primary" onClick={HandleupdateStatus} disabled={!selectedStatus || selectedStatus === order.find((o) => o._id === id)?.orderstatus || selectedStatus === "select order status"}>Update status</Button>
                <Button style={{marginLeft:"40px"}} variant="secondary"onClick={() => {setShowModal(false);navigate('/order/');}}>Close</Button>
                </Modal.Body>
                
                <Modal.Footer>
                
               
                  
                 
                </Modal.Footer>
                
              </Modal.Dialog>
            </div>
    )}


</>)
}