const dotenv = require('dotenv')
dotenv.config()

const morgan = require("morgan")

const routerAlumno = require("./router/alumno/alumno.router")

const routerEjer = require("./router/ejer/ejer.router")

const routerUsuario = require('./router/usuario/usuario')

const cors = require('cors')

const PORT = process.env.PORT || 3000

//App Express
const express = require("express")
const app = express()


//start server
app.set("port", PORT)

//middleware
app.use(express.json())
app.use(cors())


//router
app.use("/api", routerAlumno )
app.use("/api", routerEjer )
app.use('/api/usuario', routerUsuario)

module.exports = app