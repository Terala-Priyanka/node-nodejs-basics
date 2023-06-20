import { stdout, stdin } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const transform = new Transform({
		transform(chunk, encoding, callback) {
			callback(null, `${chunk.reverse()}\n`);
		},
	});

	stdin.pipe(transform).pipe(stdout);
};

await transform();