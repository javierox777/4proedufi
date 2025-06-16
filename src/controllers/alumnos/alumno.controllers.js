const ModelAlumno = require("../../models/alumnos/alumno.model")

const ctrls = {}

ctrls.createAlumno = async (req, res)=>{
    const {run, nombre, apellido, fec_nac, peso, curso} = req.body

    const newAlumno = await ModelAlumno.create({run, nombre, apellido, fec_nac, peso, curso})
    res.json(newAlumno)
}

ctrls.leeralumno = async(req, res)=>{
    const data = await ModelAlumno.find()
    res.json(data)
}

module.exports = ctrls 