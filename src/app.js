
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const routerAlumno = require("./router/alumno/alumno.router");
const routerEjer = require("./router/ejer/ejer.router");
const routerUsuario = require("./router/usuario/usuario");

const connectDB = require("./config/db");

// Crear app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev")); // si quieres ver logs de requests

// Rutas
app.use("/api", routerAlumno);
app.use("/api", routerEjer);
app.use("/api/usuario", routerUsuario);

// Conectar DB y levantar servidor
const port = 3000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
    });
}).catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
});
