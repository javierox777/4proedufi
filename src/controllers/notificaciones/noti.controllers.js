const notiModel = require("../../models/notificaciones/noti.model")
const ctrls = require("../alumnos/alumno.comntrollers")





const createnotificacion = async (req, res)=>{
    const {calendario, rutina} = req.body

    const newnoti = await notiModel.create({calendario, rutina})
    res.json(newnoti)
}

const updatenotif = async (req, res)=>{
    const _id = req.params.id
    const {calendario, rutina} = req.body 
    console.log(calendario, rutina)
    const Notificacion = await notiModel.findByIdAndUpdate({_id},{
          calendario,
          rutina
    })
    res.json("notificaion actualizada", Notificacion )
}



module.exports = {createnotificacion, updatenotif }