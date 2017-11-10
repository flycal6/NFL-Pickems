angular.module('appModule').component('leagues', {
	templateUrl : 'app/appModule/league/league.component.html',
	controller : function($location, nflService, authService, $filter, $scope, weekService) {
		var vm = this;
		vm.leagues = [];
		vm.selected = false;
		vm.loading = 0;
		vm.user;
		var weeklyTotals = [];
		vm.weeklyTotals = [];
//		var concatUserData;

		// INDEX
		vm.reload = function() {
			vm.loading = 1;
			nflService.indexLeagues().then(function(res) {
				vm.user = authService.getToken();
//				console.log('user')
//				 console.log(vm.user.email)
				// console.log(res.data)
				vm.leagues = res.data;
//				console.log(vm.leagues)
//				console.log(vm.leagues.users)
//				vm.userJoined
				vm.loading = 0;
			});
		}
		vm.reload();

		var showLeague = function(id) {
			nflService.showLeague(id).then(function(res) {
//				console.log(res);
				vm.selected = res.data;
//				console.log(vm.selected)
				vm.loading = 0;
			});
		}

		vm.setSelected = function(id) {
			vm.loading = 1;
			showLeague(id);

		}

	    vm.createLeague = function(uid, league){
	    	vm.loading = 1;
	        nflService.createLeague(uid, league)
	        .then(function(res){
	            $scope.$on('createdLeague', console.log("New League added via $rootScope"))
	            vm.loading = 0;
	        })
	        .catch(console.error)

	    }

		vm.joinLeague = function(lid){
			vm.loading = 1;
//			console.log('join league id')
//			console.log(lid)
			nflService.joinLeague(lid).then(function(res){
//				console.log(res.data);
				$location.path("/leagues");
				window.alert('You have been successfully added to the league!')
				vm.loading = 0;
				weekService.calcWeek().then(function(res){
					vm.weeklyTotals = res.data;
					vm.reload();
				})
			});
		}

		$scope.$on('weeklyTotals', function(events, args){
			// can't set vm.weeklytotals directly to args.totals
			
			vm.weeklyTotals = args.totals
//			console.log(args);
//			console.log('weeklyTotals recieved');
//			console.log(vm.weeklyTotals);
			concatUserData(vm.leagues, vm.weeklyTotals);
		});

		function concatUserData(leagueArr, weeklyArr){
			for(league in leagueArr){
				for(user in leagueArr[league].users){
					console.log(leagueArr[league].users[user].id);
					console.log(leagueArr[league].users)
					for(userW in weeklyArr){
						if(leagueArr[league].users[user].id == userW){
							console.log('hit')
							weeklyArr[userW].fName = leagueArr[league].users[user].fName;
							weeklyArr[userW].lName = leagueArr[league].users[user].lName;
							weeklyArr[userW].total = weeklyArr[userW][1] + weeklyArr[userW][2] + weeklyArr[userW][3] + weeklyArr[userW][4];
							console.log(weeklyArr[userW][1])
							console.log(weeklyArr[userW][2])
							console.log(weeklyArr[userW][3])
							console.log(weeklyArr[userW][4])
						}
					}
				}
			}
//			console.log(vm.weeklyTotals);
		}
		
	},
	controllerAs : 'vm'
});
