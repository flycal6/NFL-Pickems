angular.module('appModule').component('weeks', {
	templateUrl : 'app/appModule/week/week.component.html',
	controller: function($location, gameService, weekService, $rootScope){
		var vm = this;
		vm.games = [];
		vm.weeks = [];
		vm.selectedWeek;
		vm.selected = null;
		
		$rootScope.$on('performUpdate', function(event, args){
			console.log('received from game.component')
			indexWeeks();
			reload();
		});
		
		vm.mapWeeks = function(val){
			console.log('MapWeeks called: ')
			console.log(val)
			$rootScope.$broadcast('weekToDisplay', {
				gameWeek : val.gameWeek,
				weekId: val.id
			});
		}
		
		
		var indexWeeks = function(){
			weekService.indexWeeks()
			.then(function(res){
				vm.weeks = res.data;
//				if(vm.selectedWeek == undefined){
					vm.selectedWeek = vm.weeks[0];
//				}
				
//				console.log(vm.weeks)
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