var express = require('express'); // create express module, now install in terminal
var path = require('path');
var app = express();
var port = 3000;



app.listen(process.env.PORT || port); // listen for express in port, add server to port
	console.log("server has started");

