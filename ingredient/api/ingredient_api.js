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
	console.log('Nouvel Ingrédient: ', data)
	ingredient.addIngredient(data, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/updateingredient', function (req, res) {
	var ingredientId = req.body.id;
	var quantity = req.body.quantity;
	console.log("Mise a jout de la quantitée: ", quantity)
	console.log("Pour la l'Ingredient: ", ingredientId)
	ingredient.updateIngredient(ingredientId, quantity, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/deleteingredient', function (req, res) {
	var data = req.body;
	console.log("Supression de l'ingredient: ", data)
	ingredient.deleteIngredient(data.id, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

module.exports = app;