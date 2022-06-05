
import path from 'path';
import url from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fileCurrentPath = path.join(__dirname, 'files', 'cjsToEsm.mjs');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileCurrentPath}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});



export {
    unknownObject,
    createMyServer,
};

