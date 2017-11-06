angular.module('appModule').component('leagues', {
	templateUrl : 'app/appModule/league/league.component.html',
	controller : function($location, nflService, authService) {
		var vm = this;
		vm.leagues = [];
		vm.selected = null;
		vm.loading = 0;
		var user = null;
		
		// INDEX
		var reload = function() {
			vm.loading = 1;
			nflService.indexLeagues().then(function(res) {
				user = authService.getToken();
				vm.loading = 0;
				console.log('user')
				 console.log(user)
				// console.log(res.data)
				vm.leagues = res.data;
				console.log(vm.leagues)
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