import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";

function ProfileNavigation() {
  return (
    <ButtonGroup aria-label="Basic example" style={{position:"relative",alignContent:"center",marginTop:"10px",gap:"3px"}}>
    <Link to=""><Button variant="dark" >Personal informations</Button></Link>
    <Link to="/deliveryinfo"><Button variant="primary" defaultChecked>Delivery informations</Button></Link>
    <Link to=""><Button variant="dark" >Purchased history</Button></Link>
    </ButtonGroup>
  );
}

export default ProfileNavigation;