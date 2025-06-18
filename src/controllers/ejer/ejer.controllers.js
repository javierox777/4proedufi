const ModelEje = require("../../models/ejerc/ejer.model")
const ctrls = {}


const createEjer = async(req, res)=>{
    const {tiempo, tipo, url, tiempo_descanso, repeticiones, series} = req.body

        const newEjer = await ModelEje.create({tiempo,
            tipo, url, tiempo_descanso, repeticiones, series})
            res.json(newEjer)
}

const leerejer = async(req, res)=>{
    const data = await Modelejer.find()
    res.json(data)
}


 const updateejer = async (req, res)=>{
    const _id = req.params.id
    const {tiempo, tipo, url, tiempo_descanso, repeticiones, series} = req.body 
    console.log(tiempo, tipo, url, tiempo_descanso, repeticiones, series)
    const ejerActualizado = await Modelejer.findByIdAndUpdate({_id},{
    tiempo,
    tipo,
    url,
    tiempo_descanso,
    repeticiones,
    series
    

    })
    res.json("ejercicio actualizado", ejerActualizado )
}

const deleteejer = async(req, res)=>{
    const _id = req.params.id
    await Modelejer.findByIdAndDelete({_id})
    res.json("ejercicio eliminado")
}

module.exports= {createEjer, deleteejer, updateejer, leerejer }