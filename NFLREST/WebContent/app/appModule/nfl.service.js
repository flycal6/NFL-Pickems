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
			$location.path('/login')
			getUser();
		}
	};
	
	service.indexLeagues = function(){
		checkLogin();
		return $http({
			method: 'GET',
			url: 'rest/leagues/'
		});
	};
	
	service.showLeague = function(lid){
		checkLogin();
		var uid = user.id
		return $http({
			method: 'GET',
			url: 'rest/leagues/' + lid + '/' + uid
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