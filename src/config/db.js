const mongoose = require('mongoose')

const uri = "mongodb+srv://joel:12345@mernapp.4si7u1j.mongodb.net/colegio?retryWrites=true&w=majority&appName=MERNapp"

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