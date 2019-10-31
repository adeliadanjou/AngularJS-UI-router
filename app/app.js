var app = angular.module("videoclubApp", [
  "ui.router",
  "popularesComponent",
  "topRatedComponent",
  "movieDetailsComponent",
  "peliculaFactory"
]);

app.controller("appController", function($scope) {


    $scope.$broadcast('emitirValor', 3);

  $scope.title = "Videoclub";
});

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("main", {
      url: "/",
      template:
        "<div  class='main'><h1 >Hola soy Main! ^^ </h1> <h1>Encantado de conocerte!</h1> <img class='little-main' src='./images/MAIN.jpg'></div>"
    });

    $stateProvider.state("populares", {
      url: "/populares",
      templateUrl: "./peliculas/populares/populares.html",
      controller: "popularesController"
    });

    $stateProvider.state("movieDetails", {
      url: "/populares/:movieId",
      templateUrl: "./peliculas/populares/movieDetails/movieDetails.html",
      controller: "movieDetailsController"
    });

    $stateProvider.state("topRated", {
      url: "/topRated",
      templateUrl: "./peliculas/topRated/topRated.html",
      controller: "topRatedController"
    }),
      $stateProvider.state("otherwise", { url: "/" });

    $urlRouterProvider.otherwise("/");
  }
]);
