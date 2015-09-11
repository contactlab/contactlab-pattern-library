var app = angular.module('PatternLibrary',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

	$routeProvider
		.when('/design/colors', {
			templateUrl: 'pages/colors/colors.html'
		})
		.when('/design/typography', {
			templateUrl: 'pages/typography/typography.html'
		})
		.when('/ui/buttons', {
			templateUrl: 'pages/buttons/buttons.html'
		})
		.when('/ui/labels-badges', {
			templateUrl: 'pages/labels-badges/labels-badges.html'
		})
		.when('/ui/tables', {
			templateUrl: 'pages/tables/tables.html'
		})
		.when('/ui/alerts', {
			templateUrl: 'pages/alerts/alerts.html'
		})
		.when('/ui/panels', {
			templateUrl: 'pages/panels/panels.html'
		})
		.when('/ui/cards', {
			templateUrl: 'pages/cards/cards.html'
		})
		.when('/ui/features', {
			templateUrl: 'pages/features/features.html'
		})
		.otherwise({
			redirectTo: '/colors'
		});

}]);