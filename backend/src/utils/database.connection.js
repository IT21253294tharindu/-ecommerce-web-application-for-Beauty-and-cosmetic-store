require ("dotenv/config");
const mongoose=require("mongoose"); 
const config=require("../config");
const logger = require("./logger");

let database;

async function connect(){
    const mongodb_URL=config.dbconnection_string;

    if(database) return;
    mongoose.connect(mongodb_URL)
    .then((connection)=>{
       database=connection;
       logger.info("database connection successful!")
    
    })
    .catch((err)=>
    {
      logger.error(err.message);
    });

};

module.exports=connect;
