angular.module('appModule', ['ngRoute', 'authModule'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			template: '<nfl></nfl>'
		})
		.otherwise({
			template: '<not-found></not-found>'
		})
});
