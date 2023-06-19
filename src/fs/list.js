import { promises as fsPromises, existsSync } from 'fs';
import { fsOperationFailMsg } from '../constants.js';

const list = async () => {
	const folderName = 'files';
	fsPromises.readdir(folderName)
		.then(files => {
			console.log(files);
		})
		.catch(err => {
			if (err.code === 'ENOENT') {
				throw new Error(fsOperationFailMsg);
			} else {
				console.error(err);
			}
		});
};

await list();