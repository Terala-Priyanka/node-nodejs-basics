import { Worker } from 'worker_threads';
import os from 'os';
import path, { resolve } from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const coresOnHost = os.cpus().length;

const createWorkers = () => {
	const workers = [];

	for (let i = 0; i < coresOnHost; i++) {
		const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: 10 + i });
		workers.push(worker);
	}

	return workers;
};

const runWorkers = (workers) => {
	const fibRes = [];

	return new Promise((resolve, reject) => {
		let done = 0;

		for( let i=0; i < workers.length; i++) {
			workers[i].on("message", (result, reject) => {
				if (result) {
					fibRes[i] = {
						status: "resolved",
						data: result,
					};
					done++;
				}
				if (reject) {
					fibRes[i] = {
						status: "error",
						data: null,
					};
					done++;
				}

				if (done === workers.length) {
					resolve(fibRes);
				}
			});
		}
	});
};

const performCalculations = async () => {
	const workers = createWorkers();
	const results = await runWorkers(workers);

	console.log(results);

};

await performCalculations();