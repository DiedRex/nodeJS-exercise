console.log(__filename);

// 输出全局变量 __dirname 的值
console.log( __dirname );

console.info("程序开始执行:");

var count = 10;

console.log("计数: %d",count);

console.time("获取数据");

console.timeEnd('获取数据');

console.info("程序执行完毕。")
