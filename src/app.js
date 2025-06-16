const express = require("express")
const morgan = require("morgan")
const routeralumno = require("./router/alumno/alumno.router")
const routerejer = require("./router/ejer/ejer.router")
const app = express()


//start server
app.set("port", process.env.PORT || 3000)

//middleware
app.use(express.json())


//router
app.use("/api", routeralumno )
app.use("/api", routerejer )

module.exports = app

//hola