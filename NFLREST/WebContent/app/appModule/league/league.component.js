angular.module('appModule').component('leagues', {
	templateUrl : 'app/appModule/league/league.component.html',
	controller: function($location, nflService){
		var vm = this;
		vm.leagues = [];
		
	//INDEX   		
    		nflService.index()
    		.then(function(res){
    			vm.leagues = res.data;
    		})  		
    	
    	vm.reload();
	},
	contorllerAs: 'vm'
});