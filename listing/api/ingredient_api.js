var express = require('express');
var app = express();

// Import Ingredient Module Containing Functions Related To Ingredient Data
var ingredient = require('../models/ingredient');

// API Routes
app.get('/', function (req, res) {
	ingredient.findAll(function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.json(rows);
	})
});

app.post('/addingredient', function (req, res) {
	var data = req.body;
	console.log('DATA BEFORE INSERT:', data)
	ingredient.addIngredient(data, function (err, rows, fields) {
		if (err) {
			console.log(err);
			throw err
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/deleteingredient', function (req, res) {
	var data = req.body;
	console.log('DATA BEFORE DELETE:', data)
	ingredient.deleteIngredient(data.id, function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.send(JSON.stringify(rows));
	})
});

module.exports = app;