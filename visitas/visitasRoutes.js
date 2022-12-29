const visitasController = require('./visitasController');

module.exports = (app) => {
	// Lista Todas las Visitas
	app.get('/visitas', visitasController.GetAll);

	// Crea Visita
	app.post('/visitas/:AppName', visitasController.Create);
		
	// Lista las Visitas de una App concreta
	app.get('/visitas/:AppName', visitasController.GetAllAppName);
};