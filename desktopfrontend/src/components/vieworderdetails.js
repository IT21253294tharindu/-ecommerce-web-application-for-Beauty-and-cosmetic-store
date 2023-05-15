import axios from "axios";
import React, { useState, useEffect,useRef} from "react";
import {useNavigate,useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import {useReactToPrint} from "react-to-print"
import{FiDownload} from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewOrder(){
  
  const componentPdf=useRef();
  const{id}=useParams();
  const navigate=useNavigate();

  
  const [showModal, setShowModal] = useState(true);
  const [order, setorder] = useState('');
  const[orderdata,setorderdata]=useState([]);


function Showdetails()

{ 
  axios.get(`http://localhost:4000/order/${id}`).then((res)=>{
       setorderdata(res.data.orderItem)
       setorder(res.data)
       })
    
  }
  useEffect(()=>{
   Showdetails();
  },[])


  const generateinvoice=useReactToPrint({
    content:()=>componentPdf.current,
    documentTitle:"Invoice",
    onAfterPrint:()=>toast.success('Invoice Saved!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }),
    customHeadElements: () => (
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
    ),
  });

  const formattedOrderDate = order && order.orderDate ? new Date(order.orderDate).toISOString().substring(0, 10) : "";
        return(
        
            <>{showModal && (
                  <div 
                    className="modal show"
                    style={{ display: 'block', position: "fixed" ,marginTop:"100px"}}
                  >
                    <Modal.Dialog size="xl" >
                   
                      <Modal.Header closeButton onClick={() => {setShowModal(false);navigate('/order/');}}>
                        <Modal.Title>Order Details</Modal.Title>
                      </Modal.Header>
              
                      <Modal.Body style={{maxHeight: "calc(100vh - 200px)", overflowY: "auto"}}>
                        <div ref={componentPdf} style={{width:"100%"}}>
                        <div
                          style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "30px",
                         }}
                        >
                    <img
                      src="/logo2.png"
                      alt="logo"
                      style={{ maxWidth: "100%", height: "auto" }}
                     />
                     <h2 style={{alignContent:"center",marginTop:"100px",fontFamily:"serif"}}>ATL Beauty Store</h2>
                </div>
                      <Card  style={{background:"#c6cfba" ,fontFamily:"serif"}}>
                       <Card.Body>
                       <Card.Text style={{textAlign:"initial"}}>
                        <p ><strong>order Date: </strong>{formattedOrderDate}</p>
                        <p ><strong>delivery address:</strong> {order.deliveryinfo}</p>
                        <p ><strong>Payment Method:   </strong>{order.paymentMethod}</p>
                        <p ><strong>username: </strong> {order.username}</p>
                        <h6><strong>Total Price:</strong> Rs.  {order.totalprice}/=</h6>
                       </Card.Text>
                       
            


                       </Card.Body>
                       </Card>
                        
                          <Table style={{marginTop:"10%",background:"#5555"}}>
                            <thead>
                                <tr>
                                 <th>product ID</th>
                                 <th>product Name </th>
                                 <th>quantity</th>
                                 <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderdata.map((o,i)=>{
                                    return(
                                        <tr key={i}>
                                            <td>{o.product}</td>
                                            <td>{o.productName}</td>
                                            <td>{o.quantity}</td>
                                            <td>{o.price}</td>

                                        </tr>



                                    )
                                  
  
                                
                                    })}


                            </tbody>
 
                          </Table><br></br><br/>
                       



                       </div>
                    
                      
                      <Button style={{marginLeft:"40px"}} variant="danger"onClick={() => {setShowModal(false);navigate('/order/');}}>Close</Button>
                      <Button style={{alignItems:"end",padding:"5px",marginLeft:"10px"}} onClick={generateinvoice}  variant="primary" > <FiDownload style={{ marginRight: "5px" }} />Download</Button>
                      </Modal.Body>
                      
                      <Modal.Footer>
                      
                     
                        
                       
                      </Modal.Footer>
                      
                    </Modal.Dialog>
                  </div>
          
      
      
)}<ToastContainer/></>)

    
   
}