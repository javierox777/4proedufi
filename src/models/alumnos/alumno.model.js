const {Schema, model} = require("mongoose")


const schemaAlumno = new Schema({
    nombre:String,
    apellido:String,
    edad:Number
})

module.exports = model("alumnos", schemaAlumno )