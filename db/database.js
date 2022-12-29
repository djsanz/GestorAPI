const mongoose = require('mongoose');
let NombreDB = process.env["MongoDB_NAME"]
if (process.env["Entorno"] == "local") {NombreDB = NombreDB + "_Dev"}

module.exports = {
    connection: null,
    connect: () => {
		mongoose.set('strictQuery', false);
        if (this.connection) return this.connection;
        return mongoose.connect(process.env["MONGODB_URI"], {dbName:NombreDB,useUnifiedTopology: true,useNewUrlParser: true}).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa a ' + NombreDB);
        }).catch(err => console.log("Error DB: ",err))
    }
}