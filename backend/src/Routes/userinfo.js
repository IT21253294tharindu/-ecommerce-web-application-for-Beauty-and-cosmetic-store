const logger=require("../utils/logger");
const Router=require("express").Router();
let userinfo=require("../model/user");


Router.route("/add").post((req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
     
  
  const newuserinfo=new userinfo({
      name,
      email,
      
  })
   newuserinfo.save().then(()=>{
      res.json("user Added")
   })
   .catch((err)=>{
      logger.error(err.message);
  
   })
  
  })
  
  Router.route("/").get((req,res)=>{
      user.findById(id).then((userinfos)=>{
          res.json(userinfos)
  
      })
      .catch((err)=>{
          logger.error(err.message)
  
      })
  
  })

  
  
  module.exports=Router;
