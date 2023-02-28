import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Crea ruta y sube una nieva imagen */

export default function uploadFile(req, carpeta) {
    let fstream;
    let __filename;
    req.pipe(req.busboy);
    req.busboy.on('file', (_, file, filename) => {
        console.log('Uploading: ' + filename.filename);
        if (!fs.existsSync(__dirname + carpeta)) {
            fs.mkdirSync(__dirname + carpeta);
        }
        fstream = fs.createWriteStream(__dirname + carpeta + filename.filename);
        file.pipe(fstream);
        fstream.on('close', () => {
            console.log('Upload Finished of ' + filename.filename);
            __filename = filename.filename;
        });
    });

    return carpeta;
}
