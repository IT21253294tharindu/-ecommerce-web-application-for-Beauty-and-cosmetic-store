import axios from "axios";
import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateDeliveryinfo(){

  const{id}=useParams();
       const[deliveryinfos,setdeliveryinfos]=useState({
        name:'',
        address:'',
        contactno:'',
        city:'',
        state:'',
        postalcode:''
       });

        const navigate=useNavigate();
       
        
        useEffect(()=>{
      
            axios.get(`http://localhost:4000/deliveryinfo/`+id).then((res)=>{
                      setdeliveryinfos(res.data);
              }).catch((err)=>{
                  console.log(err);
              })        
            
    },[])

     
    
    
        
        function sendData(e) {
          e.preventDefault();
         
          axios.put(`http://localhost:4000/deliveryinfo/update/`+id,deliveryinfos).then(() => {  
          alert("delivery info updated successfully!");
           navigate('/deliveryinfo')
        }).catch((err) => {
        alert(err);
         })




        }
        
          
          
        
    



    return(

    
<>
      <div className='container' style={{ marginTop: "150px", backgroundColor: "#f8ad9d", borderRadius: "20px", width: "800px", fontFamily: "italic" }}>
       
        <Form  onSubmit={sendData} style={{ fontWeight: "bold" }} >
          <Form.Label style={{ textAlign: "center", fontWeight: 'bold', marginTop: "30px", color: "black", fontSize: "30px", fontFamily: "italic" }}>Delivery informations</Form.Label><hr />
          <Form.Group className="mb-3" controlId="formGroupname">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={deliveryinfos.name} onChange={(e) =>  setdeliveryinfos({...deliveryinfos,name: e.target.value}) }  required/>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupaddress">
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="street address"   onChange={(e) => setdeliveryinfos({...deliveryinfos,address: e.target.value}) }value={deliveryinfos.address} required /><br></br>
            <Row>
              <Col xs={7}>
                <Form.Label>Contact No</Form.Label>
                <Form.Control placeholder="contact no"   onChange={(e) => setdeliveryinfos({...deliveryinfos,contactno: e.target.value}) }value={deliveryinfos.contactno} required/>
              </Col>
              <Col xs={5}>
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City"  onChange={(e) => setdeliveryinfos({...deliveryinfos,city: e.target.value}) } value={deliveryinfos.city} required/>
              </Col>
            </Row ><br></br>
            <Row>

              <Col>
                <Form.Label>Province</Form.Label>
                <Form.Control placeholder="State"   onChange={(e) =>  setdeliveryinfos({...deliveryinfos,state: e.target.value}) } value={deliveryinfos.state}  required/>
              </Col>
              <Col>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control placeholder="Zip"   onChange={(e) =>  setdeliveryinfos({...deliveryinfos,postalcode: e.target.value}) } value={deliveryinfos.postalcode} required/>
              </Col>
            </Row>


          </Form.Group>
          <br></br><br></br>

          
          <div class="col-12" style={{ marginLeft: "-50px", marginTop: "15px" }}>
            <button class="btn btn-primary" type="submit">Update</button>
          </div>
          <div class="col-12" style={{ marginLeft: "80px", marginTop: "-38px" }}>
            <Link to='/deliveryinfo'>
              <button class="btn btn-danger" type="button" >cancel</button></Link>
          </div><br></br><br></br>

        </Form>
        
      </div>
    </>


  );

}