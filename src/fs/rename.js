import fs from 'fs';
import { fsOperationFailMsg } from '../constants.js';

const rename = () => {
	fs.rename('files/wrongFilename.txt', 'files/properFilename.md', err => {
		if (err && err.code === 'ENOENT') {
			throw new Error(fsOperationFailMsg);
		} else {
			console.log('File renamed!');	
		}
	});  
};

await rename();