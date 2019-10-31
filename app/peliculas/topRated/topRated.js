var topRated = angular.module("topRatedComponent", []);


topRated.controller("topRatedController", ["$scope", "$http", "peliculaService", function($scope, $http, peliculaService){

    peliculaService.getTopRated().then( function(res){
        console.log(res.data.results);
        $scope.topRated = res.data.results;
    })
    
console.log(peliculaService.getHello())
}]);
