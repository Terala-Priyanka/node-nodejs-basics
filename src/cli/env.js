const parseEnv = () => {
	// environment variables that start with "RSS_"
	console.log('env vars ', process.env);

	const envVars = Object.keys(process.env).filter(envVar => envVar.includes('RSS_'));
	let parsedEnvVars="";
	console.log(envVars);

	const formattedEnvVar = envVars.map(env => {
		return`${env}=${process.env[env]}`;
	});
	
	console.log('parsed env vars ', formattedEnvVar.join('; '));
};

parseEnv();