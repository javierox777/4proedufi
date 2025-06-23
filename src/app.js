const express = require("express")
const morgan = require("morgan")
const routeralumno = require("./router/alumno/alumno.router")
const routerejer = require("./router/ejer/ejer.router")
const routernotificacion = require("./router/notificaciones/noti.router")
const routercalendario = require ("./router/calendario/calendario.router")

const app = express()


//start server
app.set("port", process.env.PORT || 3000)

//middleware
app.use(express.json())


//router
app.use("/api", routeralumno )
app.use("/api", routerejer )
app.use("/api", routernotificacion)
app.use("/api", routercalendario)

module.exports = app