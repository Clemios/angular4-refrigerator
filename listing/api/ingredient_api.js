var express = require('express');
var app = express();

// Import Listing Module Containing Functions Related To Listing Data
var listing = require('../models/listing');

// API Routes
app.get('/', function (req, res) {
	listing.findAll(function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.json(rows);
	})
});

app.post('/addlisting', function (req, res) {
	var data = req.body;
	console.log('DATA BEFORE INSERT:', data)
	listing.addListing(data, function (err, rows, fields) {
		if (err) {
			console.log(err);
			throw err
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/deletelisting', function (req, res) {
	var data = req.body;
	console.log('DATA BEFORE DELETE:', data)
	listing.deleteListing(data.id, function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.send(JSON.stringify(rows));
	})
});

module.exports = app;