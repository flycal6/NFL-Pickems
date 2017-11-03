angular.module('appModule').component('games', {
<<<<<<< HEAD
    templateUrl : 'app/appModule/game/game.component.html',
    controller: function($location, gameService, weekService, authService){
        var vm = this;
        vm.games = [];
        vm.selected = null;
        vm.selectedArr = [];
        var usersId = null;
        var picks = {}; // THIS IS A HASHMAP
        
		console.log(usersId);

        
        vm.selectGame = function(game, team) {
            if (vm.selectedArr.indexOf(game[team]) < 0){
				var opposingTeam = (team === 'home') ? 'away' : 'home';
				if (vm.selectedArr.indexOf(game[opposingTeam]) >= 0) {
            			vm.selectedArr.splice(vm.selectedArr.indexOf(game[opposingTeam]), 1);
				}
            		vm.selectedArr.push(game[team]);
            }
            //console.log(vm.selectedArr)
            
            var pickJson = {};
            pickJson.teamId = game[team].id;
            pickJson.userId = authService.getToken().id;
            pickJson.gameId = game.id;
            picks[pickJson.gameId] = pickJson;
            
        }
        
        vm.convertPicksToJson = function() {
        		var pickJson = [];
        		for (var key in picks) {
        			pickJson.push(picks[key])
        		}
        		
        		console.log('pickJson')
        		console.log(pickJson)
        		return pickJson;
        }
        
    //INDEX           
        var reload = function(){
            gameService.indexGame()
            .then(function(res){
//                console.log(res)
//                console.log(res.data)
                vm.games = res.data;
            })      
            .catch(function(err){
                console.log(err)
            })
        }    
        reload();
=======
	templateUrl : 'app/appModule/game/game.component.html',
	controller: function($location, gameService, weekService){
		var vm = this;
		vm.games = [];
		vm.selected = null;
		vm.selectedArr = [];
		
		vm.selectGameHome = function(game){
	        console.log(game.home.name + ": Game clicked")
	        if(vm.selectedArr.indexOf(game.home) <= 0){
	        	vm.selected = game.home;   
		        vm.selectedArr.push(game.home);
//		        console.log(vm.selected)
//		        console.log(game.home)
		        console.log(vm.selectedArr);
		        		if(vm.selectedArr.indexOf(game.away) >= 0){
		        			console.log('in 2nd if')
		        			vm.selectedArr.splice(vm.selectedArr.indexOf(game.away),1)
	        			}
		        		else{
		        			console.log('valid pick')
		        		}
	        }
	        else{
	        	console.log('ALREADY PICKED')
	        }
	    }
		
		vm.selectGameAway = function(game){
	        console.log(game.away.name + ": Game clicked")
	        if(vm.selectedArr.indexOf(game.away) < 0){
	        	vm.selected = game.away;   
		        vm.selectedArr.push(game.away);
//		        console.log(vm.selected)
//		        console.log(game.home)
		        console.log(vm.selectedArr);
			        if(vm.selectedArr.indexOf(game.home) >= 0){
	        			console.log('in 2nd if')
	        			vm.selectedArr.splice(vm.selectedArr.indexOf(game.home),1)
	    			}
	        		else{
	        			console.log('valid pick')
	        		}
	        }
	        else{
	        	console.log('ALREADY PICKED');
	        }
		}
		
	//INDEX   		
    	var reload = function(){
    		gameService.indexGame()
    		.then(function(res){
//    			console.log(res)
//    			console.log(res.data)
    			vm.games = res.data;
    		})  	
    		.catch(function(err){
    			console.log(err)
    		})
    	}	
    	reload();
>>>>>>> cb928f354d6a5b68f0f23edc8f723b301ab92af2
  
        
    },
    controllerAs: 'vm'
});