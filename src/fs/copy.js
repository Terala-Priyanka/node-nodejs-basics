import  fs, { mkdir, existsSync } from 'fs';
import { fsOperationFailMsg } from '../constants.js';

const createDir = async (destDir) => {
    await mkdir(destDir, err => {
        if (err) {
            console.error(err);
        } else {
            console.info('.........created folder "copyFiles"');
        }
    });
}

const copy = async () => {
    // read source directory
    let filesInSrcDir=[];
		const sourceDirName = 'files';
		const destDirName = 'files_copy';

    await fs.promises.readdir(sourceDirName)
    .then(files => {
        filesInSrcDir.push(...files);
    })
    .catch(err => {
        console.log(err)
    });

    // if source directory has files,
    // check dest directory "files_copy" if it doesn't exist
    // if dest dir already exists, error with message
    
    if (filesInSrcDir?.length) {
			if (existsSync(destDirName)) {
				throw new Error(fsOperationFailMsg);
			} else {
				await createDir(destDirName);
				console.info('............destination directory created');
				filesInSrcDir.forEach(async (file, index) => {
					await fs.promises.copyFile(`files/${file}`, `files_copy/${file}`)
						.then(() => {
							console.log(`File ${file} has been copied`);
							if (index === filesInSrcDir.length -1) {
								console.info(`Hurray!!! All files copied from ${sourceDirName} directory to ${destDirName} directory`);
							}
						})
						.catch(err => {
							console.error('The file could not be copied');
						});
				});
			}
    }
};

await copy();
