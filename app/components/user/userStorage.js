angular.module('user.storage', [])
.factory('storageService', function($window, $rootScope, $filter) {
	var distanceAngularFilter = $filter('toMeters');
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
			console.log('storage existed, getting it')
			var storageObject = JSON.parse(storage);
		} else {
			console.log('creating the storage object')
			var storageObject = createNewDefaultObject();
		}
		console.log(storageObject)
		return storageObject;
	}
	function createNewDefaultObject() {
		var randomNumber = Math.floor(Math.random() * defaultLocations.length);
		var location = defaultLocations[randomNumber] ;
		var sort = 'rating';
		var distance = distanceAngularFilter(5);
		var using = false;
		var latitude = false;
		var longitude = false;
		var defaultObject = {
			locationFilter: location,
			sortFilter: sort,
			distanceFilter: distance,
			usingLocation: using,
			latitudeFilter: latitude,
			longitudeFilter: longitude
		};
		console.log('get rid of this mess above ');
		console.log(defaultObject)
		$window.localStorage && $window.localStorage.setItem('whatsForlunch', JSON.stringify(defaultObject));
		return defaultObject;

	}
	return {
		clearData: function() {
			$window.localStorage && $window.localStorage.setItem('whatsForlunch', '');
		},
		setData: function(key, val) {
			// something weird with usingLocation causing something. may not need to have this but w/e
			val = key == 'usingLocation' && val == '' ? false: val;
			// just in case we have a little fallback
			if(val === null) return;
			var storage = $window.localStorage && $window.localStorage.getItem('whatsForlunch');
			var storageObject = storage === null ? {} : JSON.parse(storage);
			if(storageObject[key] != val || !storageObject[key]) {
				storageObject[key] = val;
				$window.localStorage && $window.localStorage.setItem('whatsForlunch', JSON.stringify(storageObject));
			} else {
				// console.log('item was not saved because it was the same');
			}
			// console.log('setting data: key: ' + key + '  val: ' + val)
			// console.log($window.localStorage.getItem('whatsForlunch'))
		},
		getData: function(key) {
			// console.log('getting from key: ' + key)
			var storageObject = getStoredObject();
			// console.log(storageObject)
			// console.log('and the key is: ' + storageObject[key])
			if(!storageObject[key]) return '';
			return storageObject[key];
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
