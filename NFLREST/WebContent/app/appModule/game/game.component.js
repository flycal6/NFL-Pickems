angular.module('appModule').component('games', {
	templateUrl : 'app/appModule/game/game.component.html',
	controller: function($location, gameService, weekService){
		var vm = this;
		vm.games = [];
		vm.selected = null;
		vm.selectedArr = [];
		
		vm.selectGameHome = function(game){
	        console.log(game.home.name + ": Game clicked")
	        vm.selected = game.home;   
	        vm.selectedArr.push(game.home);
//	        console.log(vm.selected)
//	        console.log(game.home)
	        console.log(vm.selectedArr);
	   
	    }
		
		vm.selectGameAway = function(game){
	        console.log(game.away.name + ": Game clicked")
	        vm.selected = game.away;  
	        vm.selectedArr.push(game.away);
	        console.log(vm.selectedArr);
	    }
	
		
	//INDEX   		
    	var reload = function(){
    		gameService.indexGame()
    		.then(function(res){
//    			console.log(res)
//    			console.log(res.data)
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