
//匿名函数的使用和调用方式
function excute(someFunction,value) {
	someFunction(value);
}


excute(function (word) {
	console.log(word);
},'hello');
//原型如下，通过匿名函数可以减少函数方法的名字，对于不大会取英文名字的我们来说，实在是太好用了

// function say(word){
// 	console.log(word);
// }

// function excute(someFunction,value){
// 	someFunction(value);
// }
// excute(say,"hello")
