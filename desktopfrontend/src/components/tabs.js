import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PendingTable from './pendingtable';
import ReadytoshipTable from './readytoshiptable';
import ShippedTable from './shipped';
import DeliveredTable from './deliveredtable';
import ReturnedTable from './returnedtable';
import CancelledTable from './cancelledtable';
import Searchbar from './search';
import { useState } from 'react';

function DashTabs() {
  const[key,setkey]=useState('pending');
  return (
    <Tabs
    activeKey={key}
      defaultActiveKey="pending"
      onSelect={(k)=>setkey(k)}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
       
      <Tab eventKey="pending" title="pending">
      <div style={{marginTop:"40px",marginLeft:"40%"}}><Searchbar comp="pending "/></div>
       <div style={{background:"#f8ad9d",marginTop:"-50px"}}><PendingTable/></div>
          
      </Tab>
      <Tab eventKey="ready to ship" title="ready to ship">
      <div style={{marginTop:"40px",marginLeft:"40%"}}><Searchbar/></div>
      <div style={{background:"#f8ad9d",marginTop:"-50px"}}><ReadytoshipTable/></div>
      </Tab>
      <Tab eventKey="shipped" title="shipped" >
      <div style={{marginTop:"40px",marginLeft:"40%"}}><Searchbar/></div>
      <div style={{background:"#f8ad9d",marginTop:"-50px"}}><ShippedTable/></div>
      </Tab>
      <Tab eventKey="delivered" title="delivered" >
      <div style={{marginTop:"40px",marginLeft:"40%"}}><Searchbar/></div>
      <div style={{background:"#f8ad9d",marginTop:"-50px"}}><DeliveredTable/></div>
      
      </Tab>
      <Tab eventKey="returned" title="returned" >
      <div style={{marginTop:"40px",marginLeft:"40%"}}><Searchbar/></div>
      <div style={{background:"#f8ad9d",marginTop:"-50px"}}><ReturnedTable/></div>
      
      </Tab>
      <Tab eventKey="cancelled" title="cancelled" >
      <div style={{marginTop:"40px",marginLeft:"40%"}}><Searchbar/></div>
      <div style={{background:"#f8ad9d",marginTop:"-50px"}}>< CancelledTable/></div>
      
      </Tab>
      <Tab eventKey="report" title="report" >
      
      </Tab>
    </Tabs>
  );
}

export default DashTabs;