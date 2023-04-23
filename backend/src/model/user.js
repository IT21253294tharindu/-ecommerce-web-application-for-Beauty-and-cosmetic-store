const mongoose = require("mongoose");
const schema= mongoose.Schema;

const userschema=new schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    

})

const user=mongoose.model("user",userschema);
module.exports=user;