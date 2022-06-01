import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const create = async () => { 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = 'fresh.txt';
    const newFileLocation = path.join(__dirname, '/files', file);
    let data = 'I am fresh and young';
     
       try {
       
        await fs.open( newFileLocation, 'r')
        .then(() => {
           throw new Error('FS operation failed');
        })
        .catch((error)=>{
           if (error.code !== 'ENOENT') {
            console.log(`${file} 'exists'`);
            console.error(error);
            return;
           }
           fs.writeFile( newFileLocation, data); 
       });      
    

       } catch (e) {
           console.error(e);
       }  
};

create();
