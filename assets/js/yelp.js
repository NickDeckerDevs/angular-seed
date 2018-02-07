
module.exports = {
	getYelpData: function(req, res) {
		var apiRequest = getApiDetails();
		var options = getYelpOptions(req);
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
	},
	getYelpOptions: function(req) {
		var options = {
			term: 'restaurants',
			location: req.body.location,
			sort_by: req.body.sort_by,
			limit: req.body.limit
		}
		return options;
	},
	getApiDetails: function() {
		var apiRequest = {
			token :'ujnuZ58kESbm8uaUE3afRcHAJ4Zpzf9AFKWTu1CE595CBWdwiC1ApJQfWNyHxfSzHpyEJiAFovzE1SXhEIGAJ77NHTNhlujOGTePs-x8cbws8zdUCKO3gu9S_-h5WnYx',
			endpoint: 'https://api.yelp.com/v3/businesses/search',
		}
		return apiRequest;
	}

}



function getYelpOptions(req) {

}
