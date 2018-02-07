angular.module('lunch.controllers', []).
controller('lunchController', function($scope, yelpAPIservice, geolocationservice) {
	$scope.locationFilter = '';
	$scope.geoFilter = '';
	$scope.latitudeFilter = '';
	$scope.longitudeFilter = '';
	$scope.sortFilter = 'rating';
	$scope.limitFilter = 10;
	$scope.dynamicVenueList = [];
	geolocationservice.getCurrentPosition().then(function(response) {
		$scope.latitudeFilter = response.latitude;
		$scope.longitudeFilter = response.longitude;
	});
	yelpAPIservice.getVenues().success(function(response) {
		$scope.dynamicVenueList = response.businesses;
	});


});
