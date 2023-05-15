import axios from "axios";
import React, { useState,useContext} from "react";
import {useNavigate,useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderContext from "./ordercontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function UpdateorderStatus(){
    
  const{id}=useParams();
  const navigate=useNavigate();

  const [selectedStatus,setselectedStatus]=useState('');
  const [showModal, setShowModal] = useState(true);
  const [order, setorder] = useContext(OrderContext);


function HandleupdateStatus()

{ 
  


  axios.put(`http://localhost:4000/order/cancel/${id}`,{orderstatus:selectedStatus}).then(()=>{
    toast.success(' Order cancellation Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
        setShowModal(false);
       

        
        setorder(order.map((o)=>{
          if(o._id===id){
           return {...o,orderstatus:selectedStatus};
          }else{
            return 0;
          }
        })
      );
      const timer = setTimeout(() => {
        navigate("/order/");
      }, 2000);
      return () => clearTimeout(timer);

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
                  <Modal.Title>Order cancel</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                <p><strong>do you want to cancel this order?</strong></p>
               
              
                <Button variant="primary" onClick={HandleupdateStatus} >confirm</Button>
                <Button style={{marginLeft:"40px"}} variant="secondary"onClick={() => {setShowModal(false);navigate('/order/');}}>Close</Button>
                </Modal.Body>
                
                <Modal.Footer>
                
               
                  
                 
                </Modal.Footer>
                
              </Modal.Dialog>
            </div>
    )}

         <ToastContainer/>
</>)
}