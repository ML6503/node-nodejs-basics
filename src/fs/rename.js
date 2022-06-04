import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesFolder = 'files';
const oldFilePath = path.join(__dirname, filesFolder, 'wrongFilename.txt');
const newFilePath = path.join(__dirname, filesFolder, 'properFilename.md');
  
export const rename = async () => {
  try {
    fs.stat(oldFilePath, (err, stats) => {
        if(err) {
            if(err && err.code === 'ENOENT') {
                throw new Error('FS operation failed');                
            }
            console.error('stat error is: ', err);
        } else {           
            if(stats.isFile()) {
               fs.rename(oldFilePath, newFilePath, (err) => console.error(err));
               console.log(`File 'wrongFilename.txt' has been renamed to 'properFilename.md' `);
            } 
        }
    });
  } catch(e) {
      console.error(e.message);
  }
};

rename();