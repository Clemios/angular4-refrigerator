var express = require('express');
var app = express();

// Import Recipe Module Containing Functions Related To Recipe Data
var recipe = require('../models/recipe');

// API Routes
app.get('/', function (req, res) {
	recipe.findAll(function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.json(rows);
	})
});

app.post('/addrecipe', function (req, res) {
	var data = req.body;
	console.log('DATA BEFORE INSERT:', data)
	recipe.addRecipe(data, function (err, rows, fields) {
		if (err) {
			console.log(err);
			throw err
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/deleterecipe', function (req, res) {
	var data = req.body;
	console.log('DATA BEFORE DELETE:', data)
	recipe.deleteRecipe(data.id, function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.send(JSON.stringify(rows));
	})
});

module.exports = app;