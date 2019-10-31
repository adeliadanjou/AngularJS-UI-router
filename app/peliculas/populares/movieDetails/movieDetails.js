

var movieDetails = angular.module("movieDetailsComponent", []);


movieDetails.controller("movieDetailsController", ["$scope", "$http", "$stateParams", "peliculaService", function($scope, $http, $stateParams, peliculaService){

// $scope.$on('emitirValor', function(event,data){
//     console.log(data)
// })


peliculaService.getById($stateParams.movieId).then( function(res){
    
   $scope.movie = res.data
    console.log(res.data)
})

}]);
