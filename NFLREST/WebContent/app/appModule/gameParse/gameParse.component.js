angular.module('appModule').component('gameParse', {
	templateUrl: 'app/appModule/gameParse/gameParse.component.html',
	controller: function(gameParseService){
		var vm = this;
		
		vm.games = [];
		
		gameParseService.index().then(function(res){
			console.log(res.data);
			vm.games = res.data;
			console.log(vm.games);
			
			var weekCollection = [];

			for(game in vm.games){
				var gameObj = {};
				gameObj.away = vm.games[game].away.abbr;
				gameObj.home = vm.games[game].home.abbr;
				gameObj.week = 1;
				
				weekCollection.push(gameObj);
				
			};
			
			vm.createWeek = function(){
				console.log('called vm.createWeek()')
				var weekObj = {};
				weekObj.weeks = weekCollection;
				gameParseService.createWeek(weekObj).then(function(res){
					console.log('response from createWeek()');
					console.log(res);
				});
			};
			
		});
		
		vm.updateWeek = function(){
			for(game in vm.games){
				var gameObj = {};
				gameObj.gameId = 1; // default value for object mapping in Impl
				gameObj.awayAbbr = vm.games[game].away.abbr;
				gameObj.awayScore = vm.games[game].away.score.T;
				gameObj.homeAbbr = vm.games[game].home.abbr;
				gameObj.homeScore = vm.games[game].home.score.T;
				console.log(gameObj);
			}
//			gameParseService.updateWeek().then(function(res){
//				console.log('updateWeek() response');
//				console.log(res);
//			})
		}
		
	},
	controllerAs: 'vm'
});