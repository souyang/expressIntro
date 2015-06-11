var express = require('express'); //load the module, express will load ejs
var bodyParser = require('body-parser'); //use the middleware;
var path = require('path'); //standard loading
//configure the app, 
var app = express(); // app is the function
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use the middleware
//expressjs.com API reference Request/Middle ware older is important
app.use(express.static(path.join(__dirname, 'bower_components'))); //tell express to serach the file
app.use(express.static(path.join(__dirname, 'css'))); //tell express to serach the file
app.use(bodyParser()); //register the middleware

//define routes in todo.js, default in node_modules
app.use(require('./controllers/todo'));
//start the server
var port = process.env.PORT || 1337;
app.listen(port, function() {console.log("ready on port: " + port);});