const Hapi = require("@hapi/hapi");
const Joi = require('joi');
const routes = require("./config/routes");
const config = require('./config/envs-config');


const server = Hapi.server({
    port: config.port,
    host: config.host
});

server.validator(Joi); 
routes.forEach((path) => server.route(path));

module.exports = server;