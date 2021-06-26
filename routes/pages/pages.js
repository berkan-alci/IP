const { getIndex } = require('../../controllers/pagesControllers');

const getIndexOpts = {
    handler: getIndex
};

function pagesRoutes (fastify, options, done) {

    // GET
    fastify.get('/', getIndexOpts);


    done();
};

module.exports = pagesRoutes;