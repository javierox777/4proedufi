const {Router}= require("express")
const {createEjer} = require(("../../controllers/ejer/ejer.controllers"))
const router = Router()


router.post("/createjer", createEjer)

module.exports = router