angular.module('appModule').component('stats', {
	templateUrl: 'app/appModule/stats/stats.component.html',
	controller: function(nflService){
		
		//  stats for the time being purely consist of % of picks right 
		var vm = this;
		vm.checkUsersWeekStats = [];
		vm.checkSeasonLeader = "";
		
		
		vm.loadCurrentWeekStandings = function(pick) {
			var weekPercentage = 0; 
			
		}
		
		
    },
    controllerAs: 'vm'
});