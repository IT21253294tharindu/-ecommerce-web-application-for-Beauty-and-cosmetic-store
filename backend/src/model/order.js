const mongoose = require("mongoose");
const schema= mongoose.Schema;

const orderschema=new schema({
    orderid:{
        type:mongoose.Schema.Types.ObjectId
    },

    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Cart"

     },
     orderItem:[{
        
        product: { type: mongoose.Schema.Types.ObjectId,ref:'Products',required:true},
        productName:{ type: String },
        description:{ type: String },
        quantity: { type: Number, default: 1,required:true},
        price: { type:Number}
        
     }],
     deliveryinfo:{
        type:String,
        required:true
       

    },
    customer_id:{
        type:String
        
    },
    username:{
        type:String
    },

    orderstatus:{
        type:String,
        default:"pending"
    }, 
    
    paymentStatus:{
        type:String,
        default:"unpaid"
    },
    totalprice:{
        type:Number
    },

    paymentMethod:{
        type:String

    },
    orderDate:{
        type:Date,
        default:Date.now
    }

    
    

},{timestamps:true})

const order=mongoose.model("order",orderschema);
module.exports=order;