import { promises as fsPromises } from 'fs';
import { fsOperationFailMsg } from '../constants.js';

const remove = async () => {
	const filePath = 'files/fileToRemove.txt';

  fsPromises.unlink(filePath)
	.then(() => {
		console.info('File deleted!');
	})
	.catch(err => {
		if ( err.code === 'ENOENT') {
			throw new Error(fsOperationFailMsg);
		}
	});
};

await remove();