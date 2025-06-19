const {Router} = require("express")
const {createAlumno, getAlumno, getAlumnos, updateAlumno, deleteAlumno} = require("../../controllers/alumnos/alumno.controllers")
const router = Router()

router.get("/leerAlumnos", getAlumnos)
router.get("/leerAlumno/:id", getAlumno)
router.post("/createAlumno", createAlumno)
router.put("/updateAlumno/:id", updateAlumno)
router.delete("/eliminarAlumno/:id", deleteAlumno)

module.exports = router



