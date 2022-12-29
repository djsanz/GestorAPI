const mongoose = require('mongoose');
let NombreDB = process.env["MongoDB_NAME"]

module.exports = {
    connection: null,
    connect: () => {
		mongoose.set('strictQuery', false);
        if (this.connection) return this.connection;
        return mongoose.connect(process.env["MONGODB_URI"], {dbName:NombreDB,useUnifiedTopology: true,useNewUrlParser: true}).then(connection => {
            this.connection = connection;
            console.log('ConexionDb a',NombreDB);
        }).catch(err => console.log("Error DB: ",err))
    }
}