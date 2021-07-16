const path = require('path');
const fs = require('fs');
const cwd = path.join(__dirname, '../downloads');
const { bucket } = require('../loaders/gcloud-storage');

if (!fs.existsSync(cwd)){
    fs.mkdirSync(cwd);
}

const downloadPDF = async () => {
    const [filesList] = await bucket.getFiles();
    console.log('Files found:', filesList.length, filesList.map(el => el.name))
    // filesList.map(async el => {
    //     await bucket.file(el.name).download({
    //         destination: path.join(cwd, el.name),

    //     })
    //     console.log(path.join(cwd, el.name))
    // })
    // bucket.file(el.name).createReadStream().pipe(fs.createWriteStream())
    const file = filesList[0];
    console.log(file.metadata)
    return {
        stream: bucket.file(file.name).createReadStream(),
        size: file.metadata.size,
        filename: file.name,
        contentType: file.metadata.contentType
    }
}

module.exports = downloadPDF;