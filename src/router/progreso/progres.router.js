const {Router} = require("express")
const {createprogres, updateprogres} = require("../../controllers/progreso/progres.controller")
const router = Router()

router.post("/createprogres", createprogres )
router.put("/updateprogres/:id", updateprogres )


module.exports = router