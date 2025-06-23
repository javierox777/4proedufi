const { Router } = require("express");
const { createEjer, leerejer, updateejer, deleteejer } = require("../../controllers/ejer/ejer.controllers")
const router = Router()

router.post("/createjer", createEjer)
router.get("/leerejer", leerejer)
router.put("/updatejer/:id", updateejer)
router.delete("/eliminarajer/:id", deleteejer)

module.exports = router