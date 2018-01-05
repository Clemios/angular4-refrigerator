var bcrypt = require('bcrypt');
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	port: '8889',
	user: 'users',
	password: 'users',
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
	connection.query("SELECT * FROM users ORDER BY id DESC", callback);
}

module.exports.checkForSignin = function (signinEmail, signinPassword, callback) {
	pool.query("SELECT * FROM users WHERE email = '" + signinEmail + "' and password = '" + signinPassword + "'", callback);
}

module.exports.addUser = function (data, callback) {
	connection.query("INSERT INTO users SET ?", data, callback);
}

module.exports.findByUsername = function (username, callback) {
	connection.query("SELECT * FROM users WHERE username = '" + username + "'", callback);
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