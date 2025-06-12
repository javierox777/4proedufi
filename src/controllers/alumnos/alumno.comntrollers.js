const ModelAlumno = require("../../models/alumnos/alumno.model")

const ctrls = {}

ctrls.createAlumno = async (req, res)=>{
    const {nombre, apellido, edad} = req.body

    const newAlumno = await ModelAlumno.create({nombre, apellido, edad})
    res.json(newAlumno)
}

ctrls.leeralumno = async(req, res)=>{
    const data = await ModelAlumno.find()
    res.json(data)
}

module.exports = ctrls