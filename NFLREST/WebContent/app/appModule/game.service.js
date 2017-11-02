angular.module('appModule').factory('gameService', function($http, $filter, $location, authService){
	var service = {};
	
	
	service.indexGame = function(wid){
//		var wid = getWeekId();
		return $http({
			method: 'GET',
			url: 'rest/weeks/1/game'
		});
	};
	
//	var getWeekId = function(){
//	      return authService.getToken().id;
//	  }
//	
//	service.getToken = function() {
//		var token = {};
//		token.id = $cookies.get('userId');
//		token.email = $cookies.get('userEmail');
//		return token;
//	}
	
	return service;
})

