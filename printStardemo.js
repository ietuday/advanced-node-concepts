const print = (stars, header) => {
	console.log('*'.repeat(stars));
	console.log(header);
	console.log('*'.repeat(stars));

};


if(require.main == module){
	//Running the script
	print(process.argv[2], process.argv[3]);
}else {
	//Being required
	module.exports = print;
}

console.log(require);