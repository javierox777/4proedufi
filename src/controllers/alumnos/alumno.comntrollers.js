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


ctrls.updateAlumnos = async (req, res)=>{
    const _id = req.params.id
    const {nombre, apellido, edad} = req.body 
    console.log(nombre, apellido, edad)
    const alumnoActualizado = await ModelAlumno.findByIdAndUpdate({_id},{
        nombre,
         apellido,
          edad
    })
    res.json("usuario actualizado", alumnoActualizado )
}

ctrls.deletealumno = async(req, res)=>{
    const _id = req.params.id
    await ModelAlumno.findByIdAndDelete({_id})
    res.json("alumno eliminado")
}

module.exports = ctrls