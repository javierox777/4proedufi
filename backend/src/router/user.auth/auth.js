// backend/routes/auth.js
const express = require("express");
const { signup, signin, profile } = require ("../../controllers/user.auth/authController.js");
const { authMiddleware } = require("../../middleware/authMiddleware.js");

const router = express.Router();

// Rutas públicas
router.post("/signup", signup);
router.post("/signin", signin);

// Ruta protegida de ejemplo
router.get("/profile", authMiddleware, profile);

module.exports = router;
