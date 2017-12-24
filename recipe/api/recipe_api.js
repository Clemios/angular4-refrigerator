var express = require('express');
var app = express();

// Import Recipe Module Containing Functions Related To Recipe Data
var recipe = require('../models/recipe');

// API Routes
app.get('/', function (req, res) {

	recipe.findAll(function (err, rows, fields) {
		if (err) throw err;
		res.json(rows);
	})
});

app.post('/addrecipe', function (req, res, next) {
	var data = req.body;
	recipe.findByRecipename(data.recipename, function (err, rows, fields) {
		if (rows.length == 1) {
			recipe.sendResponse(false, res);
		} else {
			recipe.encrypt(data, function (err, hash) {
				data = {
					recipename: data.recipename,
					hashedpassword: hash
				};
				recipe.addRecipe(data, function (err, info) {
					if (err) throw err;
					console.log(info);
					recipe.sendResponse(true, res);
				});
			});
		};
	});
});

module.exports = app;