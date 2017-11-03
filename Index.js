// var Hello = require('./Hello');


// var hello = new Hello();


// hello.setname("容理健");

// hello.sayHello();

var server = require('./server');
var router = require('./router');

server.start(router.route);
