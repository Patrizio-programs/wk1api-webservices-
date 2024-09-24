const AutoSwag = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API Project',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

AutoSwag(endpointFiles, outputFile, doc)