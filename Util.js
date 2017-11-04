var util = require('util');

function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello' + this.name);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub() {
	this.name = 'sub';
}

util.inherits(Sub,Base);

var objbase = new Base();

objbase.showName();
objbase.sayHello();

console.log(objbase);

var objsub = new Sub();

objsub.showName();
// objsub.sayHello();

console.log(objsub);


function Person() {
	this.name = 'byvoid';
	this.toString = function () {
		return this.name;
	};
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
