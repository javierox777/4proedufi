const {Router} = require("express")
const {createAlumno, leeralumno, updateAlumnos, deletealumno} = require("../../controllers/alumnos/alumno.comntrollers")
const router = Router()

router.post("/createalumno",createAlumno)
router.get("/leeralumno",leeralumno)
router.put("/updatealumno/:id", updateAlumnos)
router.delete("/eliminaralumno/:id", deletealumno)

module.exports = router



