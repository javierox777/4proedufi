const ModelEje = require("../../models/ejerc/ejer.model")
const ctrls = {}


ctrls.createEjer = async(req, res)=>{
    const {  tiempo,
        tipo,
        url} = req.body

        const newEjer = await ModelEje.create({tiempo,
            tipo,
            url})
            res.json(newEjer)
}

module.exports= ctrls