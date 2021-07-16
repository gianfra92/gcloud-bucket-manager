const PdfPrinter = require('pdfmake');

const createPDF = () => {
    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [40, 60, 40, 60],
        content: [
            'First paragraph',
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
        ]
    }
    const fontDescriptors = {
        Roboto: {
            normal: 'fonts/Roboto-Regular.ttf',
            bold: 'fonts/Roboto-Medium.ttf',
            italics: 'fonts/Roboto-Italic.ttf',
            bolditalics: 'fonts/Roboto-MediumItalic.ttf'
        }
    };
    const printer = new PdfPrinter(fontDescriptors);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    return pdfDoc;
}

module.exports = {
    createPDF
}