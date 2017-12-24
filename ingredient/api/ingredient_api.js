var express = require('express');
var app = express();

// Import Ingredient Module Containing Functions Related To Ingredient Data
var ingredient = require('../models/ingredient');

// API Routes
app.get('/', function (req, res) {
	ingredient.findAll(function (err, rows, fields) {
		if (err) throw err;
		res.json(rows);
	})
});

app.post('/addingredient', function (req, res, next) {
	var data = req.body;
	ingredient.findByIngredientname(data.ingredientname, function (err, rows, fields) {
		if (rows.length == 1) {
			ingredient.sendResponse(false, res);
		} else {
			ingredient.encrypt(data, function (err, hash) {
				data = {
					ingredientname: data.ingredientname,
					hashedpassword: hash
				};
				ingredient.addIngredient(data, function (err, info) {
					if (err) throw err;
					console.log(info);
					ingredient.sendResponse(true, res);
				});
			});
		};
	});
});

module.exports = app;