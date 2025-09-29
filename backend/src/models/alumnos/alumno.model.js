const {Schema, model} = require("mongoose")


const schemaAlumno = new Schema({
    rut: {
    type: String,
    required: true,
    unique: true
    },
    nombre: {
    type: String,
    required: true
    },
    apellido: {
    type: String,
    required: true
    },
    curso: {
    type: String,
    required: true
    },
    altura: {
    type: Number,
    required: true
    },
    peso: {
    type: Number,
    required: true
    }
})

module.exports = model("alumnos", schemaAlumno )