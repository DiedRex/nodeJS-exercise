function Hello() {//function中的this的方法和函数，没有this.name；。因name是var出来的;如若想this指向函数Hello，name可以改为this.name;
	this.setname = function (thyname) {
		name = thyname;
		console.log(name);
	};

	this.sayHello = function () {
		console.log('Hello' + name);
	};
}

module.exports = Hello;

