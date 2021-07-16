const express = require('express');
const downloadPDF = require('./services/downloader.service');
const app = express();

app.get('/download', async (req,res) => {
    const {stream, filename, size, contentType} = await downloadPDF();
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type',contentType);
    res.setHeader('Content-Length',size);
    stream.pipe(res);
})

app.listen(3000, ()=> {
    console.log('listening on port 3000')
})