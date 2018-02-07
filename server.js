// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var request        = require('request');
var methodOverride = require('method-override');

// helper functions ========================================

function consoleObject(jsobj) {
	var json = JSON.stringify(jsobj, null, 4);
	console.log(json);
}

function stringifyParams(params) {
	var urlParams = '?';
	Object.keys(params).forEach(function(key) {
		urlParams += '&' + key + '=' + params[key];
	});
	return urlParams;
}

// configuration ===========================================

// config files
// var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
// app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/app'));

// routes ==================================================
// require('./app/routes')(app); // configure our routes

var router = express.Router();

// all requests
router.use(function(req, res, next) {
	// if we need some middleware
	// console.log('doing work');
	next();
});

// backend route to assist app with getting data from yelp
app.post('/api/yelp', function(req, res) {
	var apiRequest = {
		token :'ujnuZ58kESbm8uaUE3afRcHAJ4Zpzf9AFKWTu1CE595CBWdwiC1ApJQfWNyHxfSzHpyEJiAFovzE1SXhEIGAJ77NHTNhlujOGTePs-x8cbws8zdUCKO3gu9S_-h5WnYx',
		endpoint: 'https://api.yelp.com/v3/businesses/search',
	}
	var defaults = {
		location: 'Cape%20Coral,%20FL,%2033991',
		sort_by: 'rating',
		limit: 10
	}
	var options = {
		term: 'restaurants',
		location: req.body.location ? req.body.location : defaults.location,
		sort_by: req.body.sort_by ? req.body.sort_by : defaults.sort_by,
		limit: req.body.limit ? req.body.limit : defaults.limit
	}
	console.log('limit: ' + options.limit)

	var requestUrl = apiRequest.endpoint + stringifyParams(options);
	request.get(requestUrl, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + apiRequest.token
		}

	}, function optionalCallBack(error, response, body) {
		if(error) {
			console.log(error)
			res.send(error);
		}
		res.send(body);
	});
});

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
