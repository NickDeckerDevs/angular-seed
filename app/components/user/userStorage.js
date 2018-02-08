angular.module('user.storage', [])
.factory('storageService', function($window, $rootScope) {
	var defaultLocations = [
		'Albuquerque, NM',
		'Tucson, AZ',
		'El Paso, TX',
		'Tampa, FL',
		'Stockton, CA',
		'Greensboro, NC',
		'Lincoln, NE',
		'Seattle, WA',
		'Stanta Ana, CA',
		'Akron, OH',
		'Virginia Beack, VA'
	];
	var apiItems = [
		'locationFilter',
		'sortFilter',
		'distanceFilter',
		'usingLocation',
		'latitudeFilter',
		'longitudeFilter'
	];
	function createNewApiObject(storageObject) {
		console.log('creating new api object')
		var apiObject = {};
		apiItems.forEach(function(element) {
			apiObject[element] = storageObject[element];
		});
		return apiObject;
	}
	function getStoredObject() {
		console.log('getting stored object')
		var storage = $window.localStorage && $window.localStorage.getItem('whatsForlunch');
		if(storage) {
			var storageObject = JSON.parse(storage);
		} else {
			var storageObject = createNewDefaultObject();
		}
		return storageObject;
	}
	function createNewDefaultObject() {
		var randomNumber = Math.floor(Math.random() * defaultLocations.length);
		var defaultObject = {
			locationFilter: defaultLocations[randomNumber],
			sortFilter: 'rating',
			distanceFilter: '5',
			usingLocation: false,
			latitudeFilter: '',
			longitudeFilter: ''
		};
		console.log('creating default');
		console.log(defaultObject)

		$window.localStorage && $window.localStorage.setItem('whatsForlunch', JSON.stringify(defaultObject));
		return defaultObject;

	}
	return {
		setData: function(key, val) {
			// just in case we have a little fallback
			if(val === null) return;
			var storage = $window.localStorage && $window.localStorage.getItem('whatsForlunch');
			var storageObject = storage === null ? {} : JSON.parse(storage);
			if(storageObject[key] != val || !storageObject[key]) {
				storageObject[key] = val;
				$window.localStorage && $window.localStorage.setItem('whatsForlunch', JSON.stringify(storageObject));
			} else {
				console.log('item was not saved because it was the same');
			}
			console.log('setting data: key: ' + key + '  val: ' + val)
			console.log($window.localStorage.getItem('whatsForlunch'))
			// console.log('set');
			// console.log($window.localStorage && $window.localStorage.getItem('whatsForlunch'));
		},
		getData: function(key) {
			console.log('getting from key: ' + key)
			var storageObject = getStoredObject();
			return storageObject.key;
		},
		getAllData: function() {
			return getStoredObject();

		},
		getApiData: function() {
			console.log('api data')
			var storageObject = getStoredObject();
			var apiObject = {};
			apiItems.forEach(function(element) {
				apiObject[element] = storageObject[element];
			});
			return apiObject;
		}
	};
});
