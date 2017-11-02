angular.module('appModule').component('weeks', {
	templateUrl : 'app/appModule/week/week.component.html',
	controller: function($location, gameService){
		var vm = this;
		vm.games = [];
		vm.selected = null;
		
		vm.displayGame = function(game){
	        console.log("Game clicked")
	        vm.selected = game;  
	    }
		
	//INDEX   		
    	var reload = function(){
    		gameService.indexGame()
    		.then(function(res){
    			console.log(res)
    			console.log(res.data)
    			vm.games = res.data;
//    			console.log(vm.games[0].name)
//    			console.log(vm.games[1].name)
    		})  	
    		.catch(function(err){
    			console.log(err)
    		})
    	}	
    	reload();
    	
    	
    	
    	
	},
	controllerAs: 'vm'
});