angular.module('appModule').component('games', {
    templateUrl : 'app/appModule/game/game.component.html',
    controller: function($location, gameService, weekService, authService, $scope, pickService){
        var vm = this;
        vm.games = [];
        vm.selected = null;
        vm.selectedArr = [];
        var usersId = null;
        var picks = {}; // THIS IS A HASHMAP
        vm.loading = 0;
        vm.previousUserPicks = [];
        
        //INDEX           
        var reload = function(wid){
        	vm.loading = 1;
        	gameService.indexGame(wid)
        	.then(function(res){
//                console.log(res)
//                console.log(res.data)
        		vm.games = res.data;
        		vm.loading = 0;
        	})      
        	.catch(function(err){
        		console.log(err)
        	})
        	
        	pickService.getUserPicks().then(function(res){
//        		console.log('pick response')
//        		console.log(res.data)
//	    			console.log('games')
        		vm.previousUserPicks = res.data;
//        		console.log(vm.previousUserPicks)
        		
        		gamePickStatus();
        	});
        	
        }    
        
        vm.selectGame = function(game, team) {
            if (vm.selectedArr.indexOf(game[team]) < 0){
				var opposingTeam = (team === 'home') ? 'away' : 'home';
				if (vm.selectedArr.indexOf(game[opposingTeam]) >= 0) {
            			vm.selectedArr.splice(vm.selectedArr.indexOf(game[opposingTeam]), 1);
				}
            		vm.selectedArr.push(game[team]);
            }
//            console.log("team clicked")
            // use to compare against pick
//            console.log(game[team])
            
            var pickJson = {};
            pickJson.teamId = game[team].id;
            pickJson.userId = authService.getToken().id;
            pickJson.gameId = game.id;
            picks[pickJson.gameId] = pickJson;
            
        }
        
    	
//    	var wid = 1;
    	$scope.$on('WeekBC', function(event, args){
//    		console.log(args.weekNum.gameWeek);
    		wid = args.weekNum.gameWeek
    		reload(wid);
    		})
    	
   
        vm.convertPicksToJson = function() {
        		var pickJsonArr = [];
//        		console.log(picks)
        		for (var key in picks) {
//        			var stringifyPick = JSON.stringify(picks[key])
        			pickJsonArr.push(picks[key])
        		}
        		var card = {};
        		card.picks = pickJsonArr;
        		
//        		console.log('pickJsonArr')
//        		console.log(pickJsonArr)
        		gameService.createPicks(JSON.stringify(card)).then(function(res){
        			window.alert('Pick submitted successfully!')
//        			console.log('created');
//        			console.log(res.data);
        		});
        }
    	
    	var gamePickStatus = function(){
//    		console.log('calling gamePickStatus()')
//    		console.log(vm.previousUserPicks)
//    		console.log('games')
//    		console.log(vm.games)
    		vm.previousUserPicks.forEach(function(pick, idx){
    			vm.games.forEach(function(game, idx){
    				if(pick.game.id == game.id){
    					if(pick.team.id == game.home.id){
//    						console.log('home pick');
//    						console.log(pick.team.name);
    						vm.selectGame(game, 'home');
    					}
    					else if(pick.team.id == game.away.id){    						
//    						console.log('away pick');
//    						console.log(pick.team.name);
    						vm.selectGame(game, 'away');
    					}
    				}
    			})
    		})
    	};
        reload();
    },
    controllerAs: 'vm'
});