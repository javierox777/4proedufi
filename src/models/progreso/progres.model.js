const {Schema, model} = require("mongoose")


const schemaprogreso = new Schema({
    pesoinicial:String,
    pesofinal:String
  
})

module.exports = model("progreso", schemaprogreso )