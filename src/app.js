const express = require("express")
const app = express()
//imports
const router = require("./routes/index")
const { errorHandler } = require("./middlewares/errorHandler")
//Imports
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Route
app.use("/api", router)
//error
app.use(errorHandler)

module.exports = app