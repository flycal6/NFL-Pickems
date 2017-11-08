angular.module('appModule').component('leagues', {
	templateUrl : 'app/appModule/league/league.component.html',
	controller : function($location, nflService, authService, $filter) {
		var vm = this;
		vm.leagues = [];
		vm.selected = null;
		vm.loading = 0;
		vm.user;
		
		// INDEX
		var reload = function() {
			vm.loading = 1;
			nflService.indexLeagues().then(function(res) {
				vm.user = authService.getToken();
				vm.loading = 0;
				console.log('user')
				 console.log(vm.user.email)
				// console.log(res.data)
				vm.leagues = res.data;
				console.log(vm.leagues)
				console.log(vm.leagues.users)
				vm.userJoined
			});
		}
		reload();

		var showLeague = function(id) {
			vm.loading = 1;
			nflService.showLeague(id).then(function(res) {
				console.log(res);
				vm.loading = 0;
				vm.selected = res.data;
				console.log(vm.selected)
			});
		}

		vm.setSelected = function(id) {
			showLeague(id);

		}
		
	    vm.createLeague = function(uid, league){
	        nflService.createLeague(uid, league)
	        .then(function(res){
	            $scope.$on('createdLeague', console.log("New League added via $rootScope"))
	        })
	        .catch(console.error)
	        
	    }
		
		vm.joinLeague = function(lid){
			console.log('join league id')
			console.log(lid)
			vm.loading = 1;
			nflService.joinLeague(lid).then(function(res){
				vm.loading = 0;
				console.log(res.data);
				$location.path("/leagues");
			});
		}

	},
	controllerAs : 'vm'
});