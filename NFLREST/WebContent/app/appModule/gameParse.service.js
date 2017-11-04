angular.module('appModule')
	.factory('gameParseService', function($http){
		var service = {};
		var BASE_URL = 'http://www.nfl.com/liveupdate/game-center/';
		var END_URL = '_gtd.json'
			
//		gameId example: '2017102600/2017102600' (start date and game num/ end date and game num)
//		service.index = function(gameId){
//			return $http({
//				method: 'GET',
//				url: BASE_URL + gameId + END_URL
//			});
//		}
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
		
		return service;
	})