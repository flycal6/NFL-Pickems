angular.module('appModule').factory('nflService', function($http, $filter, $location, authService){
	var service = {};
	var leagues = [];
	var user = {};
	
	var getUser = function(){
		user = authService.getToken();
	}
	var checkLogin = function(){
		if(authService.getToken().id != null){
			$location.path('/home');
		}
		else {
			getUser();
		}
	};
	
	service.indexLeagues = function(){
		return $http({
			method: 'GET',
			url: 'rest/leagues/'
		});
	};
	
	service.showLeague = function(id){
		return $http({
			method: 'GET',
			url: 'rest/leagues/' + id
		});
	};
	
	return service;
});