angular.module('venue.controller', [])
.controller('venueController', function($scope, yelpAPIservice, storageService) {
	$scope.dynamicVenueList = {};
	$scope.test = 'not loaded';
	$scope.filters = {};
	$scope.getMyVenues = function() {
		$scope.filters = storageService.getAllData();
		yelpAPIservice.getVenues($scope).success(function(response) {
			$scope.test = 'loadedAF';
			console.log(response);
			$scope.dynamicVenueList = response.businesses;
		});
	}
});
