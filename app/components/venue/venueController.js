angular.module('venue.controller', [])
.controller('venueController', function($scope, yelpAPIservice, storageService) {
	$scope.dynamicVenueList = {};

	scope.filters = {};
	$scope.getMyVenues = function() {
		$scope.filters = storageService.getApiData();
		yelpAPIservice.getVenues($scope).success(function(response) {
			console.log(response);
			$scope.dynamicVenueList = response.businesses;
		});
	}
});
