import { pipeline, Transform } from'node:stream';
import { stdin, stdout } from 'process';

 // function that reads data from process.stdin, reverses text using Transform Stream
 // and then writes it into process.stdout
export const transform = async () => {
    const reversTransform = new Transform({
        transform: (chunk, _encoding, callback) => callback(null, chunk.toString().split('').reverse().join(''))
    });
   pipeline(
      stdin,
      reversTransform,
      stdout,
      err => {
          if(err) {
              console.error('Pipeline got error: ', err);
          } else {
              console.info('Pipeline ended.');
          }
      }
  );
};

transform();
