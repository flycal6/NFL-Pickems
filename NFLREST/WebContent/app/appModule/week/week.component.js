angular.module('appModule').component('weeks', {
	templateUrl : 'app/appModule/week/week.component.html',
	controller: function($location, gameService, weekService){
		var vm = this;
		vm.games = [];
		vm.weeks = [];
		vm.selected = null;
		
		var indexWeeks = function(){
			weekService.indexWeeks()
			.then(function(res){
				vm.weeks = res.data;
				console.log(vm.weeks)
			})
		}
		indexWeeks();
		
	//INDEX   		
    	var reload = function(){
    		gameService.indexGame()
    		.then(function(res){
//    			console.log(res)
//    			console.log(res.data)
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