var populares = angular.module("popularesComponent", []);


populares.controller("popularesController", ["$scope", "$http", function($scope, $http){
 
    $http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${__env.APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then( function(res){
        console.log(res.data.results);
        $scope.movies = res.data.results
    })


    // $scope.$on('emitirValor', function(event,data){
    //     console.log(data)
    // })
    
    // $scope.$broadcast('emitirValor', 3);

}]);
