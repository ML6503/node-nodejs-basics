import url from 'url';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { stdout } from 'process';
const { createHash } = await import('crypto');

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fileForHashPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const hash = createHash('sha256');


export const calculateHash = async () => {

    const input = createReadStream(fileForHashPath);
    const output = createWriteStream(fileForHashPath);

    // input.pipe(hash).setEncoding('hex').pipe(stdout);
    input.pipe(hash).setEncoding('hex').pipe(output);
};

// function that calculates SHA256 hash for file fileToCalculateHashFor.txt and return it as hex

calculateHash();
