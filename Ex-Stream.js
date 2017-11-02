var fs = require('fs');

//从input.txt中获得可输出流，以备用输出到输出流
var readStream = fs.createReadStream('File.txt/input.txt');//

//创建一个可写入output.txt的流，便于输入了能够进入
var writeStream = fs.createWriteStream('File.txt/output.txt');

管道操作，直接由可输出流进入可输入如流。

readStream.pipe(writeStream);

console.log("程序执行完毕")


/*以下是链式流
 * 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
 * 接下来我们就是用管道和链式来压缩和解压文件
 *
 */


 //压缩文件input.txt为input.txt.gz

 var zlib = require('zlib');

//  fs.createReadStream('File.txt/input.txt')
// 		.pipe(zlib.createGzip())
// 			.pipe(fs.createWriteStream('File.txt/input.txt.gz'));

//  console.log('文件压缩完成');




 //解压文件
 fs.createReadStream('File.txt/input.txt.gz')
		.pipe(zlib.createGunzip())
			.pipe(fs.createWriteStream('File.txt/input.txt'));

 console.log("解压完成");
