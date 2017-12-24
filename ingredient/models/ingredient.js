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

// connection.connect(function () {
// 	console.log("Database connected");
// });


module.exports.findAll = function (callback) {
	pool.query("SELECT * FROM ingredients ORDER BY id DESC", callback);
}

module.exports.addIngredient = function (data, callback) {
	pool.query("INSERT INTO ingredients SET ?", data, callback);
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