angular.module('lunch.controllers', []).
controller('lunchController', function($scope, yelpAPIservice) {
	$scope.locationFilter = 'Bonita%20Springs,%20FL';
	$scope.sortFilter = 'rating';
	$scope.limit = 10;
	$scope.venueList.api = [];
	yelpAPIservice.getVenues().success(function(response) {
		$scope.venueList.api = response;
	});
    $scope.venueList.default = [
		{

              "id": "lapas-costa-rican-bistro-bonita-springs-3",
              "name": "Lapa's Costa Rican Bistro",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/yrrBHIeFX1TAWWJ9Iufn-g/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/lapas-costa-rican-bistro-bonita-springs-3?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 144,
              "categories": [
                  {
                      "alias": "latin",
                      "title": "Latin American"
                  }
              ],
              "rating": 5,
              "coordinates": {
                  "latitude": 26.359754246834,
                  "longitude": -81.8064992263199
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "26251 S Tamiami Trl",
                  "address2": "Ste 9",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34134",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "26251 S Tamiami Trl",
                      "Ste 9",
                      "Bonita Springs, FL 34134"
                  ]
              },
              "phone": "+12392217016",
              "display_phone": "(239) 221-7016",
              "distance": 1017.451463044
          },
          {
              "id": "sweet-melissas-ice-cream-shoppe-bonita-springs",
              "name": "Sweet Melissa's Ice Cream Shoppe",
              "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/GbqzXycUGwykt1pUS5vFZw/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/sweet-melissas-ice-cream-shoppe-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 68,
              "categories": [
                  {
                      "alias": "icecream",
                      "title": "Ice Cream & Frozen Yogurt"
                  }
              ],
              "rating": 4.5,
              "coordinates": {
                  "latitude": 26.33013,
                  "longitude": -81.82574
              },
              "transactions": [],
              "price": "$",
              "location": {
                  "address1": "4445 Bonita Beach Rd",
                  "address2": "Ste 154",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34134",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "4445 Bonita Beach Rd",
                      "Ste 154",
                      "Bonita Springs, FL 34134"
                  ]
              },
              "phone": "+12393304559",
              "display_phone": "(239) 330-4559",
              "distance": 3492.7824669320003
          },
          {
              "id": "skillets-bonita-springs",
              "name": "Skillets",
              "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/-8uMRAUXnzdTQzhpR8h_Ew/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/skillets-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 150,
              "categories": [
                  {
                      "alias": "breakfast_brunch",
                      "title": "Breakfast & Brunch"
                  },
                  {
                      "alias": "coffee",
                      "title": "Coffee & Tea"
                  }
              ],
              "rating": 4.5,
              "coordinates": {
                  "latitude": 26.3316221029414,
                  "longitude": -81.7989702522755
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "9174 Bonita Beach Rd",
                  "address2": "",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34135",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "9174 Bonita Beach Rd",
                      "Bonita Springs, FL 34135"
                  ]
              },
              "phone": "+12399929333",
              "display_phone": "(239) 992-9333",
              "distance": 2293.05924763
          },
          {
              "id": "j-anthony-salon-and-spa-bonita-springs",
              "name": "J Anthony Salon & Spa",
              "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7ycKjiWMpG8NMMenBOTcNw/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/j-anthony-salon-and-spa-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 27,
              "categories": [
                  {
                      "alias": "hair",
                      "title": "Hair Salons"
                  },
                  {
                      "alias": "skincare",
                      "title": "Skin Care"
                  },
                  {
                      "alias": "spas",
                      "title": "Day Spas"
                  }
              ],
              "rating": 5,
              "coordinates": {
                  "latitude": 26.36351,
                  "longitude": -81.80638
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "25987 S Tamiami Trl",
                  "address2": "Ste 107F",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34134",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "25987 S Tamiami Trl",
                      "Ste 107F",
                      "Bonita Springs, FL 34134"
                  ]
              },
              "phone": "+12399493966",
              "display_phone": "(239) 949-3966",
              "distance": 1303.840114338
          },
          {
              "id": "the-other-side-bistro-bonita-springs",
              "name": "The Other Side Bistro",
              "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/dA2Ow8VA8bUtfGH-o9Qnhg/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/the-other-side-bistro-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 94,
              "categories": [
                  {
                      "alias": "tradamerican",
                      "title": "American (Traditional)"
                  }
              ],
              "rating": 4.5,
              "coordinates": {
                  "latitude": 26.3813891261816,
                  "longitude": -81.8080971390009
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "24630 S Tamiami Trl",
                  "address2": "Ste B",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34134",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "24630 S Tamiami Trl",
                      "Ste B",
                      "Bonita Springs, FL 34134"
                  ]
              },
              "phone": "+12399927433",
              "display_phone": "(239) 992-7433",
              "distance": 3329.03002979
          },
          {
              "id": "tipsy-cow-bonita-springs-2",
              "name": "Tipsy Cow",
              "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/JUkDay2gQrmPJ7beu_OaXg/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/tipsy-cow-bonita-springs-2?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 29,
              "categories": [
                  {
                      "alias": "icecream",
                      "title": "Ice Cream & Frozen Yogurt"
                  }
              ],
              "rating": 5,
              "coordinates": {
                  "latitude": 26.371421,
                  "longitude": -81.8066463
              },
              "transactions": [],
              "price": "$",
              "location": {
                  "address1": "25261 Chamber Of Commerce Dr",
                  "address2": null,
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34135",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "25261 Chamber Of Commerce Dr",
                      "Bonita Springs, FL 34135"
                  ]
              },
              "phone": "+12399497172",
              "display_phone": "(239) 949-7172",
              "distance": 2207.931116188
          },
          {
              "id": "ceviche41-bonita-springs",
              "name": "#Ceviche41",
              "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/JaOiaPDPVB4z050yQm5qTw/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/ceviche41-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 29,
              "categories": [
                  {
                      "alias": "desserts",
                      "title": "Desserts"
                  },
                  {
                      "alias": "seafood",
                      "title": "Seafood"
                  },
                  {
                      "alias": "peruvian",
                      "title": "Peruvian"
                  }
              ],
              "rating": 5,
              "coordinates": {
                  "latitude": 26.35397,
                  "longitude": -81.78107
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "26455 Old 41 Rd",
                  "address2": "Ste 19",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34135",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "26455 Old 41 Rd",
                      "Ste 19",
                      "Bonita Springs, FL 34135"
                  ]
              },
              "phone": "+12393014634",
              "display_phone": "(239) 301-4634",
              "distance": 1955.5368755819998
          },
          {
              "id": "couture-nails-and-spa-bonita-springs",
              "name": "Couture Nails & Spa",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/aXY4Rh2iQ8iQQ7cLAhwMMw/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/couture-nails-and-spa-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 24,
              "categories": [
                  {
                      "alias": "othersalons",
                      "title": "Nail Salons"
                  },
                  {
                      "alias": "eyelashservice",
                      "title": "Eyelash Service"
                  },
                  {
                      "alias": "waxing",
                      "title": "Waxing"
                  }
              ],
              "rating": 5,
              "coordinates": {
                  "latitude": 26.31717,
                  "longitude": -81.80438
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "28811 South Tamiami Trl",
                  "address2": null,
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34134",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "28811 South Tamiami Trl",
                      "Bonita Springs, FL 34134"
                  ]
              },
              "phone": "+12399485434",
              "display_phone": "(239) 948-5434",
              "distance": 3895.429839826
          },
          {
              "id": "1-new-york-nails-and-spa-bonita-springs",
              "name": "#1 New York Nails & Spa",
              "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Nj_I2PZ6rDJw6iBiZjlmyw/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/1-new-york-nails-and-spa-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 41,
              "categories": [
                  {
                      "alias": "othersalons",
                      "title": "Nail Salons"
                  },
                  {
                      "alias": "spas",
                      "title": "Day Spas"
                  }
              ],
              "rating": 4.5,
              "coordinates": {
                  "latitude": 26.3633066047023,
                  "longitude": -81.8070313150394
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "25987 S Tamiami Trl",
                  "address2": "",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34134",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "25987 S Tamiami Trl",
                      "Bonita Springs, FL 34134"
                  ]
              },
              "phone": "+12396768605",
              "display_phone": "(239) 676-8605",
              "distance": 1385.6091347715999
          },
          {
              "id": "dougs-seafood-bonita-springs",
              "name": "Doug's Seafood",
              "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Gc2h1V-xKflyXh-r-QQA9Q/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/dougs-seafood-bonita-springs?adjust_creative=XTFwAbf0wLDnvvkqjxxBiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=XTFwAbf0wLDnvvkqjxxBiw",
              "review_count": 129,
              "categories": [
                  {
                      "alias": "seafood",
                      "title": "Seafood"
                  },
                  {
                      "alias": "seafoodmarkets",
                      "title": "Seafood Markets"
                  },
                  {
                      "alias": "wraps",
                      "title": "Wraps"
                  }
              ],
              "rating": 4.5,
              "coordinates": {
                  "latitude": 26.3290579391779,
                  "longitude": -81.8092183276692
              },
              "transactions": [],
              "price": "$$",
              "location": {
                  "address1": "3411 Bonita Beach Rd",
                  "address2": "Ste 307",
                  "address3": "",
                  "city": "Bonita Springs",
                  "zip_code": "34134",
                  "country": "US",
                  "state": "FL",
                  "display_address": [
                      "3411 Bonita Beach Rd",
                      "Ste 307",
                      "Bonita Springs, FL 34134"
                  ]
              },
              "phone": "+12399921902",
              "display_phone": "(239) 992-1902",
              "distance": 2705.6100160819997
          }
      ];

});
