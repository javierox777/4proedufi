const {Schema, model} = require("mongoose")


const schemaAlumno = new Schema({
    run:String,
    nombre:String,
    apellido:String,
    fec_nac:String,
    imc:String,
    peso:String,
    curso:String,
    edad:Number,
    gmail:String
    
})

module.exports = model("alumnos", schemaAlumno )