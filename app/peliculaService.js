var peliculaFactory = angular.module("peliculaFactory", []);

peliculaFactory.factory("peliculaService", function($http) {
  var service = {};

  service.getHello = function() {
    return "Holis! Soy una factoría guapa que funciona! ^^"
  };

  service.getTopRated = function(){
    return $http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${__env.APIKEY}&language=es-ES&page=1`)
  }

  service.getById = function(id){
    return $http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${__env.APIKEY}`)
  }


  return service;
});


// https://api.themoviedb.org/3/movie/420809?api_key=63e96a1e85012423c4da2cc53a2dd05f