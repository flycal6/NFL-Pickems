angular.module('appModule').factory('gameService', function($http, $filter, $location, authService, $rootScope){
	var service = {};
	
	
	var wid = 1;
	$rootScope.$on('WeekBC', function(event, args){
		console.log(args.weekNum.gameWeek);
		wid = args.weekNum.gameWeek
	})
	
	service.indexGame = function(val){
	
			
		return $http({
			method: 'GET',
			url: 'rest/weeks/' + wid + '/game'
		});
	};
	service.indexGame(wid);
	
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

