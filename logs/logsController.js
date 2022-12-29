const Log = require('./logsModel');
const Funciones = require('../helpers/funciones');

module.exports = {
	Create: async (request, reply) => {
		const AppName = request?.params?.AppName || "NoName"
		const Accion = request?.params?.Accion || "Unknown"
		const ExtraData = request?.body?.ExtraData || {}
		const LogJson = {
			AppName,
			Accion,
			TimeStamp: Date.now(),
			ServerInfo: Funciones.GetInfoLog(request),
			ExtraData
		}
		let log = new Log(LogJson);
		log.save()
			.then(reply.code(200).send("1"))
			.catch(error => reply.code(500).send({error}))
	},
	
	GetAll: async (request, reply) => {
		try {
			const logs = await Log.find({});
			reply.code(200).send(logs);
		} catch (error) {
			reply.code(500).send(error);
		}
	},

	GetAllApp: async (request, reply) => {
		try {
			const logs = await Log.find({ AppName: request.params.AppName });
			reply.code(200).send(logs);
		} catch (error) {
			reply.code(500).send(error);
		}
	},

	GetAllAppAccion: async (request, reply) => {
		try {
			const logs = await Log.find({ AppName: request.params.AppName,Accion: request.params.Accion });
			reply.code(200).send(logs);
		} catch (error) {
			reply.code(500).send(error);
		}
	}
};