angular.module('app.filters', [])
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
.filter('toMeters', function() {
	return function(input) {
		var meters = 1609.34 * parseInt(input);
    	return parseInt(meters);
  	};
})
.filter('toMiles', function() {
	return function(input) {
		var miles = parseInt(input) / 1609.34;
    	return Math.round(miles * 10) / 10;
  	};
})
.filter('toString', function() {
	return function(input) {
		return input.toString();
  	};
})
.filter('phoneNumber', function() {
	// see s/o accepted answer:  https://stackoverflow.com/questions/12700145/format-telephone-and-credit-card-numbers-in-angularjs
	return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
})
.filter('toIcons', ['$sce', function($sce) {
	return function(total, option) {
		if(!total) return $sce.trustAsHtml('<span class="no-data">No Data</span>');
		var max = option == 'stars' ? 5 : 4;
		var total = option == 'stars' ? total : total.toString().length;
		var html = '';
		switch(option) {
			case 'stars':
				var full = '<i class="fas fa-star"></i>';
				var half = '<i class="fas fa-star-half"></i>';
				var empty = '<i class="far fa-star"></i>';
				break;
			case 'dollars':
				var full = '<i class="fas fa-dollar-sign"></i>';
				var empty = '';
				break;
		}
		for(var i = 1; i <= max; i++) {
			if(i <= total) {
				html += full;
			} else if((i - .5) == total) {
				html += half;
			} else {
				html += empty;
			}
		}
		return $sce.trustAsHtml(html);
	}
}])
.filter('yelpAddress', ['$sce', function($sce) {
	return function(input) {
		if(!input) return $sce.trustAsHtml('<span class="no-data">No Data</span>');
		var address = '';
		for(var i = 0; i < input.length; i++) {
			address += '<p ng-class="toggleView" class="address">' + input[i] + '</p>' ;
		}
		return $sce.trustAsHtml(address);
  	}
}])
