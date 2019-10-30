var peliculas = angular.module("peliculasComponent", []);

peliculas.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "peliculas/peliculas.html",
        controller: "peliculasController"
    });
});

peliculas.controller("peliculasController", ["$scope", "$http", "peliculaService", function($scope, $http, peliculaService){
 
    $http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${__env.APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then( function(res){
        console.log(res.data.results);
        $scope.movies = res.data.results
    })


    peliculaService.getTopRated().then( function(res){
        console.log(res.data.results);
        $scope.topRated = res.data.results;
    })
    

console.log(peliculaService.getHello())
}]);
