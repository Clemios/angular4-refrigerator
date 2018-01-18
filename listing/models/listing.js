var bcrypt = require('bcrypt');
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	port: '8889',
	user: 'listings',
	password: 'listings',
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
	pool.query("SELECT * FROM listings WHERE main = 'FALSE' ORDER BY id DESC", callback);
}

module.exports.addListing = function (data, callback) {
	pool.query("INSERT INTO listings SET ?", data, callback);
}

module.exports.addIngredientToListing = function (listingId, ingredients, callback) {
	pool.query("UPDATE listings SET ingredients = '" + ingredients + "' WHERE id ='" + listingId + "'", callback);
}

module.exports.deleteListing = function (listingId, callback) {
	pool.query("DELETE FROM listings WHERE id = '" + listingId + "'", callback);
}

module.exports.deleteIngredientFromListing = function (listingId, ingredients, callback) {
	pool.query("UPDATE listings SET ingredients = '" + ingredients + "' WHERE id ='" + listingId + "'", callback);
}

module.exports.findById = function (listingId, callback) {
	pool.query("SELECT * FROM listings WHERE id = '" + listingId + "'", callback);
}

module.exports.findMain = function (callback) {
	pool.query("SELECT * FROM listings WHERE main = 'TRUE'", callback);
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