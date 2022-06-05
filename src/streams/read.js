import url from 'url';
import path from 'path';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

//  function that reads file fileToRead.txt content using Readable Stream
// and prints it's content into process.stdout
export const read = async () => {
    const input = createReadStream(fileToReadPath);
    input.pipe(stdout);
};

try  {
    read();
} catch (error) {
    console.error(error);
}
