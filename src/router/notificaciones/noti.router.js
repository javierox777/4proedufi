const {Router} = require("express")
const {createnotif, updatenotif} = require("../../controllers/notificaciones/noti.controllers")
const router = Router()

router.post("/createnotif", createnotif)
router.put("/actualizarnotif/:id", updatenotif)


module.exports = router