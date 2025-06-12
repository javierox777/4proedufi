const {Router} = require("express")
const {createAlumno, leeralumno} = require("../../controllers/alumnos/alumno.comntrollers")
const router = Router()

router.post("/createalumno",createAlumno)
router.get("/leeralumno",leeralumno)

module.exports = router



