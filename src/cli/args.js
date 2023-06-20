const parseArgs = () => {
    const clargs = process.argv.slice(2);
    clargs.forEach((arg, i) => {
        if (i % 2) return;
        console.log(`${clargs[i].slice(2)} is ${clargs[i + 1]}`);
    });
};

parseArgs();