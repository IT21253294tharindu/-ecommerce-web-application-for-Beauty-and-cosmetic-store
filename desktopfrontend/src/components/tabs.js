import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PendingTable from './pendingtable';
import ReadytoshipTable from './readytoshiptable';
import ShippedTable from './shipped';
import DeliveredTable from './deliveredtable';
import ReturnedTable from './returnedtable';
import CancelledTable from './cancelledtable';
import { useState } from 'react';
import Paginations from './pagination';

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
      
       <div style={{marginTop:"-50px",width:"80%",marginLeft:"10%"}}><PendingTable/></div>
       <div style={{marginLeft:"35%"}}><Paginations/></div>
          
      </Tab>
      <Tab eventKey="ready to ship" title="ready to ship">
      
      <div style={{marginTop:"-50px",width:"80%",marginLeft:"10%"}}><ReadytoshipTable/></div>
      <div style={{marginLeft:"35%"}}><Paginations/></div>

      </Tab>
      <Tab eventKey="shipped" title="shipped" >
     
      <div style={{marginTop:"-50px",width:"80%",marginLeft:"10%"}}><ShippedTable/></div>
      <div style={{marginLeft:"35%"}}><Paginations/></div>

      </Tab>
      <Tab eventKey="delivered" title="delivered" >
     
      <div style={{marginTop:"-50px",width:"80%",marginLeft:"10%"}}><DeliveredTable/></div>
      <div style={{marginLeft:"35%"}}><Paginations/></div>

      
      </Tab>
      <Tab eventKey="returned" title="returned" >
      
      <div style={{marginTop:"-50px",width:"80%",marginLeft:"10%"}}><ReturnedTable/></div>
      <div style={{marginLeft:"35%"}}><Paginations/></div>
      
      </Tab>
      <Tab eventKey="cancelled" title="cancelled" >
    
      <div style={{marginTop:"-50px",width:"80%",marginLeft:"10%"}}>< CancelledTable/></div>
      <div style={{marginLeft:"35%"}}><Paginations/></div>
      
      </Tab>
    </Tabs>
  );
}

export default DashTabs;