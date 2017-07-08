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


/*********************************************
Everything below this is for the $http example
*********************************************/

app.get('/list', function(req,res) {
	res.json(['car','red','apples']);
});

app.get('/random', function(req,res) {
	res.json(Math.random()*100);
});
