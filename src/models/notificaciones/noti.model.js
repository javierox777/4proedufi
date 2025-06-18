const {Schema, model} = require("mongoose")


const schemanoti = new Schema({
    calendario,
    rutina
})
   

module.exports = model("noti.model", schemanoti.model )