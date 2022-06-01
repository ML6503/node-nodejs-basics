import * as fs from 'fs/promises';
import { existsSync } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesFolder = 'files';
const newFilesFolder = 'files_copy';
const filesFolderPath = path.join(__dirname, filesFolder);
const newFilesFolderPath = path.join(__dirname,newFilesFolder);


export const copy = async () => {
    //check if folder files exists or folder files_copy exists
    // throw err if files_copy already exists and/ or folder files is not
    // create copy of folder and files into files_copy if no err thrown

    try {
        if(existsSync(filesFolderPath) && !existsSync(newFilesFolderPath)) {
            await fs.mkdir(newFilesFolderPath);
           
                const files = await fs.readdir(filesFolderPath);
                for (const file of files) {
                    let  filePath = filesFolderPath + '/' + file;
                    let  copyFilePath = newFilesFolderPath + '/' + file;
                   
                    await fs.copyFile(filePath, copyFilePath);
                }
                
                  console.log('Files from "files" folder copied successfully to "files_copy" folder');
              
        } else {
            throw new Error('FS operation failed');
        }
    } catch(e) {
        console.error(e);
    }
};

copy();
