const fastify = require('fastify')({logger: true});

// Fastify routes: localhost:PORT/docs
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'IP-Herex'}
    }
});

//Environmental variables
fastify.register(require('fastify-env'), {
    dotenv: true,
    schema: {
        type: 'object',
        properties: {
            MONGODB: {
                type: 'string',
                default: ''
            },
            PORT: {
                type: 'integer',
                default: 5000
            }
        },
        required: ['MONGODB', 'PORT']
    }
});

// MongoDB
fastify.register(require('./plugins/mongodb'));

//Static file serving
fastify.register(require('./plugins/static'));

//Routes
fastify.register(require('./routes/api/api'));
fastify.register(require('./routes/pages/pages'));

// Server Start
const start = async () => {
    try {
        await fastify.listen(process.env.PORT)
    } catch (error) {
    fastify.log.error(error);
    process.exit(1);        
    }
};

start();

