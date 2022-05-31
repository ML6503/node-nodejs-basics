import * as fs from 'fs/promises';
import path from 'path';



export const create = async () => {
    const __dirname = path.resolve(path.dirname("src/fs/files/*"));

    let data = 'I am fresh and young';
     
       try {
        await fs.open(path.join(__dirname,'fresh.txt'), 'r')
        .then(() => {
           throw new Error('FS operation failed');
        })
        .catch((error)=>{
           if (error.code !== 'ENOENT') {
            console.error(error);
           }
           
       });
       
        await fs.writeFile(path.join(__dirname,'fresh.txt'), data); 

       } catch (e) {
           console.error(e);
       }  
};

create();
