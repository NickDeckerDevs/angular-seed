angular.module('venue.services', [])
.factory('yelpAPIservice', function($http) { //options to be brought in or some how override default
	'use strict';
	console.log('starting backend api call')
	var apiRequest = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}

	var yelpAPI = {};
	yelpAPI.getVenues = function($scope) {
		var filters = $scope.filters;
		console.log('filter options being sent to api')
		console.log(filters);
		return $http.post('/api/yelp', filters, apiRequest.headers);
	}
	return yelpAPI;
})
