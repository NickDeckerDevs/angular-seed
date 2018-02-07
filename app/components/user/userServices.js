angular.module('user.services', [])
.factory('geolocationservice', ['$q', '$window', function($q, $window) {
	'use strict';
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
