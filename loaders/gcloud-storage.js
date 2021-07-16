const { Storage } = require('@google-cloud/storage');
const BUCKET = 'pdftest-bucket';

const storage = new Storage({
    projectId: 'sices-prototipo',
    keyFilename: './google-service.json'
});

const bucket = storage.bucket(BUCKET);

module.exports = {
    storage,
    bucket
};