const {Router} = require("express")
const {createEjer} = require(("../../controllers/ejer/ejer.controllers"))
const router = Router()


router.post("/createjer", createEjer)
router.get("/leerejer", leerEjer)
router.put("/updatejer/ :id", updateAlumnos)
router.delete("/eliminarajer/ :id", deletejer)

module.exports = router