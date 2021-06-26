const fastifyPlugin = require('fastify-plugin');
const path = require('path');

async function static (fastify, options) {
    const fastifyStatic = require('fastify-static');

    //Views
    fastify.register(fastifyStatic, {
        root: path.join(__dirname, 'app', 'views'),
        prefix: '/'
    });
    //Public
    fastify.register(fastifyStatic, {
        root: path.join(__dirname, 'app', 'public', 'img'),
        prefix: '/img/'
    });

    fastify.register(fastifyStatic, {
        root: path.join(__dirname, 'app', 'public', 'scss'),
        prefix: '/scss/'
    });

    fastify.register(fastifyStatic, {
        root: path.join(__dirname, 'app', 'public', 'js'),
        prefix: '/js/'
    });
};

module.exports = fastifyPlugin(static);