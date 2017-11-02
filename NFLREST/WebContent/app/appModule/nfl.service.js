angular.module('appModule').factory('nflService', function($http, $filter, $location, authService){
	var service = {};
	var leagues = [];
	var user = {};
	
	var getUser = function(){
		user = authService.getToken();
	}
	
	getUser();
	
	var checkLogin = function(){
		if(authService.getToken().id == null){
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
	
	service.joinLeague = function(id){
		checkLogin();
		console.log();
		return $http({
			method: 'POST',
			url: 'rest/users/' + user.id + '/leagues/' + id
		});
	};
	
	
	return service;
});