var mongojs = require('mongojs');

var databaseUrl = 'simplewebV1';
var collections = ['users', 'courses'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
	connect: connect
};
