import { fork } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// import { stdin, stdout } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
	const srcFile = join(__dirname, 'files', 'script.js');
	const childProcess = fork(srcFile, args, { silent: true });

	process.stdin.pipe(childProcess.stdin);
	childProcess.stdout.pipe(process.stdout);

	childProcess.stdout.on('data', (msg) => console.log(`Message from child: ${msg}`));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Hi', 'Hello', 'Hola']);
