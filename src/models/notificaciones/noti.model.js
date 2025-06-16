const {Schema, model} = require("mongoose")


const schemaEjer = new Schema({
    calendario,
    rutina
})
   

module.exports = model("ejer", schemaEjer )