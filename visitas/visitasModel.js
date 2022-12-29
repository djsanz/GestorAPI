const mongoose = require('mongoose');

const VisitaServerInfoSchema = new mongoose.Schema({
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
},{ versionKey: false, _id : false });

const VisitaSchema = new mongoose.Schema({
    AppName: {
        type: String,
        required: true
    },
    TimeStamp: {
        type: Number,
        required: true
    },
    ServerInfo: {
        type: VisitaServerInfoSchema,
        required: false
    },
    ExtraData: {
        type: mongoose.Mixed,
        required: false
    }
},{ collection: 'Visitas' ,versionKey: false});

const Visita = mongoose.model('Visita', VisitaSchema);

module.exports = Visita;