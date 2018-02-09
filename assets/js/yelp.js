
module.exports = {
	getYelpData: function(req, res) {
		var request = require('request');
		var apiRequest = this.getApiDetails();
		var options = this.getYelpOptions(req);
		var requestUrl = apiRequest.endpoint + this.stringifyParams(options);
		console.log('api GET url: ' + requestUrl)
		request.get(requestUrl, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + apiRequest.token
			}
		}, function optionalCallBack(error, response, body) {
			console.log('modem dialup in progress. Don\'t let mom pick up the phone')
			if(error) {
				console.log('error in api call')
				res.send(error);
			}
			console.log('success in api call')
			res.send(body);
		});
	},
	getYelpOptions: function(req) {
		var radius = req.body.distanceFilter <= 15 ? parseInt(1609.34 * parseInt(req.body.distanceFilter)) : req.body.distanceFilter;
		radius = radius >= 40000 ? 39000 : radius;
		var options = {
			term: 'restaurants',
			radius: radius,
			sort_by: req.body.sortFilter,
			limit: 40,
			open_now: true
		};
		this.consoleObject(options);
		if(req.body.usingLocation) {
			options.latitude = req.body.latitudeFilter;
			options.longitude = req.body.longitudeFilter;
		} else {
			options.location = req.body.locationFilter;
		}
		// console.log('options in backend api call')
		// console.log(options)
		return options;
	},
	getApiDetails: function() {
		var apiRequest = {
			token :'ujnuZ58kESbm8uaUE3afRcHAJ4Zpzf9AFKWTu1CE595CBWdwiC1ApJQfWNyHxfSzHpyEJiAFovzE1SXhEIGAJ77NHTNhlujOGTePs-x8cbws8zdUCKO3gu9S_-h5WnYx',
			endpoint: 'https://api.yelp.com/v3/businesses/search',
		}
		return apiRequest;
	},
	stringifyParams: function(params) {
		var urlParams = '?';
		Object.keys(params).forEach(function(key) {
			urlParams += '&' + key + '=' + params[key];
		});
		return urlParams;
	},
	// testing
	consoleObject: function(jsobj) {
		var json = JSON.stringify(jsobj, null, 4);
		console.log(json);
	}


}
