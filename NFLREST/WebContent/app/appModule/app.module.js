angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			template: '<nfl></nfl>'
		})
		.when('/leagues', {
			template: '<leagues></leagues>'
		})
		.when('/home', {
			template: '<home></home>'
		})
		.when('/weeks', {
			template: '<weeks></weeks>'
		})
		.otherwise({
			template: '<not-found></not-found>'
		})
});
