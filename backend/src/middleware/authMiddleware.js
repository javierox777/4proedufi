// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. Token no proporcionado." });
  }

  try {
    // El token llega como: "Bearer asd123..."
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = decoded; // Guardamos el usuario en req.user para usarlo en controladores
    next();
  } catch (err) {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

module.exports = { authMiddleware };
