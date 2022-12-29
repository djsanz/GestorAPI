// https://www.sitepoint.com/create-rest-api-fastify/
// https://medium.com/swlh/fullstack-crud-application-with-fastify-mongoose-and-react-admin-86d3e743dcdf
const dotenv = require('dotenv');
const app = require('fastify')({logger: true})
dotenv.config({ path: './.env' });

const Routes = require('./Routes');
const visitasRoutes = require('./visitas/visitasRoutes');
const logsRoutes = require('./logs/logsRoutes');
const Database = require('./db/database');
Database.connect();

Routes(app); // http://Url/
visitasRoutes(app); // http://Url/visitas/
logsRoutes(app); // http://Url/logs/

// Run the server!
app.listen({ port: 5000 }, (err) => {
	if (err) {
		app.log.error(err)
		process.exit(1)
	}
})