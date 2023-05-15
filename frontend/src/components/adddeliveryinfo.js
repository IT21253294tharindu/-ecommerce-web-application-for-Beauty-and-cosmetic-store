import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homeheader from './Homeheader';
import Homefooter from './Homefooter';

function AddDeliveryinfo() {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactno] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalcode] = useState("");
 
  const navigate=useNavigate();
 
  

  function sendData(e) {
    e.preventDefault();
    
  
  const newdeliveryAddress = {
    name,
    address,
    contactno,
    city,
    state,
    postalcode
    
  }
  axios.post("http://localhost:4000/deliveryinfo/add", newdeliveryAddress).then(() => {
    toast.success('Delivery info Added Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


      const timer = setTimeout(() => {
        navigate('/deliveryinfo');
      }, 2000);
      return () => clearTimeout(timer);
    
    
  }).catch((err) => {
    alert(err);
  })
}
  return (

    <><Homeheader/>
      <div className='container' style={{ marginTop: "50px", backgroundColor: "#5555", borderRadius: "20px", width: "800px", fontFamily: "italic",marginBottom:"30px"}}>
       
        <Form  onSubmit={sendData} style={{ fontWeight: "bold" }} >
          <Form.Label style={{ textAlign: "center", fontWeight: 'bold', marginTop: "30px", color: "black", fontSize: "30px", fontFamily: "italic" }}>Delivery informations</Form.Label><hr />
          <Form.Group className="mb-3" controlId="formGroupname">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"  onChange={(e) => { setName(e.target.value) }} required/>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupaddress">
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="street address"  onChange={(e) => { setAddress(e.target.value) }} required /><br></br>
            <Row>
              <Col xs={7}>
                <Form.Label>Contact No</Form.Label>
                <Form.Control placeholder="contact no"  onChange={(e) => { setContactno(e.target.value) }} required/>
              </Col>
              <Col xs={5}>
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City" onChange={(e) => { setCity(e.target.value) }} required/>
              </Col>
            </Row ><br></br>
            <Row>

              <Col>
                <Form.Label>Province</Form.Label>
                <Form.Control placeholder="State"  onChange={(e) => { setState(e.target.value) }}required/>
              </Col>
              <Col>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control placeholder="Zip"  onChange={(e) => { setPostalcode(e.target.value) }} required/>
              </Col>
            </Row>


          </Form.Group>
          <br></br><br></br>

          <input class="form-check-input" type="checkbox" style={{ padding: "5px", marginTop: "10px" }} required/>
          <label style={{ padding: "5px", marginLeft: "5px" }}>Given information are correct!</label><br></br><br></br>

          <div class="col-12" style={{ marginLeft: "-50px", marginTop: "15px" }}>
            <Button variant='primary' type="submit">Submit</Button>
          </div>
          <div class="col-12" style={{ marginLeft: "80px", marginTop: "-38px" }}>
            <Link to='/deliveryinfo'>
              <Button variant='danger'>cancel</Button></Link>
          </div><br></br><br></br>

        </Form>
        
      </div>
      <ToastContainer/>
      <Homefooter/>
    </>


  );
}

export default AddDeliveryinfo;