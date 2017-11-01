angular.module('appModule').component('navigation', {
	templateUrl: 'app/appModule/navigation/navigation.component.html',
	controller: function($location, authService){
		var vm = this;
		vm.loggedIn = null;
		vm.checkLogIn = function(){
			if(authService.getToken().id == null){
				return false;
			}
			else {
				return true;
			}
		};
		
		vm.register = function(){
			$location.path('/register');
		};
		
		vm.login = function(){
			$location.path('/login');
		};
	},
	controllerAs: 'vm'
});