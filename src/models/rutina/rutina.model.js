const {Schema, model} = require("mongoose")


const schemaRutina = new Schema({
   tiemp:String,
   tiempo_descan:String,
   ejercicios:String
})

module.exports = model("rutina", schemaRutina )