const mongoose = require("mongoose");
const schema= mongoose.Schema;

const refundorderschema=new schema({
    orderid:{
        type:mongoose.Schema.Types.ObjectId
    },

     orderItem:[{
        
        product: { type: mongoose.Schema.Types.ObjectId,ref:'Products',required:true},
        productName:{ type: String },
        description:{ type: String },
        quantity: { type: Number, default: 1,required:true},
        price: { type:Number}
        
     }],
     
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    refundstatus:{
        type:String,
        
       
    }, 
    
   
    totalprice:{
        type:Number
    },

    paymentMethod:{
        type:String

    },
   refundedDate:{
        type:Date,
        default:Date.now
    }

    
    

},{timestamps:true})

const returnedorder=mongoose.model("refundorder",refundorderschema);
module.exports=returnedorder;