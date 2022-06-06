import  { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const result = nthFibonacci(workerData.num);

export const sendResult = () => {
    parentPort.postMessage(nthFibonacci(workerData.num));
};

sendResult();
