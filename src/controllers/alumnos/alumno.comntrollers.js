const ModelAlumno = require("../../models/alumnos/alumno.model")

const ctrls = {}

ctrls.createAlumno = async (req, res)=>{
    const {run, nombre, apellido, fec_nac, imc, peso, curso, edad} = req.body

    const newAlumno = await ModelAlumno.create({run, nombre, apellido, fec_nac, imc, peso, curso, edad})
    res.json(newAlumno)
}

ctrls.leeralumno = async(req, res)=>{
    const data = await ModelAlumno.find()
    res.json(data)
}


ctrls.updateAlumnos = async (req, res)=>{
    const _id = req.params.id
    const {run, nombre, apellido, fec_nac, imc, peso, curso, edad} = req.body 
    console.log(run, nombre, apellido, fec_nac, imc, peso, curso, edad)
    const alumnoActualizado = await ModelAlumno.findByIdAndUpdate({_id},{
        run,
        nombre,
        apellido,
        fec_nac,
        imc,
        peso,
        curso,
        edad,
    })
    res.json("usuario actualizado", alumnoActualizado )
}

ctrls.deletealumno = async(req, res)=>{
    const _id = req.params.id
    await ModelAlumno.findByIdAndDelete({_id})
    res.json("alumno eliminado")
}

module.exports = ctrls