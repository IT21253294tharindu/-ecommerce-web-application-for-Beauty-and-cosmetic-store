
const Router=require("express").Router();
let deliveryinfo=require("../model/deliveryinfo");
const { findByIdAndDelete, findOne,findById } = require("../model/deliveryinfo");
import mongoose from "mongoose";
import logger from "../utils/logger";

Router.route("/add").post(async(req,res)=>{

 const userid=req.body.user;
  const name=req.body.name;
  const address=req.body.address;
  const city=req.body.city;
  const state=req.body.state;
  const postalcode=Number(req.body.postalcode);
  const contactno=req.body.contactno;

const newdeliveryinfo=new deliveryinfo({
    
    userid,
    name,
    address,
    city,
    state,
    postalcode,
    contactno
})
 newdeliveryinfo.save().then(()=>{
    res.json("delivery info Added")
 })
 .catch((err)=>{
    logger.error(err.message);

 })
})
Router.route("/").get((req,res)=>{
    deliveryinfo.find().then((deliveryinfos)=>{
        res.json(deliveryinfos)

    })
    .catch((err)=>{
        logger.error(err.message);

    })

})


Router.route("/update/:id").put(async(req,res) => {
    let deliveryid=req.params.id;
    const{name,address,city,state,postalcode,contactno}=req.body;

    const updatedeliveryinfo={
        name,
        address,
        city,
        state,
        postalcode,
        contactno
    }

    const update= await deliveryinfo.findByIdAndUpdate(deliveryid,updatedeliveryinfo).then(()=>{
        res.status(200).send({status:"deliveryinfo updated"})

    }).catch((err)=>{
        logger.error(err)
        res.status(500).send({status:"error with updating"});

    })
})

    Router.route("/:id").get((req,res)=>{

        let deliveryid=req.params.id;
        
        deliveryinfo.findById(deliveryid).then((deliveryinfos)=>{
                res.json(deliveryinfos)
           
               })
               .catch((err)=>{
                   logger.error(err.message);
           
               })
           
           })
         

    
    Router.route("/delete/:id").delete(async(req,res)=>{
        let deliveryid=req.params.id;

        await deliveryinfo.findByIdAndDelete(deliveryid).then(()=>{
            res.status(200).send({status:"deliveryinfo deleted!"})

        }).catch((err)=>{
            logger.error(err);
            res.status(500).send({status:"error with deleting",error:err.message});
        })
    })



module.exports=Router;