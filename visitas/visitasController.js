const Visita = require('./visitasModel');
const Funciones = require('../helpers/funciones');

module.exports = {
	Create: async (request, reply) => {
		const AppName = request?.params?.AppName || "NoName"
		const ExtraData = request?.body?.ExtraData || {}
		const VisitaJson = {
			AppName,
			TimeStamp: Date.now(),
			ServerInfo: Funciones.GetInfoLog(request),
			ExtraData
		}
		// No Cuenta Visita si es de Vercel
		if (VisitaJson.ServerInfo["HTTP_USER_AGENT"].includes("Vercelbot")) {
			res.status(200).send("0")
		}
		let visita = new Visita(VisitaJson);
		visita.save()
			.then(reply.code(200).send("1"))
			.catch(error => reply.code(500).send({error}))
	},
	
	GetAll: async (request, reply) => {
		try {
			const Visitas = await Visita.find({});
			reply.code(200).send(Visitas);
		} catch (error) {
			reply.code(500).send(error);
		}
	},

	GetAllAppName: async (request, reply) => {
		try {
			const AppName = request?.params?.AppName || "NoName"
			const Visitas = await Visita.find({ AppName: AppName });
			reply.code(200).send(Visitas);
		} catch (error) {
			reply.code(500).send(error);
		}
	}
};