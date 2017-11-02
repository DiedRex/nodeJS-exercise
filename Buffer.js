var buf = new Buffer(256);

var buf2 = new Buffer([10,20,30,40,50]);

var buf3 = new Buffer("www.baidu.com百度以下你就知道","utf-8");

console.log(buf3,buf,buf2);

len = buf.write("www.baidu.com");

console.log('写入的子节数是'+ len );

var buf1 = new Buffer(30);

for(let i = 0;i<30;i++){
	buf1[i] = i+97;
}

console.log( buf1.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf1.toString('ascii',0,5));   // 输出: abcde
console.log( buf1.toString('utf8',0,5));    // 输出: abcde
console.log( buf1.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde


// var json = buf.toJSON(buf);
// console.log(json);

//buffer.concat方法的应用
// var buffer1 = new Buffer('菜鸟教程 ');
// var buffer2 = new Buffer('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());


//buffer.compare方法。
// var buffer2 = new Buffer('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//    console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//    console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//    console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

//buffer.copy方法

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(2);

buffer1.copy(buffer2);

console.log("buffer2的内容:"+buffer2.toString());

//buffer.slice()方法
var buffer3 = new Buffer('runoob');
// 剪切缓冲区
var buffer4 = buffer3.slice(1,5);
console.log("buffer4 content: " + buffer4.toString());


