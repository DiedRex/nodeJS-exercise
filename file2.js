var fs = require('fs');

console.log("程序准备执行");

fs.stat('File.txt/input.txt', function (err, stats) {
	if (err) {
			return console.error(err);
	}
	console.log(stats);
	console.log("读取文件信息成功！");


//检测文件类型

console.log("是否为文件(isFile)?" + stats.isFile());
console.log("是否为目录(isDirectory)?" + stats.isDirectory());

});


//写入文件

console.log("准备写入文件");

fs.writeFile('File.txt/input.txt','我是通过写入的文件内容！',  function(err){
	if(err){
		return console.error(err);
	}

	console.log("数据写入成功！");
	console.log("--------我是分割线-------------")
	console.log("读取写入的数据！");

	fs.readFile('File.txt/input.txt',function (arr,data) {
		if(err){
			return console.error(err);
		}

		console.log("异步读取的文件:" + data.toString());
	});
});


var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");
fs.open('File.txt/input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");

      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
			}

      // 关闭文件
      fs.close(fd, function(err){
				if (err){
					 console.log(err);
				}
				console.log("文件关闭成功");
			});
   });
});
