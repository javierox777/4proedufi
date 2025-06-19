const {Schema, model} = require("mongoose")


const schemaAlumno = new Schema({
    rut: String,
    nombre: String,
    apellido: String,
    curso: Number,
    altura: Number,
    peso: Number
})

module.exports = model("alumnos", schemaAlumno )