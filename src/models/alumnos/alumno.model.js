const {Schema, model} = require("mongoose")


const schemaAlumno = new Schema({
    nombre:String,
    apellido:String,
    edad:Number,
    rut:String
})

module.exports = model("alumnos", schemaAlumno )