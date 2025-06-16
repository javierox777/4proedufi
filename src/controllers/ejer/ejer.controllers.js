const ModelEje = require("../../models/ejerc/ejer.model")
const ctrls = {}


ctrls.createEjer = async(req, res)=>{
    const {tiempo,tipo,url,tiempo_descanso,repeticiones,series} = req.body

        const newEjer = await ModelEje.create({tiempo,
            tipo,url,tiempo_descanso,repeticiones,series})
            res.json(newEjer)
}

module.exports= ctrls