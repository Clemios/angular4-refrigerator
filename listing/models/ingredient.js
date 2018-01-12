var bcrypt = require('bcrypt');
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	port: '8889',
	user: 'ingredients',
	password: 'ingredients',
	database: 'kitchen'
});

pool.getConnection(function (err, connection) {
	if (!err) {
		console.log('Database connected');
	} else {
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
	pool.query("SELECT * FROM ingredients ORDER BY id DESC", callback);
}

module.exports.addIngredient = function (data, callback) {
	pool.query("INSERT INTO ingredients SET ?", data, callback);
}

module.exports.deleteIngredient = function (ingredientId, callback) {
	pool.query("DELETE FROM ingredients WHERE id = '" + ingredientId + "'", callback);
}

module.exports.findByIngredientName = function (ingredientName, callback) {
	pool.query("SELECT * FROM ingredients WHERE ingredientName = '" + ingredientName + "'", callback);
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