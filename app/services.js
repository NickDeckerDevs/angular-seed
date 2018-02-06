angular.module('lunch.services' [])
	.factory('yelpAPIservice', function($http) { //options to be brought in or some how override default
		var auth = 'Bearer ujnuZ58kESbm8uaUE3afRcHAJ4Zpzf9AFKWTu1CE595CBWdwiC1ApJQfWNyHxfSzHpyEJiAFovzE1SXhEIGAJ77NHTNhlujOGTePs-x8cbws8zdUCKO3gu9S_-h5WnYx';
		var defaults = {
			endpoint: 'https://api.yelp.com/v3/businesses/search',
			location: 'Bonita%20Springs,%20FL',
			sort_by: 'rating',
			limit: 10
		}
		var apiUrl = endpoint + '?term=restaurants&location=' + defaults.location + '&sorty_by=' + defaults.sort_by + '&open_now=true&limit=' + defaults.limit;
		var apiRequest = {
			method: 'GET',
			url: apiUrl,
			headers: {
				'Authorization:': auth
			}
		}
		var yelpAPI = {};
		yelpAPI.getVenues = function() {
			return $http(apiRequest);
		}
		return yelpAPI;
	});
