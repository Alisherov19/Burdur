const { fa } = require("zod/v4/locales");
const app = require("./app")
const sequelize = require("./config/db.config")
require("dotenv").config()
const port = process.env.PORT || 5000
const connectDb = async()=>{
   try{
     await sequelize.authenticate()
    console.log("DB connected");
    await sequelize.sync({force:false})
    // await sequelize.sync({alter:true})
    console.log("DB synced");
    app.listen(port,()=>{
        console.log("SERVER RUNNING",port);
    })
   }catch(err){
    console.log("error in db :",err);
   }
};connectDb()
