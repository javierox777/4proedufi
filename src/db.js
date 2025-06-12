const mongoose = require("mongoose")

const uri ="mongodb://localhost/martin"

mongoose.connect(uri)

const connections = mongoose.connection

connections.once("open", ()=>{
    console.log("db is connected")
})