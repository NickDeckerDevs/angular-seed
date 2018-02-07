angular.module('lunch.controllers', []).
controller('lunchController', function($scope, yelpAPIservice, geolocationservice) {
	$scope.locationFilter = '';
	$scope.geoFilter = '';
	$scope.latitudeFilter = '';
	$scope.longitudeFilter = '';
	$scope.sortOptions = ['rating', 'best_match', 'review_count'];
	$scope.sortFilter = 'rating';
	$scope.limitFilter = 10;
	$scope.dynamicVenueList = [];
	$scope.locationType = 'Address';
	geolocationservice.getCurrentPosition().then(function(response) {
		$scope.latitudeFilter = response.latitude;
		$scope.longitudeFilter = response.longitude;
		$scope.locationType = 'Current Location';
	});
	yelpAPIservice.getVenues().success(function(response) {
		$scope.dynamicVenueList = response.businesses;
	});


});
