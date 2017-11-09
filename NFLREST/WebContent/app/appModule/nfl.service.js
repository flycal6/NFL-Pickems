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
	
	service.createLeague = function(uid, league) {
		checkLogin();
		  return $http({
			  method  : "POST",
			  url     : 'rest/leagues/' + uid,
			  headers : {
			        'Content-Type' : 'application/json'
			      },
			  data    : league
		  })
	  };
	
	service.showLeague = function(lid){
		checkLogin();
		var uid = user.id
//		console.log("user id");
//		console.log(uid);
//		console.log("league id");
//		console.log(lid);
		return $http({
			method: 'GET',
			url: 'rest/leagues/' + lid + '/' + uid
		});
	};
	
	service.joinLeague = function(lid){
		checkLogin();
		console.log();
		return $http({
			method: 'POST',
			url: 'rest/users/' + user.id + '/leagues/' + lid
		});
	};
	
	
	return service;
});