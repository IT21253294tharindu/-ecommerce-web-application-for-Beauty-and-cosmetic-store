

const express= require("express");
const cors=require('cors');
const dotenv=require('dotenv/config');
const connect=require("./utils/database.connection");
const bodyParser=require('body-parser');
const app=express();
const PORT =process.env.PORT||"4000";

app.use(cors());
app.use(express.json({limit:"20mb"}));
app.use(bodyParser.json());

const deliveryRouter=require("./Routes/deliveryinfos");
app.use("/deliveryinfo",deliveryRouter);

const userRouter=require("./Routes/userinfo");
app.use("/userinfo",userRouter);

const orderRouter=require("./Routes/orders");
app.use("/order",orderRouter);

app.get("/",(req,res,next)=>{
res.send("<h2>ATL Beauty store</h2>");
next();
});
const server=app.listen(PORT, ()=> {
    console.log(`server is up and running on port ${PORT}`);
    connect();
});
server.on("error",(error)=>{
    console.error(`SERVER ERROR:${error}`);
})

