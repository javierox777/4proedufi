
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const alumnoRoutes = require("./router/alumno/alumno.router");
const ejerRoutes = require("./router/ejer/ejer.router");
const authRoutes = require("./router/user.auth/auth");

const connectDB = require("./config/db");

// Crear app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev")); // si quieres ver logs de requests

// Rutas
app.use("/api", alumnoRoutes);
app.use("/api", ejerRoutes);
app.use("/api/auth", authRoutes);

// Conectar DB y levantar servidor
const port = 3000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
    });
}).catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
});
