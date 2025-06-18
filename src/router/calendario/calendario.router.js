const {Router} = require("express")
const {createCalendario, calendarioActualizado} = require("../../controllers/calendario/calendario.controllers")
const router = Router()

router.post("/createacalendario", createCalendario)
router.put("/actualizarcalendario/:id", calendarioActualizado)


module.exports = router