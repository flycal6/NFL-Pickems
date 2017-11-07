angular.module("chartModule", ["chart.js"]).controller("PieCtrl", function ($scope) {
  $scope.labels = ["Jimmy", "Doug", "Brian", "Chris"];
  $scope.data = [900, 500, 600, 350];
});
       