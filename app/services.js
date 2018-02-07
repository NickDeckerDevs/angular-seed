angular.module('lunch.services', [])
	.factory('yelpAPIservice', function($http) { //options to be brought in or some how override default
		'use strict';
		var apiRequest = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}

		var yelpAPI = {};
		yelpAPI.getVenues = function(options) {
			var defaults = {
				location: '33991',
				sort_by: 'rating',
				limit: 10
			}
			var filters = {
				term: 'restaurants',
				location: defaults.location,
				sort_by: defaults.sort_by,
				limit: defaults.limit
			};
			return $http.post('/api/yelp', filters, apiRequest.headers);
		}
		return yelpAPI;
	})
	.factory('geolocationservice', ['$q', '$window', function($q, $window) {
		'use strict';
		document.getElementById('getMyLocationButton').disabled = true;
		document.getElementById('address').disabled = true;
		var userLocation = {};
		userLocation.loading = 'Getting Location';
		var defer = $q.defer();
		userLocation.getCurrentPosition = function() {
			if(!$window.navigator.geolocation) {
				defer.reject('Geolocation not supported');
			} else {
				$window.navigator.geolocation.getCurrentPosition(
					function(position) {
						defer.resolve(position.coords);
					},
					function(err) {
						defer.reject(err);
					});
			}
			return defer.promise;
		}
		return userLocation;
	}]);
