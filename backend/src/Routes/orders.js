const logger=require("../utils/logger");
const Router=require("express").Router();
let order=require("../model/order");
const user = require("../model/user");
const Stock =require("../model/stock");
const { default: mongoose } = require("mongoose");
const stock = require("../model/stock");
const refundorder = require("../model/refundorder");
const cancelorder=require("../model/cancelledorder")


Router.route("/add").post((req,res)=>{
        const ObjectId=mongoose.Types.ObjectId;
        const orderid= new ObjectId();
        const cartId=req.body.cartId;
        const orderItem=req.body.orderItem.map(item=>({
         product:item.product,
         productName:item.productName,
         description:item.description,
         quantity:item.quantity,
         price:item.price
        }));

        const orderstatus=order.orderstatus;
        const deliveryinfo=req.body.deliveryaddress;
        const paymentStatus=req.body.paymentStatus;
        const paymentMethod=req.body.paymentMethod;
        const totalprice=Number(req.body.totalprice);
        const customer_id=req.body.userId;
        


        const neworder=new order({ 
            orderid,
            cartId,
            deliveryinfo,
            orderItem,
            paymentStatus,
            paymentMethod,
            totalprice,
            orderstatus,
            customer_id,
            orderDate:new Date()
            
        
        })
        neworder.save().then(()=>{
            res.json("order added")
         })
         .catch((err)=>{
            logger.error(err.message);
        
         })       

    })
       
    Router.route("/").get((req,res)=>{
   
        order.find({paymentStatus:"paid"} && {orderstatus:"pending"}).then((orders)=>{
         res.json(orders)

         })
         .catch((err)=>{
            logger.error(err.message);
    
        })
            
 
     })

     Router.route("/ready").get((req,res)=>{
   
        order.find({orderstatus:"ready to ship"}).then((orders)=>{
         res.json(orders)

         })
         .catch((err)=>{
            logger.error(err.message);
    
        })
            
 
     })
     Router.route("/shipped").get((req,res)=>{
   
        order.find({orderstatus:"shipped"}).then((orders)=>{
         res.json(orders)

         })
         .catch((err)=>{
            logger.error(err.message);
    
        })
            
 
     })
     Router.route("/delivered").get((req,res)=>{
   
        order.find({orderstatus:"delivered"}).then((orders)=>{
         res.json(orders)

         })
         .catch((err)=>{
            logger.error(err.message);
    
        })
            
 
     })
     Router.route("/returned").get((req,res)=>{
   
        order.find({orderstatus:"returned"}).then((orders)=>{
         res.json(orders)

         })
         .catch((err)=>{
            logger.error(err.message);
    
        })
            
 
     })
     Router.route("/cancelled").get((req,res)=>{
   
        order.find({orderstatus:"cancelled"}).then((orders)=>{
         res.json(orders)

         })
         .catch((err)=>{
            logger.error(err.message);
    
        })
            
 
     })


        


Router.route("/:id").get((req,res)=>{
    let orderid=req.params.id;
    order.findById(orderid).then((orders)=>{
        res.json(orders)

    })
    .catch((err)=>{
        logger.error(err.message);

    })
})

 Router.route("/update/:id").put(async(req,res)=>{
        let orderid=req.params.id;

            const orderstatus=req.body.orderstatus;

            const updateorder={
                orderstatus
            }

            const update=await order.findByIdAndUpdate(orderid,updateorder).then(()=>{
                res.status(200).send({status:"orderstatus updated"})
        
            }).catch((err)=>{
                logger.error(err)
                res.status(500).send({status:"error with updating"});
        
            })

        })



        Router.route("/cancel/:id").put(async(req,res)=>{
            let orderid=req.params.id;
           
           
                const updateorder={
                    orderstatus:"cancelled"
                }
                const update=await order.findByIdAndUpdate(orderid,updateorder).then(()=>{
                    res.status(200).send({status:"orderstatus updated"})
                })
                    .catch((err)=>{
                        logger.error(err)
                        res.status(500).send({status:"error with updating"});
                
                    })
        
      })
                
     
    
         
            

            
 Router.route("/delete/:id").delete(async(req,res)=>{
            let orderid=req.params.id;
    
            await order.findByIdAndDelete(orderid).then(()=>{

                res.status(200).send({status:`order ${orderid} deleted!`})
    
            }).catch((err)=>{
                logger.error(err);
                res.status(500).send({status:"error with deleting",error:err.message});
            })
        })
    
        Router.route("/refund/:id").delete(async(req,res)=>{
            let orderid=req.params.id;
            
            const RefundOrder=new refundorder(
                {
                    orderItem:order.orderItem,
                    customer_id:order.customer_id,
                    refundstatus:"not refunded",
                    totalprice:order.totalprice,
                    paymentMethod:order.paymentMethod,
                    returnedDate:new Date()
                     })
            await RefundOrder.save();

           order.orderItem.forEach(async(item) => {
            const {product,quantity}=item;
            const existingproduct=await Stock.findOne({prodID:product});

            if(existingproduct)
            {
                existingproduct.NoOfUnits+=quantity;
                await existingproduct.save();
            }

           });


            await order.findByIdAndDelete(orderid).then(()=>{

                res.status(200).send({status:`order ${orderid} deleted!`})
    
            }).catch((err)=>{
                logger.error(err);
                res.status(500).send({status:"error with deleting",error:err.message});
            })
        })
     
    



module.exports=Router;