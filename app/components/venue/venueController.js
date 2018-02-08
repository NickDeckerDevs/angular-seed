angular.module('venue.controller', [])
.controller('venueController', function($scope, yelpAPIservice, storageService) {
	$scope.dynamicVenueList = {};
	$scope.filters = {};
	$scope.getMyVenues = function() {
		$scope.filters = storageService.getApiData();
		yelpAPIservice.getVenues($scope)
			.then(function onSuccess(response) {
				console.log(response.data);
				$scope.dynamicVenueList = response.data.businesses;
			}).catch(function onError(response) {
				console.log('error!')
				var data = response.data;
				console.log(data)
			    var status = response.status;
			    var statusText = response.statusText;
			    var headers = response.headers;
			    var config = response.config;
		});
	}
});
