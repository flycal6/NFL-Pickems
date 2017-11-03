angular.module('appModule').component('gameParse', {
	templateUrl: 'app/appModule/gameParse/gameParse.component.html',
	controller: function(gameParseService){
		var vm = this;
		
		vm.games = [];
		
		gameParseService.index().then(function(res){
			console.log(res.data);
			vm.games = res.data;
			
			var weekCollection = [];
			
			for(game in vm.games){
				var gameOBJ = {};
				gameOBJ.away = vm.games[game].away.abbr;
				gameOBJ.home = vm.games[game].home.abbr;
				gameOBJ.week = null;
				weekCollection.push(gameOBJ);
				console.log(gameOBJ);
				
			};
		});
		
		
		
	},
	controllerAs: 'vm'
});