angular.module('venue.services', [])
.factory('yelpAPIservice', function($http) { //options to be brought in or some how override default
	'use strict';
	var apiRequest = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}

	var yelpAPI = {};
	yelpAPI.getVenues = function($scope) {
		console.log('sending to yelp api frontend')
		var filters = $scope.filters;
		console.log(filters);
		return $http.post('/api/yelp', filters, apiRequest.headers);
	}
	return yelpAPI;
})
