var express = require('express'); // create express module, now install in terminal
var path = require('path');
var app = express();
var port = 3000;

// set public views and handlebars
app.use(express.static(__dirname + 'public')); // creating a directory 
app.set('views', path.join(__dirname, '/views')); // joining all those files in directory name
app.set('view engine', 'hbs');


// require our controllers - home and playground
var homeCtrl = require('./controllers/home');
var playgroundCtrl = require('./controllers/playground');
var userCtrl = require('./controllers/user');


// map '/' routes to controllers
app.use('/', homeCtrl); // in localhost:3000/
app.use('/play', playgroundCtrl); // in localhost:3000/play
app.use('/user', userCtrl);


app.listen(process.env.PORT || port); // listen for express in port/add server to port/process express env in port
	console.log("server has started");


