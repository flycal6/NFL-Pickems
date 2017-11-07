angular.module('appModule').component('nfl', {
	templateUrl : 'app/appModule/nfl/nfl.component.html',
	controller : function(nflService, authService, $location) {
		var vm = this;
		vm.newLeague = null;
		vm.league = null;
		

		vm.showNewLeagueForm = function() {
			vm.newLeague = 1;
		}
		vm.cancelNewLeagueForm = function() {
			vm.newLeague = null;
		}
		
//		 vm.createLeague = function(league) {
//			   nflService.createLeague(league);
//			   console.log('league creation clicked')
//		   }
		 
		 vm.createLeague = function(league){
			 var uid = authService.getToken().id;
		        nflService.createLeague(uid, league)
		        .then(function(res){
		            console.log('Create League Response: ');
		            console.log(res);
		            $location.path('/leagues')
		        })
		        .catch(console.error)
		        
		    }
	},
	controllerAs : 'vm'
});