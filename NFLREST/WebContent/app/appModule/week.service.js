angular.module('appModule').factory('weekService', function($http, $filter, $location, authService){
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
	
	return service;
});