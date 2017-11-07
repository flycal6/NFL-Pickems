angular.module('appModule')
	.factory('gameParseService', function($http){
		var service = {};
		var BASE_URL = 'http://www.nfl.com/liveupdate/game-center/';
		var END_URL = '_gtd.json'

		service.index = function(){
			return $http({
				method: 'GET',
				url: 'http://www.nfl.com/liveupdate/scores/scores.json'
			});
		}
		
		service.createWeek = function(week){
			console.log(week);
			return $http({
				method: 'POST',
				url: 'rest/weeks',
				headers: {
					'Content-Type': 'application/json'
				},
				data : week
			});
		}
		
		service.createGame = function(game){
			return $http({
				method: 'POST',
				url: 'rest/games',
				headers: {
					'Content-type': 'application/json'
				},
				data: game
			});
		}
		
		service.updateWeek = function(weekGamesArr){
			return $http({
				method: 'PUT',
				url: 'rest/weeks',
				headers: {
					'Content-type': 'application/json'
				},
				data: weekGamesArr
			});
		}
		
		return service;
	})