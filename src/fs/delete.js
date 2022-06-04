import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = 'fileToRemove.txt';
const fileLocation = path.join(__dirname, '/files', file);

export const remove = async () => {

    try {    
        fs.unlink(fileLocation, (err) => {
            if (err && err.code === 'ENOENT') {
                throw new Error('FS operation failed');                
            } if (err) {
                console.error('Something went wrong');
            } else {
                console.info('File '+ file + ' has been removed');
            }
        });
   
    } catch(e){             
        console.error(e);
    }
};

remove();
