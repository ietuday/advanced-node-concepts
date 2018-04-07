//Process is an event emitter

process.on('exit', (code) => {
	console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (err) =>{
    console.log(err);
});	


process.stdin.resume();

console.dog();