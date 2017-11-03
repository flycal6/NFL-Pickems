angular.module('appModule').component('games', {
	templateUrl : 'app/appModule/game/game.component.html',
	controller: function($location, gameService, weekService){
		var vm = this;
		vm.games = [];
		vm.selected = null;
		
		vm.selectGameHome = function(game){
	        console.log(game.home.name + ": Game clicked")
	        vm.selected = game;  
	    }
		
		vm.selectGameAway = function(game){
	        console.log(game.away.name + ": Game clicked")
	        vm.selected = game;  
	    }
		
	//INDEX   		
    	var reload = function(){
    		gameService.indexGame()
    		.then(function(res){
    			console.log(res)
    			console.log(res.data)
    			vm.games = res.data;
    		})  	
    		.catch(function(err){
    			console.log(err)
    		})
    	}	
    	reload();
  
    	
	},
	controllerAs: 'vm'
});