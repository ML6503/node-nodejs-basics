import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, '/files');


export const list = async () => {
  
 try {   
    fs.readdir(dirPath, (err, files) => {        
        if (err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else  if (err) {
            throw new Error('Something went wrong');
        } else {
            console.info('\nFiles in files folder are: \n')
            files.forEach(file => console.info(file));  
        }
    });
       
 } catch (e) {
     console.error(e);
}
 
};

list();