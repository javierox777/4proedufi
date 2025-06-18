const {Schema, model} = require("mongoose")


const schemaCalen = new Schema({
   D_trabajar:Number,
   D_descanso:Number,
   D_cumplidos:Number,
   Dn_cumplidos:Number,
   racha:Number,
   dia:Date

    
})

module.exports = model("calendario", schemaCalen )