var express = require('express');

var router = express.Router();

//define the routes
 var todoItems = [
		{id: 1, category: 'Snack', desc: 'Snickers'},
		{id: 2, category: 'Seafood', desc: 'Lamb'},
		{id: 3, category: 'Meat', desc: 'Pork'},
		{id: 4, category: 'Beverage', desc: 'RedBull'}
		];
		
router.get('/', function(req, res){
	//load data from DB here
	res.render('index', {
		title: 'Welcome to Shopping List Demo',
		desc: 'It shows how to using Express.JS to develop a simple web app',
		items:	todoItems			
	}); //index.xjs
	}); //http method
	
	
router.post('/add', function(req, res) {
	var newItemCategory = req.body.newItemCategory // req.body needs middleware installed.
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