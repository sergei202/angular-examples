'use strict';

// Import the express module
var express = require('express');

// Create our express app
var app = express();

// Mount are website (inside the public directory) at /
app.use('/', express.static('./public'));

// Listen on port 3000
app.listen(3000, function(err) {
	console.log('Listening at http://localhost:3000');
});
