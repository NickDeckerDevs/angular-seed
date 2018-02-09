angular.module('app.directives', [])
.directive('venueScriptingDirective', function($timeout, $window) {
	return function(scope, element, attrs) {
		var wwidth = $window.innerWidth;
		if(scope.$last && wwidth > 768) {
			$timeout(function(){
	            $('.details').matchHeight();
	        }, 2500);

		}
	}
});
