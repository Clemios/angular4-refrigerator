var express = require('express');
var app = express();

// Import Schedule Module Containing Functions Related To Schedule Data
var schedule = require('../models/schedule');

// API Routes
app.get('/', function (req, res) {
	schedule.findAll(function (err, rows, fields) {
		if (err) console.log(res), res.send(err);
		if (rows) res.json(rows);
	})
});

app.post('/get', function (req, res) {
	var data = req.body;
	console.log('Demande de la liste: ', data)
	schedule.findById(data.id, function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.json(rows[0]);
	})
});

app.post('/get-main', function (req, res) {
	var data = req.body;
	console.log('Demande de la liste principale ')
	schedule.findMain(function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.json(rows[0]);
	})
});

app.post('/addschedule', function (req, res) {
	var scheduleName = req.body.name;
	console.log('Nouvelle liste: ', scheduleName)
	schedule.addSchedule({
		name: scheduleName,
		main: 'FALSE',
		ingredients: '[]'
	}, function (err, rows, fields) {
		if (err) {
			console.log(err);
			throw err
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/addingredient-toschedule', function (req, res) {
	var scheduleId = req.body.id;
	var ingredients = req.body.ingredients;
	console.log('Nouvel Ingrédient: ', ingredients)
	console.log('Pour la Liste: ', scheduleId)
	schedule.addIngredientToSchedule(scheduleId, ingredients, function (err, rows, fields) {
		if (err) {
			console.log(err);
			throw err
		};
		res.send(JSON.stringify(rows));
	})
});

app.post('/deleteschedule', function (req, res) {
	var data = req.body;
	console.log('Supression de la liste: ', data)
	schedule.deleteSchedule(data.id, function (err, rows, fields) {
		if (err) res.send(err);
		if (rows) res.send(JSON.stringify(rows));
	})
});

app.post('/deleteingredient-fromschedule', function (req, res) {
	var scheduleId = req.body.id;
	var ingredients = req.body.ingredients;
	console.log('Nouvel Ingrédient: ', ingredients)
	console.log('Pour la Liste: ', scheduleId)
	schedule.deleteIngredientFromSchedule(scheduleId, ingredients, function (err, rows, fields) {
		if (err) {
			console.log(err);
			throw err
		};
		res.send(JSON.stringify(rows));
	})
});

module.exports = app;