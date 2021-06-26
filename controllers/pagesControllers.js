const getIndex = (req, reply) => {
    return reply.sendFile('index.html');
};

module.exports = {
    getIndex,
}