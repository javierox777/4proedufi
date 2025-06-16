const Modelrutina = require("../../models/rutina/rutina.model")

const ctrls = {}

ctrls.createrutina = async (req, res)=>{
    const {tiemp, tiempo_descan, ejercicios } = req.body

    const newrutina = await Modelrutina.create({tiemp, tiempo_descan, ejercicios})
    res.json(newrutina)
}

ctrls.leerrutina = async(req, res)=>{
    const data = await Modelrutina.find()
    res.json(data)
}


ctrls.updaterutina = async (req, res)=>{
    const _id = req.params.id
    const {tiemp, tiempo_descan, ejercicios} = req.body 
    console.log(tiemp, tiempo_descan, ejercicios)
    const rutinaActualizada = await Modelrutina.findByIdAndUpdate({_id},{
       tiemp, 
       tiempo_descan,
       ejercicios
    })
    res.json("rutina actualizada", rutinaActualizada )
}

ctrls.deleterutina = async(req, res)=>{
    const _id = req.params.id
    await Modelrutina.findByIdAndDelete({_id})
    res.json("rutina eliminada")
}

module.exports = ctrls