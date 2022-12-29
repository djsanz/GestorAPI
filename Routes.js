module.exports = (app) => {
	app.get('/', function (request, reply) {reply.code(200).send("Hola Mundo")})
};