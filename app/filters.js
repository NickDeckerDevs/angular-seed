angular.module('lunch.filters', [])
.filter('replace', function () {
	return function(input, from, to) {
	    input = input || '';
	    from = from || '';
	    to = to || '';
    	return input.replace(new RegExp(from, 'g'), to);
  	};
})
.filter('prettyText', function() {
	return function(input) {
    	var text = input.replace(new RegExp('_', 'g'), ' ').toLowerCase().split(' ');
		for (var i = 0; i < text.length; i++) {
	    	text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
	  	}
		return text.join(' ');
  	};
})
// .filter('orDefault', function() {
// 	return function(input, default) {
// 		var text = input.length > 0 ? input : default;
// 		return text;
// 	};
// });