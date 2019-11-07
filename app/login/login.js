var login = angular.module("loginComponent", []);


login.controller("loginController", ["$scope", "$http", "peliculaService", function($scope, $http, peliculaService){

    peliculaService.getlogin().then( function(res){
        console.log(res.data.results);
        $scope.login = res.data.results;
    })
    
console.log(peliculaService.getHello())
}]);
