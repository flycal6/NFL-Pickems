angular.module('appModule').component('stats', {
	templateUrl: 'app/appModule/stats/stats.component.html',
	controller: function(nflService, weekService, $rootScope){
		
		//  stats for the time being purely consist of % of picks right 
		var vm = this;
		vm.weeklyTotals = [];
		
		vm.getUser
		
		vm.loadCurrentWeekStandings = function(pick) {
			var weekPercentage = 0; 
			
		}
		
		weekService.calcWeek().then(function(res){
			
//			console.log('******************************************************************');
//			console.log(res.data);
			vm.weeklyTotals = res.data;
			
			$rootScope.$broadcast('weeklyTotals', {
				totals: res.data
			});
//			console.log('weekly sent')
		})
		
    },
    controllerAs: 'vm'
});