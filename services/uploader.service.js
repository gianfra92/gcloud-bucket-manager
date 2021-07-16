const uuid = require('uuid');
const { bucket } = require("../loaders/gcloud-storage");
const { createPDF } = require("./pdf.service");


const uploadPDF = async () => {
    let file_name = uuid.v4() + '.pdf';
    const myPdfFile = bucket.file(file_name);
    const pdfDoc = createPDF();
    pdfDoc.pipe(myPdfFile.createWriteStream())
        .on('finish', function () {
            console.log('Pdf successfully created!');
            return (file_name);
        })
        .on('error', function (err) {
            console.log('Error during the wirtestream operation in the new file');
            throw err;
        });
    pdfDoc.end();
}

module.exports = uploadPDF;