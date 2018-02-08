angular.module('user.controller', [])
.controller('preferencesController', function($scope, geolocationservice, storageService, $window) {
	console.log(storageService.getAllData())
	$scope.locationFilter = storageService.getData('locationFilter');
	$scope.latitudeFilter = storageService.getData('latitudeFilter');
	$scope.longitudeFilter = storageService.getData('longitudeFilter');
	$scope.sortOptions = ['rating', 'best_match', 'review_count'];
	$scope.sortFilter = storageService.getData('sortFilter');
	$scope.dynamicVenueList = [];
	$scope.distanceFilter = parseInt(1609.34 * 5).toString();
	$scope.distanceOptions = ['5', '7', '10', '12', '15'];
	$scope.usingLocation = storageService.getData('usingLocation');
	$scope.locationType = $scope.usingLocation == false ? 'Address' : 'Carrier Pigeons & Tesla Cars in Space';

	$scope.showAdvanced = false;
	$scope.showAdvancedClass = 'link';
	$scope.showAdvancedToggle = function() {
		$scope.showAdvanced = $scope.showAdvanced == false ? true : false;
		$scope.showAdvancedClass = $scope.showAdvancedClass == 'link' ? 'link active' : 'link';
		console.log('done with this stuffs')
	}
	$scope.clearData = function() {
		storageService.clearData();
		$window.location.reload();
	}
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
		// start loading
		geolocationservice.getCurrentPosition().then(function(response) {
			$scope.locationFilter = '';
			$scope.usingLocation = true;
			$scope.latitudeFilter = response.latitude;
			$scope.longitudeFilter = response.longitude;
			$scope.locationType = 'Current Location';
			//end loading
		});
	}
	// ng-change methods
	$scope.updateLocationFilter = function(val) {
		storageService.setData('locationFilter', val);
	}
	$scope.updateSortFilter = function(val) {
		storageService.setData('sortFilter', val);
	}
	$scope.updateDistanceFilter = function(val) {
		var meters = 1609.34 * parseInt(val);
		storageService.setData('distanceFilter', parseInt(meters));
	}
	// this is switched via code so we have to watch
	$scope.$watch('usingLocation', function(val) {
		storageService.setData('usingLocation', val);
	});
	$scope.$watch('latitudeFilter', function(val) {
		if(val) {
			storageService.setData('latitudeFilter', parseFloat(val));
		}
	});
	$scope.$watch('longitudeFilter', function(val) {
		if(val) {
			storageService.setData('longitudeFilter', parseFloat(val));
		}
	});
});
