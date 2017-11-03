angular.module('appModule').component('games', {
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
  
    	
	},
	controllerAs: 'vm'
});