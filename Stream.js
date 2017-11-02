var fs = require('fs');
var data = "";

var readerStream = fs.createReadStream('File.txt/input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data',function (chunk) {
	data += chunk;
})

readerStream.on('end',function () {
	console.log(data);
})

readerStream.on('error',function (err) {
	console.log(err.stack);
})

console.log("程序执行完毕");

//写入流
var data2 = '谷歌搜索的地址为:http://www.googole.com'
var writeStream = fs.createWriteStream('File.txt/output.txt');

writeStream.write(data2,'UTF8');

//标记使得写入可以结束
writeStream.end();


// 处理流事件 --> data, end, and error
writeStream.on('finish', function() {
	console.log("写入完成。");
});

writeStream.on('error',function (err) {
	console.log(err.stack);
})

console.log("程序执行完毕");
