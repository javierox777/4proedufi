const {Schema, model} = require("mongoose")


const schemanoti = new Schema({
    calendario:Number,
    rutina:String
})
   

module.exports = model("noti.model", schemanoti )