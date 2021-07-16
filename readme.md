# Google Bucket Manager
Progetto per la creazione di un file PDF all'interno di un bucket in gcloud

----
### Requisiti
- Creare o utilizzare un account di servizio di gcloud
- generare un file json contenente le credenziali per l'utilizzo dell'account di servizio
    - per generare un file json andare su [Account di servizio](https://console.cloud.google.com/iam-admin/serviceaccounts) e cliccare sull'account utilizzato
    - andare su chiavi e cliccare su aggiungi chiave json
    - scaricare la chiave e salvarla nella cartella del progetto con il nome `google-service.json`
    - assicurarsi di avere i permessi di:
        - `storage.buckets.list`
        - `storage.objects.list`
        - `storage.objects.create`
        - `storage.objects.update`
        - `storage.objects.get`

### Installazione ed esecuzione
Per installare eseguire il comando `npm install`, per avviare eseguire il comando `npm start`.

Per visualizzare la lista di bucket presenti eseguire il comando `npm run list`

---

### Docs
- [Generate file to gcloud](https://medium.com/@luigibynight/generate-a-pdf-with-google-cloud-functions-e153c815be5d)
- [Account di servizio](https://console.cloud.google.com/iam-admin/serviceaccounts)
- [Google Storage docs](https://googleapis.dev/nodejs/storage/latest/index.html)
- [Read stream docs](https://googleapis.dev/nodejs/storage/latest/File.html#createReadStream)
- [Express Download file](https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express)
