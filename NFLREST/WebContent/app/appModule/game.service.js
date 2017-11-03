angular.module('appModule').factory('gameService', function($http, $filter, $location, authService){
	var service = {};
	var uid = authService.getToken().id;
	
	
	service.indexGame = function(wid){
		return $http({
			method: 'GET',
			url: 'rest/weeks/1/game'
		});
	};
	
//SERVICE TO ADD NEW ITEM TO LIST	  
  service.createPicks = function(pickJsonArr){
	  
	  return $http({
	  		method: "POST",
			url:  "rest/users/" +uid+ "/picks",
			headers: {
	  			'Content-Type' : 'application/json'
	  		},
	  		data : pickJsonArr
	  	})
	
	};	

	
	return service;
})

