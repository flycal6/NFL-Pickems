angular.module('appModule').component('nfl', {
	templateUrl: 'app/appModule/nfl/nfl.component.html',
	controller: function(nflService){
		var vm = this;
	},
	controllerAs: 'vm'
});