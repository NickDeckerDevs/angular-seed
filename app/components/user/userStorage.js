angular.module('user.storage', [])
.factory('storageService', function($window, $rootScope) {
	return {
		setData: function(key, val) {
			if(val === null) return;
			var storage = $window.localStorage && $window.localStorage.getItem('whatsForlunch');
			var storageObject = storage === null ? {} : JSON.parse(storage);
			if(storageObject[key] != val || !storageObject[key]) {
				storageObject[key] = val;
				$window.localStorage && $window.localStorage.setItem('whatsForlunch', JSON.stringify(storageObject));
			} else {
				console.log('item was not saved because it was the same');
			}
			// console.log('set');
			// console.log($window.localStorage && $window.localStorage.getItem('whatsForlunch'));
		},
		getData: function(key) {
			var storage = $window.localStorage && $window.localStorage.getItem('whatsForlunch');
			var storageObject = JSON.parse(storage);
			return storageObject.key;
		},
		getAllData: function() {
			var storage = $window.localStorage && $window.localStorage.getItem('whatsForlunch');
			var storageObject = JSON.parse(storage);
			return storageObject;
		}
	};
});
