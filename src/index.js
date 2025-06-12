const app = require("./app")
require("./db")


function main (){

    app.listen(app.get("port"))
    console.log("server is on port : ", app.get("port"))
}

main()