var express = require('express');

var router = express.Router();
var todoItems = require('../models/todoItems');

//define the routes		
router.get('/', function(req, res){
	//load data from modules here
	res.render('index', {
		title: 'Welcome to Shopping List Demo',
		desc: 'Use Express.JS for the simple app',
		items:	todoItems			
	}); //index.xjs
	}); //http method
	
	
router.post('/add', function(req, res) {
	var newItemCategory = req.body.newItemCategory // use middleware module bodyparser
	var newItemDescription = req.body.newItemDescription; // 
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItemDescription,
		category: newItemCategory 
	});
	res.redirect('/'); //cause the browser to refresh with the updated data
	console.log(newItemCategory);
	console.log(newItemDescription);
});
	
	module.exports = router; //exports the router to the public