import url from 'url';
import path from 'path';
import  { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';



// function that decompresses archive.gz back to the fileToCompress.txt
// with same content as before compression using zlib and Streams API
export const decompress = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const fileUnZipPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const fileZipPath = path.join(__dirname, 'files', 'archive.gz');

  
    const toUnzip = createGunzip();
    const source =  createReadStream(fileZipPath);
    const destination = createWriteStream(fileUnZipPath);
    const pipe = promisify(pipeline);


    pipe(source, toUnzip, destination);
  
};


    decompress();
