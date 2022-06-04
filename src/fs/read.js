import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesFolder = 'files';
const filePath = path.join(__dirname, filesFolder, 'fileToRead.txt');

export const read = async () => {
    try {        
       fs.stat(filePath, (err, stats) => {        
            if(err) {
                if(err && err.code === 'ENOENT') {
                    throw new Error('FS operation failed');                
                }
                console.error('Something went wrong');
            } else { 
                         
                if(stats.isFile()) {
                 fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error(err);
                        }
                        console.log(`File 'fileToRead.txt' has folloiwing content: \n `);
                        console.info(data);
                    });                   
                }
            }
        });

    } catch (e) {
        console.error(e);
    }
};

read();
