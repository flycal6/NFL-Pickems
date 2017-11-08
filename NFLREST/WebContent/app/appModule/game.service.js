angular.module('appModule').factory('gameService', function($http, $filter, $location, authService, $rootScope){
	var service = {};
	
	
	var wid = 1;
	$rootScope.$on('weekToDisplay', function(event, args){
		console.log('Broadcast Args');
//		console.log(args);
//		console.log(args.gameWeek);
//		console.log(args.weekId);
		wid = args.weekId
//		console.log('wid')
//		console.log(wid)
//		reload(wid);
})
	
	service.indexGame = function(wid){
		if(!wid){
			wid = 1;
		}
		return $http({
			method: 'GET',
			url: 'rest/weeks/' + wid + '/game'
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

