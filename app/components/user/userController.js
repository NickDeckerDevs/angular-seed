angular.module('user.controller', [])
.controller('preferencesController', function($scope, geolocationservice) {
	$scope.locationFilter = 'Ft. Myers, FL';
	$scope.latitudeFilter = '';
	$scope.longitudeFilter = '';
	$scope.sortOptions = ['rating', 'best_match', 'review_count'];
	$scope.sortFilter = 'rating';
	$scope.limitFilter = 30;
	$scope.dynamicVenueList = [];
	$scope.distanceFilter = '5';
	$scope.distanceOptions = ['5', '7', '10', '12', '15'];

	$scope.usingLocation = false;
	$scope.locationType = $scope.usingLocation == false ? 'Address' : 'Location';
	$scope.isAddress = function() {
		return $scope.locationType == 'address' ? true : false;
	}
	$scope.resetLocation = function() {
		$scope.latitudeFilter = '';
		$scope.longitudeFilter = '';
		$scope.usingLocation = false;
		$scope.locationType = 'Address';
	}
	$scope.getCurrentLocation = function() {
		$scope.locationFilter = '';
		$scope.usingLocation = true;
		geolocationservice.getCurrentPosition().then(function(response) {
			$scope.latitudeFilter = response.latitude;
			$scope.longitudeFilter = response.longitude;
			$scope.locationType = 'Current Location';
		});
	}

});
