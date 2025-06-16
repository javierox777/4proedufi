const {Router} = require("express")
const {createrutina, leerrutina, updaterutina, deleterutina } = require(("../../controllers/rutina/rutina.controllers"))
const router = Router()

router.post("/createrutina",createrutina)
router.get("/leerrutina",leerrutina)
router.put("/updaterutina/:id", updaterutina)
router.delete("/eliminararutina/:id", deleterutina)


module.exports = router