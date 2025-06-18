const ModelAlumno = require("../../models/alumnos/alumno.model")

const ctrls = {}

ctrls.createAlumno = async (req, res)=>{
    const {run, nombre, nombre_usuario, apellido, email, password, genero, curso, edad, fec_nac, altura, peso} = req.body

    const newAlumno = await ModelAlumno.create({run, nombre, nombre_usuario, apellido, email, password, genero, curso, edad, fec_nac, altura, peso})
    res.json(newAlumno)
}

ctrls.leeralumno = async(req, res)=>{
    const data = await ModelAlumno.find()
    res.json(data)
}


ctrls.updateAlumnos = async (req, res)=>{
    const _id = req.params.id
    const {run, nombre, nombre_usuario, apellido, email, password, genero, curso, edad, fec_nac, altura, peso} = req.body 

    console.log(run, nombre, nombre_usuario, apellido, email, password, genero, curso, edad, fec_nac, altura, peso)
    const alumnoActualizado = await ModelAlumno.findByIdAndUpdate({_id},{run, nombre, nombre_usuario, apellido, email, password, genero, curso, edad, fec_nac, altura, peso})
    res.json("usuario actualizado", alumnoActualizado )
}

ctrls.deletealumno = async(req, res)=>{
    const _id = req.params.id
    await ModelAlumno.findByIdAndDelete({_id})
    res.json("alumno eliminado")
}

module.exports = ctrls