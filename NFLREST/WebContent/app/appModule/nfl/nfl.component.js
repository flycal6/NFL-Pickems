angular.module('appModule').component('nfl', {
	templateUrl : 'app/appModule/nfl/nfl.component.html',
	controller : function(nflService, authService, $location) {
		var vm = this;
		vm.newLeague = null;
		vm.league = null;
		vm.loading = 0;
		
		var getUser = function(){
			user = authService.getToken();
		}
		
		getUser();
		
		
		var checkLogin = function(){
			if(authService.getToken().id == null){
				$location.path('/login')
				getUser();
			}
		};

		vm.showNewLeagueForm = function() {
			vm.newLeague = 1;
			 checkLogin();
		}
		
		vm.cancelNewLeagueForm = function() {
			vm.newLeague = null;
		}
		
//		 vm.createLeague = function(league) {
//			   nflService.createLeague(league);
//			   console.log('league creation clicked')
//		   }
		 
		 vm.createLeague = function(league){
			 vm.loading = 1;
			 var uid = authService.getToken().id;
		        nflService.createLeague(uid, league)
		        .then(function(res){
		            console.log('Create League Response: ');
		            console.log(res);
		            $location.path('/leagues')
		            vm.loading = 0;
		        })
		        .catch(console.error)
		        
		    }
	},
	controllerAs : 'vm'
});