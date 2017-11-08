angular.module('appModule').factory('weekService', function($http, $filter, $location, authService, $rootScope){
	var service = {};
	var weeks = [];
	
	
	
	service.indexWeeks = function(){
		return $http({
			method: 'GET',
			url: 'rest/weeks/'
		});
	};
	
	service.showWeek = function(wid){
		return $http({
			method: 'GET',
			url: 'rest/weeks/' + wid
		});
	};
	
	service.calcWeek = function(){
		return $http({
			method: 'GET',
			url: 'rest/leaderboard/league'
		});
	};
	
	return service;
});