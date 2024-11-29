const Hapi = require("@hapi/hapi");
const routes = require("./config/routes");
const config = require('./config/envs-config');


const server = Hapi.server({
    port: config.port,
    host: config.host
});

//console.log('PORT:', process.env.PORT);
//console.log('HOST:', process.env.HOST);
//Port Postgree 5432
//Joy não pode ser required no get 

//apresenta as rotas http mapeadas ao hapi
routes.forEach((path) => server.route(path));

module.exports = server;