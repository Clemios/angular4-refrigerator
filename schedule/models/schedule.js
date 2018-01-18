var bcrypt = require('bcrypt');
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	port: '8889',
	user: 'schedules',
	password: 'schedules',
	database: 'kitchen'
});

pool.getConnection(function (err, connection) {
	if (!err) {} else {
		console.log('Problème de connection à la base de données');
		console.log('code :', err.code);
		if (!err.sqlMessage) {
			console.log('Le serveur MySQL est il bien démmaré ?');
		} else {
			console.log('sqlMessage : ', err.sqlMessage);
		}
	}
});

module.exports.findAll = function (callback) {
	pool.query("SELECT * FROM schedules WHERE main = 'FALSE' ORDER BY id DESC", callback);
}

module.exports.addSchedule = function (data, callback) {
	pool.query("INSERT INTO schedules SET ?", data, callback);
}

module.exports.addIngredientToSchedule = function (scheduleId, ingredients, callback) {
	pool.query("UPDATE schedules SET ingredients = '" + ingredients + "' WHERE id ='" + scheduleId + "'", callback);
}

module.exports.deleteSchedule = function (scheduleId, callback) {
	pool.query("DELETE FROM schedules WHERE id = '" + scheduleId + "'", callback);
}

module.exports.deleteIngredientFromSchedule = function (scheduleId, ingredients, callback) {
	pool.query("UPDATE schedules SET ingredients = '" + ingredients + "' WHERE id ='" + scheduleId + "'", callback);
}

module.exports.findById = function (scheduleId, callback) {
	pool.query("SELECT * FROM schedules WHERE id = '" + scheduleId + "'", callback);
}

module.exports.findMain = function (callback) {
	pool.query("SELECT * FROM schedules WHERE main = 'TRUE'", callback);
}

module.exports.encrypt = function (data, callback) {
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(data.password, salt, callback);
	})
}

module.exports.sendResponse = function (success, res) {
	if (success) {
		res.send({
			'success': 'true'
		});
	} else {
		res.send({
			'success': 'false'
		});
	}
}