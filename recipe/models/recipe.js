var bcrypt = require('bcrypt');
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	port: '8889',
	recipe: 'recipes',
	password: 'recipes',
	database: 'kitchen'
});

// connection.connect(function () {
// 	console.log("Database connected");
// });


module.exports.findAll = function (callback) {
	connection.query("SELECT * FROM recipes ORDER BY id DESC", callback);
}

module.exports.addRecipe = function (data, callback) {
	connection.query("INSERT INTO recipes SET ?", data, callback);
}

module.exports.findByRecipename = function (recipename, callback) {
	connection.query("SELECT * FROM recipes WHERE recipename = '" + recipename + "'", callback);
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