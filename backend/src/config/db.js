const mongoose = require('mongoose')

const uri = "mongodb://localhost/escuela"

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
     }
    }

    module.exports = ConnectDB