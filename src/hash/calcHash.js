import { readFileSync } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
	const fileBuffer = readFileSync('files/fileToCalculateHashFor.txt');
	const hashedContent = createHash('sha256').update(fileBuffer).digest('hex');

	console.log('hashedContent ', hashedContent);
};

await calculateHash();