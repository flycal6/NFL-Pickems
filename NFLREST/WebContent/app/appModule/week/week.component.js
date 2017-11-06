angular.module('appModule').component('weeks', {
	templateUrl : 'app/appModule/week/week.component.html',
	controller: function($location, gameService, weekService, $rootScope){
		var vm = this;
		vm.games = [];
		vm.weeks = [];
		vm.selectedWeek;
		vm.selected = null;
		
		vm.mapWeeks = function(val){
			console.log('MapWeeks called: ')
			console.log(val)
			$rootScope.$broadcast('WeekBC', {
				weekNum : val
			})
		}
		
		
		var indexWeeks = function(){
			weekService.indexWeeks()
			.then(function(res){
				vm.weeks = res.data;
				vm.selectedWeek = vm.weeks[0];
				console.log(vm.weeks)
			})
		}
		indexWeeks();
		
	//INDEX   		
    	reload = function(){
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