var express = require('express');
var ctrl 	= express.Router()


// data for our routes
var data = [
	{
		name: 'Bruce Feldbaum',
		relationship: "Father",
		notes: 'kickass lawyer'
	},
	{
		name: 'Sylvia Feldbaum',
		relationship: 'Mother',
		notes: 'where I get my anxiety'
	},
	{
		name: 'Rebecca Feldbaum',
		relationship: 'Sister',
		notes: 'drinks too much'
	}
];


// build our first real API
ctrl.get('/', function(req, res, next) {
	res.json(data);
});


ctrl.get('/1', function(req, res, next) {
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next) {
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next) {
	res.json(data[2]);
});



module.exports = ctrl;
