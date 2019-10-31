
# RUTAS CON UI-ROUTER:


- index.html: 
1) Ponemos el siguiente script, que es instalar lo de las rutas -->      
`<script src="//unpkg.com/@uirouter/angularjs@1.0.7/release/angular-ui-router.min.js"></script>`

2) Activarlas:
## Para enlaces: Usaremos ui-sref="name_del_state"
`  <a ui-sref="about" ui-sref-active="active">About</a>`

## Para rutas:
 `  <ui-view></ui-view> `

- app.js: 

1) Ponemos 'ui.router' en nuestro var app = angular.module("videoclubApp", [***AQUÍ***]) para activar las rutas 

  ` var app = angular.module("videoclubApp", ['ui.router']); ` 

2) Agregamos $stateProvider(para crear rutas/states) y "urlRouterProvider(para redirección) al app.config:

  `app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) { } ]);`

3) Dentro de la función del app.config hacemos un var states, que es un array, con las rutas:
 
  `var states = [
    { name: 'hello', url: '/hello', templateUrl: 'hello', controller: 'helloController' },
    { name: 'about', url: '/about', templateUrl: 'about', controller: 'aboutController' },
    { name: 'people',url: '/people',templateUrl: 'people', controller:'peopleController'}]`


4) Registramos los states con un loop:
   `states.forEach(function(state) { $stateProvider.state(state); });`


### OTRA MANERA DE HACER PASOS 3 Y 4 MENOS PRO:

 ```$stateProvider
        .state("main", {
            url: "/",
            template: "<h1>Hola soy main!</h1>"
          })

          $stateProvider
          .state("peliculas", {
              url: "/pelis",
              templateUrl: "./peliculas/peliculas.html",
              controller: "peliculasController"
            })

            $stateProvider
            .state("otherwise", { url : '/pelis'})
            
            $urlRouterProvider.otherwise("/pelis");```


 

