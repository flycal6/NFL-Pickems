angular.module('appModule').factory('gameService', function($http, $filter, $location, authService){
	var service = {};
	
	
	
	service.indexGame = function(wid){
		return $http({
			method: 'GET',
			url: 'rest/weeks/1/game'
		});
	};
	
//SERVICE TO ADD NEW ITEM TO LIST	  
  service.createPicks = function(card){
	  var uid = authService.getToken().id;
	  
	  return $http({
	  		method: "POST",
			url:  "rest/users/" +uid+ "/picks",
			headers: {
	  			'Content-Type' : 'application/json'
	  		},
	  		data : card
	  	})
	
	};	

	
	return service;
})

