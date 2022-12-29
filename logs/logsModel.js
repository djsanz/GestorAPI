const mongoose = require('mongoose');

const LogServerInfoSchema = new mongoose.Schema({
    HTTP_X_REAL_IP: {
        type: String,
        required: false
    },
    HTTP_USER_AGENT: {
        type: String,
        required: false
    },
    HTTP_X_VERCEL_IP_COUNTRY: {
        type: String,
        required: false
    },
    HTTP_X_VERCEL_IP_CITY: {
        type: String,
        required: false
    },
    HTTP_X_FORWARDED_FOR: {
        type: String,
        required: false
    }
},{ _id : false, versionKey: false});

const LogSchema = new mongoose.Schema({
    AppName: {
        type: String,
        required: true
    },
    Accion: {
        type: String,
        required: true
    },
	TimeStamp: {
        type: Number,
        required: true
    },
    ServerInfo: {
        type: LogServerInfoSchema,
        required: false
    },
    Data: {
        type: mongoose.Mixed,
        required: false
    }
},{ collection: 'Logs' ,versionKey: false});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;