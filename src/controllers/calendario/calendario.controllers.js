const Modelcalendario = require("../../models/calendario/calendario.model")


const ctrls = {}

ctrls.createcalendario = async (req, res)=>{
    const {D_trabajar, D_descanso, D_cumplidos, Dn_cumplidos, racha} = req.body

    const newcalendario = await Modelcalendario.create({D_trabajar, D_descanso, D_cumplidos, Dn_cumplidos, racha, dia})
    res.json(newcalendario)
}

ctrls.updatecalendario = async (req, res)=>{
    const _id = req.params.id
    const {D_trabajar, D_descanso, D_cumplidos, Dn_cumplidos, racha, dia} = req.body 
    console.log(D_trabajar, D_descanso, D_cumplidos, Dn_cumplidos, racha, dia)
    const calendarioActualizado = await Modelcalendario.findByIdAndUpdate({_id},{
        D_trabajar,
        D_descanso,
        D_cumplidos,
        Dn_cumplidos,
        racha,
        dia
    })
    res.json("calendario actualizado", calendarioActualizado )
    
}
   
