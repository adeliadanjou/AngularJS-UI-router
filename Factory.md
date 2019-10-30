
 # CREAR UNA FACTORY / SERVICE:

 1) Creamos carpeta Factories / Services
 2) creamos fichero factory / service .js 
 3) creamos el modulo: 

        `var peliculaFactory = angular.module("peliculaFactory", []); `

 4) en este caso, como no es un componente sino una factory, en vez de .controller ponemos .factory (o .service) 
   
        ` peliculaFactory.factory("peliculaService", function() {  }  `

 5) generamos una variable con un objeto vacío: 
        ` var service = {};  `

 6) llenamos el objeto con métodos:
      `  service.getHello = function() {
          return "Hola!! ^^"
           };`

 7) retornamos el objeto antes de acabar la función de la factoria: 
        `return service; `

 8) app.js --> inyecto el módulo "peliculaFactory" para que esté disponible para todos los componentes de la app

        `var app = angular.module("videoclubApp", ['ngRoute', 'peliculasComponent', 'peliculaFactory']);` 

 9) peliculas.js -->  pongo en su controller el nombre de la factoría: "peliculaService"

        `peliculas.controller("peliculasController", ["$scope", "$http", "peliculaService", function($scope, $http, peliculaService){}`

 10) dentro de la función del controller, uso los métodos de la factory:

        `peliculaService.getHello()` 
 
 11) index.html --> por último, falta añadir la factory al html   
        `<script src="./peliculaService.js"></script>`