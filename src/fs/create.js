import fs from 'fs';
import { fsOperationFailMsg } from '../constants.js';

const create = async () => {
    // check if file already exists
    if(fs.existsSync('files/fresh.txt')) {
        throw new Error(fsOperationFailMsg);
    } else {
        fs.writeFile('files/fresh.txt', 'I am fresh and young', err => {
            if (err) {
                console.log(err);
            }
        });
    }
};

await create();