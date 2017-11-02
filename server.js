var http = require('http');//require 引入http 模块

http.createServer(function(request,response){
	//发送http头部
	//HTTP 状态值：200:0
	//发送的内容类型: text/plain
	response.writeHead(200,{'Content-Type':'test/plain'});

	//发送响应数据
	response.end('Hello World\n');

}).listen(8789);

//终端打印的信息为
console.log('Server running at http://127.0.0.1:8789/');
