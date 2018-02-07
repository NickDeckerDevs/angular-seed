// angular.module('lunch', ['ngRoute'])
// 	.config(['$routeProvider', function($routeProvider) {
// 		$routeProvider
// 			.when('/yelpAPI', {
// 				templateUrl: '/index.html',
// 				controller: 'lunchController'
// 			});
// 	}]);

module.exports = function(app) {

	// app.get('*'), function(req, res) {
	// 	console.log(req)
	// 	res.sendFile('./app/'+req)
	// }
	// app.get('/app', function(req, res) {
	// 	console.log(req);
	// 	res.sendFile(__dirname + req);
	// })
	// app.get('*', function(req, res) {
	// 	res.sendFile(__dirname + '/index.html')
	// })
	app.get('*', function(req, res) {
		res.sendFile('./index.html')
	})

}
