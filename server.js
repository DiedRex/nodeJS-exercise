// var http = require('http');//require 引入http 模块

// http.createServer(function(request,response){
// 	//发送http头部
// 	//HTTP 状态值：200:0
// 	//发送的内容类型: text/plain
// 	response.writeHead(200,{'Content-Type':'test/plain'});

// 	//发送响应数据
// 	response.end('Hello World\n');

// }).listen(8789);

// //终端打印的信息为
// console.log('Server running at http://127.0.0.1:8789/');

var http = require('http');

var url = require('url');

function start(route) {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" + pathname + "recived");

		route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has Started.");
}

exports.start = start;
