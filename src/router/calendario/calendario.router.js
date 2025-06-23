const {Router} = require("express")
const {createcalendario, updatecalendario} = require("../../controllers/calendario/calendario.controllers")
const router = Router()

router.post ("/createcalendario", createcalendario)
router.put ("/updatecalendario/:id", updatecalendario)


module.exports = router
