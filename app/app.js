var app = angular.module("videoclubApp", ['ui.router', 'popularesComponent','topRatedComponent', 'peliculaFactory']);

app.controller('appController', function($scope) {

    $scope.title ="Videoclub";
 
});

app.config(
    ["$stateProvider", "$urlRouterProvider",
      function($stateProvider, $urlRouterProvider) {
  
        $stateProvider
        .state("main", {
            url: "/",
            template: "<h1>Hola soy main!</h1>"
          })

          $stateProvider
          .state("populares", {
              url: "/populares",
              templateUrl: "./peliculas/populares/populares.html",
              controller: "popularesController"
            })

            $stateProvider
          .state("topRated", {
              url: "/topRated",
              templateUrl: "./peliculas/topRated/topRated.html",
              controller: "topRatedController"
            })

            $stateProvider
            .state("otherwise", { url : '/'})
            
            $urlRouterProvider.otherwise("/");
        
  
      }
    ]);