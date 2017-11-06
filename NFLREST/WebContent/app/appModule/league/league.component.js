angular.module('appModule').component('leagues', {
	templateUrl : 'app/appModule/league/league.component.html',
	controller : function($location, nflService) {
		var vm = this;
		vm.leagues = [];
		vm.selected = null;
		vm.loading = 0;

		// INDEX
		var reload = function() {
			vm.loading = 1;
			nflService.indexLeagues().then(function(res) {
				vm.loading = 0;
				// console.log(res)
				// console.log(res.data)
				vm.leagues = res.data;
				console.log(vm.leagues)
				console.log(vm.leagues[1].name)
			});
		}
		reload();

		var showLeague = function(id) {
			vm.loading = 1;
			nflService.showLeague(id).then(function(res) {
				vm.loading = 0;
				vm.selected = res.data;
			});
		}

		vm.setSelected = function(id) {
			showLeague(id);

		}
		
		vm.joinLeague = function(id){
			vm.loading = 1;
			nflService.joinLeague(id).then(function(res){
				vm.loading = 0;
				console.log(res.data);
				$location.path("/leagues");
			});
		}

	},
	controllerAs : 'vm'
});