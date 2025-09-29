const {Schema, model} = require("mongoose")


const schemaEjer = new Schema({
    tiempo:String,
    tipo:String,
    url:String
})

module.exports = model("ejer", schemaEjer )