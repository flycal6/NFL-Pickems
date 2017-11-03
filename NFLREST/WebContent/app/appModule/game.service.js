angular.module('appModule').factory('gameService', function($http, $filter, $location, authService){
	var service = {};
	var uid = authService.getToken().id;
	
	
	service.indexGame = function(wid){
		return $http({
			method: 'GET',
			url: 'rest/weeks/1/game'
		});
	};
	
//Sends array of picks to Pick table	
	service.createPicks = function(picksArr){
		
		return $http({
			method: 'POST',
			url: 'rest/users/' + user.id + '/leagues/' + id
		});
	};
//SERVICE TO ADD NEW ITEM TO LIST	  
  service.createPicks = function(picksArr){
	  
	  return $http({
	  		method: "POST",
			url:  "rest/user/" +uid+ "/picks",
			headers: {
	  			'Content-Type' : 'application/json'
	  		},
	  		data : picksArr
	  	})
	  	.then(function(res){
		

			return res;
		})
	
	};	

	
	return service;
})

