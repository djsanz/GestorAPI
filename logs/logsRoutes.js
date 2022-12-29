const logsController = require('./logsController');

module.exports = (app) => {
	// Lista Todas las logs
	app.get('/logs', logsController.GetAll);

	// Crea Visita
	app.post('/logs', logsController.Create);
	app.post('/logs/:AppName', logsController.Create);
	app.post('/logs/:AppName/:Accion', logsController.Create);
	
	// Lista las logs de una App concreta
	app.get('/logs/:AppName', logsController.GetAllApp);

	// Lista las logs de una App y Accion concreta
	app.get('/logs/:AppName/:Accion', logsController.GetAllAppAccion);
};