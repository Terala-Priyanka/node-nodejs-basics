import { readFile } from 'fs';
import { fsOperationFailMsg } from '../constants.js';

const read = async () => {
	const filePathToRead = 'files/fileToRead.txt';
	readFile(filePathToRead, 'utf-8', (err, fileContent) => {
		if (err) {
			if (err.code === 'ENOENT') {
				throw new Error(fsOperationFailMsg);
			} else {
				console.error(err);
			}
		}
		console.log(fileContent);
	})
};

await read();