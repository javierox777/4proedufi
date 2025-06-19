const {Schema, model} = require("mongoose")


const schemaAlumno = new Schema({
    run:String,
    nombre:String,
    nombre_usuario:String,
    apellido:String,
    email:String,
    password:String,
    genero:String,
    curso:String,
    edad:Number,
    fec_nac:String,
    altura:String,
    peso:String
})

module.exports = model("alumnos", schemaAlumno )