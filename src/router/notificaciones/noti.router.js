const {Router} = require("express")
const {createnotificacion, updatenotif} = require("../../controllers/notificaciones/noti.controllers")
const router = Router()

router.post("/createnotificacion", createnotificacion)
router.put("/actualizarnotif/:id", updatenotif)


module.exports = router