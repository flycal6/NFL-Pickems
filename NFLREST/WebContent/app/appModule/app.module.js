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
		.when('/game-parse', {
			template: '<game-parse></game-parse>'
		})
		.otherwise({
			template: '<not-found></not-found>'
		})
});
