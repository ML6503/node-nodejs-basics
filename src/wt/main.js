import  { cpus } from 'os';
import path from 'path';
import url from 'url';
import { Worker, isMainThread } from 'worker_threads';



// function that creates number of worker threads (equal to the number of host machine logical CPU cores)
// from file worker.js and able to send data to those threads and to receive result of the computation from them.
export const performCalculations = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const fileWorker = path.join(__dirname, 'worker.js');
    const startNum = 10;
    const resultsArray = [];

    if(isMainThread) {
        const cpuNum = cpus().length;
        const allPromises = []

        for (let i = 0; i < cpuNum; i++) {
            const promise = new Promise((resolve, reject) => {
                const worker = new Worker(fileWorker, { workerData: { num: startNum + i } });
                worker.once('message',  (result) => {                          
                    resolve({ data : result,  index: i });   
                });
            
                worker.on('error', err => {
                    console.error(err);
                    reject({ data : null,  index: i });
                });
            });
 
            allPromises.push(promise);      
        }    

        
        await Promise.allSettled(allPromises).then((values) => {     
            
            values.forEach((val) => {             
                resultsArray[val.value.index] = { 
                    status: val.status === 'fulfilled' ? 'resolved' : 'error',
                    data: val.value.data
                };            
            })
        });          
    }
    console.info('FINAL RESULTS ARRAY', resultsArray);
    return resultsArray;
};

performCalculations();
