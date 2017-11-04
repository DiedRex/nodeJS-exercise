var fs = require('fs');

//异步读取
fs.readFile('File.txt/input.txt',function (err,data) {
	if(err){
		return console.error(err);
	}
	console.log('异步读取' + data.toString());
});

//同步读取

var data = fs.readFileSync('file.txt/input.txt');

console.log("同步读取:" + data.toString());

console.log("程序执行结束");


console.log('准备打开文件！');
fs.open('File.txt/input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("异步打开了文件成功");
})

fs.stat('../node/File.txt/input.txt',function(err,stats){
	console.log(stats.isFile());
})



