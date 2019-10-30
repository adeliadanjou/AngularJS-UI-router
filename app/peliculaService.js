var peliculaFactory = angular.module("peliculaFactory", []);

peliculaFactory.factory("peliculaService", function($http) {
  var service = {};

  service.getHello = function() {
    return "Holis! Soy una factoría guapa que funciona! ^^"
  };

  service.getTopRated = function(){
    return $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=63e96a1e85012423c4da2cc53a2dd05f&language=es-ES&page=1")
  }

  return service;
});