import path from 'path';
import { createWriteStream } from 'fs';
import  url from 'url';
import { stdin } from 'process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');

// function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
export const write = async () => {
    const writeToFile = createWriteStream(fileToWritePath);

    stdin.pipe(writeToFile);  
};

try  {
    write();
} catch (error) {
    console.error(error);
}

