const modelprogreso = require("../../models/progreso/progres.model")

const ctrls = {}


ctrls.createprogres = async (req, res)=>{
    const {pesoinicial, pesofinal} = req.body

    const newprogreso = await modelprogreso.create({pesoinicial, pesofinal})
    res.json(newprogreso)
}

ctrls.updateprogres = async (req, res)=>{
    const _id = req.params.id
    const {pesoinicial, pesofinal} = req.body 
    console.log(pesoinicial, pesofinal)
    const progresupdate = await modelprogreso.findByIdAndUpdate({_id},{
          pesoinicial, 
          pesofinal
    })
    res.json("progreso actualizado", progresupdate )
}
