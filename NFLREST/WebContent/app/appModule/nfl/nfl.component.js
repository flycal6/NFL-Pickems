angular.module('appModule').component('nfl', {
	templateUrl : 'app/appModule/nfl/nfl.component.html',
	controller : function(nflService) {
		var vm = this;
		vm.newLeague = null;

		vm.showNewLeagueForm = function() {
			vm.newLeague = 1;
		}
		vm.cancelNewLeagueForm = function() {
			vm.newLeague = null;
		}
	},
	controllerAs : 'vm'
});