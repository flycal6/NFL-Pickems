angular.module('appModule', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			template: '<nfl></nfl>'
		})
		.otherwise({
			template: '<not-found></not-found>'
		})
});
