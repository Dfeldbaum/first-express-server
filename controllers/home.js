// this controller requires express + express.router
var express = require('express'); // need to call express bc modules are independent
var ctrl 	= express.Router();

ctrl.get('/', function(req, res, next) {
	res.render('index', {
			message: 'It is Russells birthday'
	});
});

ctrl.get('/home', function(req, res, next){
	res.render('hello', {
		name: 'Homer Simpson',
		adjective: 'funny',
		framework: 'Express.js'
	});
});

// export controller
module.exports = ctrl;