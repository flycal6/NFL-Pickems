angular.module('appModule')
.factory('pickService', function($http, authService){
	var service = {};
	var userPicks = [];
	var userId = authService.getToken().id;
	
	service.getUserPicks = function(){
		return $http({
			method: 'GET',
			url: 'rest/users/' + userId + '/picks'
		});
	};
	
	return service;
})
		