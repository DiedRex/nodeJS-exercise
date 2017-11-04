var fs = require('fs');

// var data = fs.readFileSync('File.txt/input.txt');

fs.readFile('File.txt/input.txt',function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
})

function set(){
	var i = 30;
}

// console.log(data.toString());

console.log('程序执行结束');

