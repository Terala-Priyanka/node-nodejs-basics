import { createReadStream, createWriteStream } from 'fs';
import {fileURLToPath} from 'url';
import { pipeline } from 'stream';
import zlib from 'zlib';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
	const source = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
	const target = createWriteStream(path.join(__dirname, 'files','archive.gz'));

	pipeline(source, zlib.createGzip(), target, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },);
};

await compress();