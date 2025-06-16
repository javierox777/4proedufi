const Modelcalendario = require(".../.../models/calendario/calendario.model")

const ctrls = {}


ctrls.createnotif = async (req, res)=>{
    const {calendario, rutina} = req.body

    const newnoti = await Modelcalendario.create({calendario, rutina})
    res.json(newnoti)
}

ctrls.updatenotif = async (req, res)=>{
    const _id = req.params.id
    const {calendario, rutina} = req.body 
    console.log(calendario, rutina)
    const Notificacionact = await ModelAlumno.findByIdAndUpdate({_id},{
          calendario,
          rutina
    })
    res.json("notificaion actualizada", Notificacionact )
}
