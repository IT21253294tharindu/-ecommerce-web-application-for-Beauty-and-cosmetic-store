const mongoose = require("mongoose");
const schema= mongoose.Schema;

const deliveryschema= new schema({

   
    name:{
        type:String,
        

    },

    address:{
        type:String,
       
    },
    city:{
        type:String,
        
    },
    state:{
        type:String,
        
    },
    postalcode:{
        type:Number,
       
    },

    contactno:{
        type:Number,
       
        
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }

 },{timestamps:true})

const deliveryinfo=mongoose.model("deliveryinfo",deliveryschema);

module.exports=deliveryinfo;
