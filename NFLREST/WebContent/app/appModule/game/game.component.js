angular.module('appModule').component('games', {
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
  
        
    },
    controllerAs: 'vm'
});