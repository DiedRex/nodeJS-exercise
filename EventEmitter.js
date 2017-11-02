// var EventEmitter = require ('events').EventEmitter

// var event = new EventEmitter();

// event.on('some_event',function () {
// 	console.log('some_event事件触发');
// });

// setTimeout(function(){
// 	event.emit('some_event');
// },1000)


var events = require('events');

var emitter = new events.EventEmitter;

//相当于var EventEmitter = require('events').EventEmitter  var emitter = new EventEmitter

// emitter.on('someEvent',function te1(arg1,arg2) {
// 	console.log('listener1',arg1,arg2);
// });

// emitter.on('someEvent',function te2(arg1,arg2) {
// 	console.log('listener2',arg1,arg2);
// });

// emitter.emit('someEvent','arg1参数','arg2参数');

//

var listener1 = function listener1() {
	console.log('监听器listener1执行。');
}

var listener2 = function listener2() {
	console.log('监听器listener2执行。');
}

emitter.addListener('connection',listener1);

emitter.addListener('connection',listener2);

var eventlisteners = require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(eventlisteners +'个监听器监听连接的数量');


emitter.emit('connection');


// error test
// emitter.emit('error');

emitter.removeListener('connection',listener1);
console.log('listener1不再监听');

emitter.emit('connection');

eventlisteners = require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(eventlisteners +'个监听器监听连接的数量');

console.log("程序执行完毕。");

