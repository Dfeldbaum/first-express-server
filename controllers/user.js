var express = require('express');
var ctrl = express.Router();

var users = [ 
	{
		username: 'Testy McTestingSon',
		password: 'yooooooopassword'
	}, 
	{
		username: 'Bilbo Baggins',
		password: 'blacccccch'
	},
	{
		username: 'mushrooms',
		password: 'woooooooo'
	}
];


ctrl.get('/', function(req, res, next) {
	res.json(users);

	// res.render('view', {})
});



module.exports = ctrl;