// import cp from'child_process';
import { spawn } from'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = 'script.js';
const fileLocation = path.join(__dirname, '/files', file);


export const spawnChildProcess = async (args) => { 
    const child = spawn(`node src/cp/files/${file}`, [args], {shell: true});
    console.log(`main process id: ${process.pid}`); 
    console.log(`spawned child process id: ${child.pid}`);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);    


    child.stderr.on('data', (data) => {
        console.error(`child stderr: \n${data}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};


spawnChildProcess(123);


