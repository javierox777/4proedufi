const Modelcalendario = require(".../.../models/calendario/calendario.model")

const ctrls = {}


ctrls.createcalendario = async (req, res)=>{
    const {D_trabajar, D_descanso, D_cumplidos, Dn_cumplidos, racha} = req.body

    const newcalendario = await Modelcalendario.create({D_trabajar, D_descanso, D_cumplidos, Dn_cumplidos, racha})
    res.json(newcalendario)
}

ctrls.updatecalendario = async (req, res)=>{
    const _id = req.params.id
    const {run, nombre, apellido, fec_nac, imc, peso, curso, edad} = req.body 
    console.log(run, nombre, apellido, fec_nac, imc, peso, curso, edad)
    const calendarioActualizado = await ModelAlumno.findByIdAndUpdate({_id},{
        D_trabajar,
        D_descanso,
        D_cumplidos,
        Dn_cumplidos,
        racha
    })
    res.json("calendario actualizado", calendarioActualizado )
}
