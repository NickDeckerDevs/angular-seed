angular.module('venue.controller', [])
.controller('venueController', function($scope, yelpAPIservice, storageService) {
	// view methods
	$scope.viewToggle = 'tile';
	$scope.listActive = false;
	$scope.tileActive = true;
	$scope.changeView = function(option) {
		console.log('changing view: ' + option)
		$scope.viewToggle = option == 'tile' ? 'tile' : 'list';
		$scope.listActive = option == 'tile' ? '' : 'active';
		$scope.tileActive = option == 'tile' ? 'active' : '';
	}
	$scope.venueToggle = false;

	//venue methods
	$scope.dynamicVenueList = {};
	$scope.filters = {};
	$scope.getMyVenues = function() {
		$scope.filters = storageService.getApiData();
		$scope.venueToggle = true;
		yelpAPIservice.getVenues($scope)
			.then(function onSuccess(response) {
				if(response.data.code == 'ENOTFOUND') {
					console.log('no api, using static')
					var staticResults = {
					    "businesses": [
					        {
					            "id": "hurricane-grill-and-wings-cape-coral-2",
					            "name": "Hurricane Grill & Wings",
					            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/pm-PnS1kEQBEhQQ7LKxXZA/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/hurricane-grill-and-wings-cape-coral-2?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 50,
					            "categories": [
					                {
					                    "alias": "tradamerican",
					                    "title": "American (Traditional)"
					                },
					                {
					                    "alias": "chicken_wings",
					                    "title": "Chicken Wings"
					                },
					                {
					                    "alias": "burgers",
					                    "title": "Burgers"
					                }
					            ],
					            "rating": 2.5,
					            "coordinates": {
					                "latitude": 26.6432817337812,
					                "longitude": -81.9933881610631
					            },
					            "transactions": [],
					            "price": "$$",
					            "location": {
					                "address1": "756 SW Pine Island Rd",
					                "address2": "",
					                "address3": "",
					                "city": "Cape Coral",
					                "zip_code": "33991",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "756 SW Pine Island Rd",
					                    "Cape Coral, FL 33991"
					                ]
					            },
					            "phone": "+12398003141",
					            "display_phone": "(239) 800-3141",
					            "distance": 2173.598905034
					        },
					        {
					            "id": "dairy-queen-cape-coral-2",
					            "name": "Dairy Queen",
					            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TnQirQYjgoRZofKd758IRw/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/dairy-queen-cape-coral-2?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 19,
					            "categories": [
					                {
					                    "alias": "hotdogs",
					                    "title": "Fast Food"
					                },
					                {
					                    "alias": "icecream",
					                    "title": "Ice Cream & Frozen Yogurt"
					                }
					            ],
					            "rating": 3,
					            "coordinates": {
					                "latitude": 26.604922,
					                "longitude": -81.990518
					            },
					            "transactions": [],
					            "price": "$",
					            "location": {
					                "address1": "2525 Skyline Blvd",
					                "address2": "",
					                "address3": "",
					                "city": "Cape Coral",
					                "zip_code": "33914",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "2525 Skyline Blvd",
					                    "Cape Coral, FL 33914"
					                ]
					            },
					            "phone": "+12394584410",
					            "display_phone": "(239) 458-4410",
					            "distance": 2642.232275674
					        },
					        {
					            "id": "buffalo-wild-wings-cape-coral",
					            "name": "Buffalo Wild Wings",
					            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/EQZzsEf4k5Ek_leeLR-oRA/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/buffalo-wild-wings-cape-coral?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 26,
					            "categories": [
					                {
					                    "alias": "chicken_wings",
					                    "title": "Chicken Wings"
					                },
					                {
					                    "alias": "sportsbars",
					                    "title": "Sports Bars"
					                },
					                {
					                    "alias": "tradamerican",
					                    "title": "American (Traditional)"
					                }
					            ],
					            "rating": 3,
					            "coordinates": {
					                "latitude": 26.65064,
					                "longitude": -81.9795199
					            },
					            "transactions": [],
					            "price": "$$",
					            "location": {
					                "address1": "307 SW Pine Island Rd",
					                "address2": "",
					                "address3": null,
					                "city": "Cape Coral",
					                "zip_code": "33993",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "307 SW Pine Island Rd",
					                    "Cape Coral, FL 33993"
					                ]
					            },
					            "phone": "+12394248024",
					            "display_phone": "(239) 424-8024",
					            "distance": 3674.8115347179996
					        },
					        {
					            "id": "culvers-cape-coral-3",
					            "name": "Culver's",
					            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/JolZ1AMHibYz0JTH0d1jRw/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/culvers-cape-coral-3?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 19,
					            "categories": [
					                {
					                    "alias": "hotdogs",
					                    "title": "Fast Food"
					                },
					                {
					                    "alias": "burgers",
					                    "title": "Burgers"
					                }
					            ],
					            "rating": 2.5,
					            "coordinates": {
					                "latitude": 26.6503799,
					                "longitude": -81.98016
					            },
					            "transactions": [],
					            "price": "$",
					            "location": {
					                "address1": "309 SW Pine Island Rd",
					                "address2": "",
					                "address3": "",
					                "city": "Cape Coral",
					                "zip_code": "33993",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "309 SW Pine Island Rd",
					                    "Cape Coral, FL 33993"
					                ]
					            },
					            "phone": "+12396739835",
					            "display_phone": "(239) 673-9835",
					            "distance": 3548.869253404
					        },
					        {
					            "id": "outpatient-center-surfside-cape-coral",
					            "name": "Outpatient Center - Surfside",
					            "image_url": "",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/outpatient-center-surfside-cape-coral?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 1,
					            "categories": [
					                {
					                    "alias": "medcenters",
					                    "title": "Medical Centers"
					                }
					            ],
					            "rating": 5,
					            "coordinates": {
					                "latitude": 26.60635,
					                "longitude": -82.02222
					            },
					            "transactions": [],
					            "location": {
					                "address1": "2441 Surfside Blvd",
					                "address2": "",
					                "address3": "Lee Health",
					                "city": "Cape Coral",
					                "zip_code": "33914",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "2441 Surfside Blvd",
					                    "Lee Health",
					                    "Cape Coral, FL 33914"
					                ]
					            },
					            "phone": "+12394814111",
					            "display_phone": "(239) 481-4111",
					            "distance": 2943.7278015479997
					        },
					        {
					            "id": "diamond-billiards-cape-coral-2",
					            "name": "Diamond Billiards",
					            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/YYZI3u5by_dbD2eBQkCGPw/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/diamond-billiards-cape-coral-2?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 15,
					            "categories": [
					                {
					                    "alias": "tradamerican",
					                    "title": "American (Traditional)"
					                },
					                {
					                    "alias": "poolhalls",
					                    "title": "Pool Halls"
					                }
					            ],
					            "rating": 1.5,
					            "coordinates": {
					                "latitude": 26.6390198492897,
					                "longitude": -82.0052468776703
					            },
					            "transactions": [],
					            "price": "$$",
					            "location": {
					                "address1": "1242 SW Pine Island Rd",
					                "address2": "Ste 4",
					                "address3": "",
					                "city": "Cape Coral",
					                "zip_code": "33991",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "1242 SW Pine Island Rd",
					                    "Ste 4",
					                    "Cape Coral, FL 33991"
					                ]
					            },
					            "phone": "+12395737665",
					            "display_phone": "(239) 573-7665",
					            "distance": 1483.11785446
					        },
					        {
					            "id": "7-eleven-cape-coral-2",
					            "name": "7-Eleven",
					            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/nPLUhS9Q7FYbIzvRN1LkOw/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/7-eleven-cape-coral-2?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 1,
					            "categories": [
					                {
					                    "alias": "convenience",
					                    "title": "Convenience Stores"
					                },
					                {
					                    "alias": "servicestations",
					                    "title": "Gas Stations"
					                }
					            ],
					            "rating": 4,
					            "coordinates": {
					                "latitude": 26.6472872946552,
					                "longitude": -81.9873216748238
					            },
					            "transactions": [],
					            "price": "$",
					            "location": {
					                "address1": "601 Pine Island Rd SW",
					                "address2": null,
					                "address3": null,
					                "city": "Cape Coral",
					                "zip_code": "33991",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "601 Pine Island Rd SW",
					                    "Cape Coral, FL 33991"
					                ]
					            },
					            "phone": "+12395742110",
					            "display_phone": "(239) 574-2110",
					            "distance": 2862.147782004
					        },
					        {
					            "id": "around-the-clock-fitness-cape-coral",
					            "name": "Around The Clock Fitness",
					            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/EiW5l-5Flca2rH_0Ze_QXg/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/around-the-clock-fitness-cape-coral?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 10,
					            "categories": [
					                {
					                    "alias": "gyms",
					                    "title": "Gyms"
					                }
					            ],
					            "rating": 2,
					            "coordinates": {
					                "latitude": 26.643112,
					                "longitude": -81.99992
					            },
					            "transactions": [],
					            "location": {
					                "address1": "1140 Ceitus Ter",
					                "address2": "Ste 8",
					                "address3": "",
					                "city": "Cape Coral",
					                "zip_code": "33993",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "1140 Ceitus Ter",
					                    "Ste 8",
					                    "Cape Coral, FL 33993"
					                ]
					            },
					            "phone": "+12392422348",
					            "display_phone": "(239) 242-2348",
					            "distance": 1951.238328442
					        },
					        {
					            "id": "anytime-fitness-cape-coral-2",
					            "name": "Anytime Fitness",
					            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/4zy1IWuXwMq1p4nHri48sg/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/anytime-fitness-cape-coral-2?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 3,
					            "categories": [
					                {
					                    "alias": "gyms",
					                    "title": "Gyms"
					                },
					                {
					                    "alias": "healthtrainers",
					                    "title": "Trainers"
					                }
					            ],
					            "rating": 3,
					            "coordinates": {
					                "latitude": 26.6095116653499,
					                "longitude": -82.0237453195726
					            },
					            "transactions": [],
					            "location": {
					                "address1": "2336 Surfside Blvd",
					                "address2": "Units #101-105",
					                "address3": "Units  101-105",
					                "city": "Cape Coral",
					                "zip_code": "33991",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "2336 Surfside Blvd",
					                    "Units #101-105",
					                    "Units  101-105",
					                    "Cape Coral, FL 33991"
					                ]
					            },
					            "phone": "+12392835900",
					            "display_phone": "(239) 283-5900",
					            "distance": 2731.0079762259998
					        },
					        {
					            "id": "mcdonalds-cape-coral-7",
					            "name": "McDonald's",
					            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_Vk9jjKppit2qITiEpgY2w/o.jpg",
					            "is_closed": false,
					            "url": "https://www.yelp.com/biz/mcdonalds-cape-coral-7?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
					            "review_count": 4,
					            "categories": [
					                {
					                    "alias": "burgers",
					                    "title": "Burgers"
					                },
					                {
					                    "alias": "hotdogs",
					                    "title": "Fast Food"
					                },
					                {
					                    "alias": "coffee",
					                    "title": "Coffee & Tea"
					                }
					            ],
					            "rating": 2.5,
					            "coordinates": {
					                "latitude": 26.6073025895697,
					                "longitude": -81.9748104317205
					            },
					            "transactions": [],
					            "price": "$",
					            "location": {
					                "address1": "2404 Santa Barbara Blvd",
					                "address2": "",
					                "address3": "",
					                "city": "Cape Coral",
					                "zip_code": "33914",
					                "country": "US",
					                "state": "FL",
					                "display_address": [
					                    "2404 Santa Barbara Blvd",
					                    "Cape Coral, FL 33914"
					                ]
					            },
					            "phone": "+12395730800",
					            "display_phone": "(239) 573-0800",
					            "distance": 3492.172366138
					        }
					    ],
					    "total": 24,
					    "region": {
					        "center": {
					            "longitude": -82.0031903,
					            "latitude": 26.6258094
					        }
					    }
					}
					$scope.dynamicVenueList = staticResults.businesses;
				} else {
					console.log('api')
					$scope.dynamicVenueList = response.data.businesses;

					// window.fixCardHeights();
				}


			}).catch(function onError(response) {
				console.log('error!')
				var data = response.data;
				var status = response.status;
			    var statusText = response.statusText;
			    var headers = response.headers;
			    var config = response.config;

		});
	}
});
