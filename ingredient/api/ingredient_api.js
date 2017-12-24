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

app.post('/addingredient', function (req, res) {
	var data = req.body;
	ingredient.addIngredient(data, function (err, rows, fields) {
		if (err) throw err;
		res.json(rows);
	})
});

module.exports = app;