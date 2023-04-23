const mongoose = require("mongoose");
const schema= mongoose.Schema;

const cancelorderschema=new schema({
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
        type:String
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderstatus:{
        type:String,
        default:"cancelled"
    }, 
    reason:{
        type:String
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
    cancelledDate:{
        type:Date,
        default:Date.now
    }

    
    

},{timestamps:true})

const cancelorder=mongoose.model("cancelorder",cancelorderschema);
module.exports=cancelorder;