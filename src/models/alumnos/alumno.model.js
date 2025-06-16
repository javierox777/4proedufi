const {Schema, model} = require("mongoose")


const schemaAlumno = new Schema({
    run: String,
    nombre:String,
    apellido:String,
    fec_nac:Date,
    IMC:String,
    peso:String,
    curso:String
})

module.exports = model("alumnos", schemaAlumno )