angular.module('venue.controller', [])
.controller('venueController', function($scope, yelpAPIservice) {
	$scope.dynamicVenueList = {};
	$scope.getMyVenues = function() {
		yelpAPIservice.getVenues($scope).success(function(response) {
			$scope.dynamicVenueList = response.businesses;
		});
	}
});
