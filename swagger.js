const AutoSwag = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API Project',
    },
    host: 'localhost:3000',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

AutoSwag(endpointFiles, outputFile, doc).then(() => {
    console.log('Swagger file created');
}).catch((err) => {
    console.log('Error creating swagger file');
    console.log(err);
});
