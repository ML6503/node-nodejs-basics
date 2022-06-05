import url from 'url';
import path from 'path';
import  { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';


// function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
export const compress = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const fileSourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const fileForZipPath = path.join(__dirname, 'files', 'archive.gz');

    const gzip = createGzip();
    const source =  createReadStream(fileSourcePath);
    const destination = createWriteStream(fileForZipPath);
    const pipe = promisify(pipeline);

    await pipe(source, gzip, destination);
};

try {
    compress();
} catch(e) {
    console.error(e);
    process.exitCode = 1;    
}
