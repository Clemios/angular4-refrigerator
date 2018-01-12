var bcrypt = require('bcrypt');
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	port: '8889',
	user: 'recipes',
	password: 'recipes',
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
	pool.query("SELECT * FROM recipes ORDER BY id DESC", callback);
}

module.exports.addRecipe = function (data, callback) {
	pool.query("INSERT INTO recipes SET ?", data, callback);
}

module.exports.deleteRecipe = function (recipeId, callback) {
	pool.query("DELETE FROM recipes WHERE id = '" + recipeId + "'", callback);
}

module.exports.findByRecipeName = function (recipeName, callback) {
	pool.query("SELECT * FROM recipes WHERE recipeName = '" + recipeName + "'", callback);
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