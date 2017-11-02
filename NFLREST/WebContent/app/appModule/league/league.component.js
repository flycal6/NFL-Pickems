angular.module('appModule').component('leagues', {
	templateUrl : 'app/appModule/league/league.component.html',
	controller : function($location, nflService) {
		var vm = this;
		vm.leagues = [];
		vm.selected = null;

		// INDEX
		var reload = function() {
			nflService.indexLeagues().then(function(res) {
				// console.log(res)
				// console.log(res.data)
				vm.leagues = res.data;
				console.log(vm.leagues[0].name)
				console.log(vm.leagues[1].name)
			});
		}
		reload();

		var showLeague = function(id) {
			nflService.showLeague(id).then(function(res) {
				vm.selected = res.data;
			});
		}

		vm.setSelected = function(id) {
			showLeague(id);

		}

	},
	controllerAs : 'vm'
});