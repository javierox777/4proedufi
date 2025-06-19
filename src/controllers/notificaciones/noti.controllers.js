const notiModel = require("../../models/notificaciones/noti.model")
const ctrls = require("../alumnos/alumno.comntrollers")


ctrls = {}


ctrls.createnotificacion = async (req, res)=>{
    const {calendario, rutina} = req.body

    const newnoti = await Modelcalendario.create({calendario, rutina})
    res.json(newnoti)
}

ctrls.updatenotif = async (req, res)=>{
    const _id = req.params.id
    const {calendario, rutina} = req.body 
    console.log(calendario, rutina)
    const Notificacionact = await notiModel.findByIdAndUpdate({_id},{
          calendario,
          rutina
    })
    res.json("notificaion actualizada", Notificacionact )
}
