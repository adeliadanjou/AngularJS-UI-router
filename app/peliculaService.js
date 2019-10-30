var peliculaFactory = angular.module("peliculaFactory", []);

peliculaFactory.factory("peliculaService", function($http) {
  var service = {};

  service.getHello = function() {
    return "Holis! Soy una factoría guapa que funciona! ^^"
  };

  service.getTopRated = function(){
    return $http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${__env.APIKEY}&language=es-ES&page=1`)
  }

  return service;
});