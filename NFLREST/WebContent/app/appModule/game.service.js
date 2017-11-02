angular.module('appModule').factory('gameService', function($http, $filter, $location, authService){
	var service = {};
	
	
	service.indexGame = function(wid){
//		var wid = getWeekId();
		return $http({
			method: 'GET',
			url: 'rest/weeks/1/game'
		});
	};
	

	
	return service;
})

