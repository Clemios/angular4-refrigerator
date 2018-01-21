var express = require('express');
var app = express();

// Import Listing Module Containing Functions Related To Listing Data
var listing = require('../models/listing');

// API Routes
app.get('/', function (req, res) {
	listing.findAll(function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/get', function (req, res) {
	var data = req.body;
	console.log('Demande de la liste: ', data)
	listing.findById(data.id, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows[0]));
	})
});

app.post('/get-main', function (req, res) {
	var data = req.body;
	console.log('Demande de la liste principale ')
	listing.findMain(function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows[0]));
	})
});

app.post('/addlisting', function (req, res) {
	var listingName = req.body.name;
	console.log('Nouvelle liste: ', listingName)
	listing.addListing({
		name: listingName,
		main: 'FALSE',
		ingredients: '[]'
	}, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/addingredient-tolisting', function (req, res) {
	var listingId = req.body.id;
	var ingredients = req.body.ingredients;
	console.log('Nouvel Ingrédient: ', ingredients)
	console.log('Pour la Liste: ', listingId)
	listing.addIngredientToListing(listingId, ingredients, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/deletelisting', function (req, res) {
	var data = req.body;
	console.log('Supression de la liste: ', data)
	listing.deleteListing(data.id, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/deleteingredient-fromlisting', function (req, res) {
	var listingId = req.body.id;
	var ingredients = req.body.ingredients;
	console.log('Nouvel Ingrédient: ', ingredients)
	console.log('Pour la Liste: ', listingId)
	listing.deleteIngredientFromListing(listingId, ingredients, function (err, rows, fields) {
		if (err) {
			console.log(err.code);
			res.send(err);
		};
		res.send(JSON.stringify(rows));
	})
});

module.exports = app;