var app = angular.module('PatternLibrary',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

	$routeProvider
		.when('/design/colors', {
			templateUrl: 'pages/colors/colors.html'
		})
		.when('/design/typography', {
			templateUrl: 'pages/typography/typography.html'
		})
		.when('/design/iconography', {
			templateUrl: 'pages/iconography/iconography.html'
		})
		.when('/design/motion', {
			templateUrl: 'pages/motion/motion.html'
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
		.when('/ui/spinner', {
			templateUrl: 'pages/spinner/spinner.html'
		})
		.when('/ui/cards', {
			templateUrl: 'pages/cards/cards.html'
		})
		.when('/ui/features', {
			templateUrl: 'pages/features/features.html'
		})
		.when('/ui/breadcrumb', {
			templateUrl: 'pages/breadcrumb/breadcrumb.html'
		})
		.when('/ui/lists', {
			templateUrl: 'pages/lists/lists.html'
		})
		.when('/ui/forms', {
			templateUrl: 'pages/forms/forms.html'
		})
		.when('/ui/pagination', {
			templateUrl: 'pages/pagination/pagination.html'
		})
		.when('/ui/progress-bars', {
			templateUrl: 'pages/progress-bars/progress-bars.html'
		})
		.otherwise({
			redirectTo: '/colors'
		});

}]);