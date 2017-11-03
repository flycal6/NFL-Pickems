angular.module('appModule').component('gameParse', {
	templateUrl: 'app/appModule/gameParse/gameParse.component.html',
	controller: function(gameParseService){
		var vm = this;
		
		vm.games = {};
		
		gameParseService.index('2017102600/2017102610').then(function(res){
			console.log(res.data);
			vm.games = res.data;
		});
		
		
		
	},
	controllerAs: 'vm'
});