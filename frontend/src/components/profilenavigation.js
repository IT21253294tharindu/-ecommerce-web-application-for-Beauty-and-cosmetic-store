import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";

function ProfileNavigation() {
  return (
    <ButtonGroup aria-label="Basic example" style={{position:"relative",alignContent:"center"}}>
    <Link to=""><Button variant="secondary" >Personal informations</Button></Link>
    <Link to="/deliveryinfo"><Button variant="secondary" >Delivery informations</Button></Link>
    <Link to=""><Button variant="secondary" >Purchased history</Button></Link>
    </ButtonGroup>
  );
}

export default ProfileNavigation;