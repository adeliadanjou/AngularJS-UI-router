# TUTORIAL ANGULARJS RUTAS CON PARAMS:

1) Creamos tanto el html como el js de la ruta hija (movieDetails.html y movieDetails.js)
2) Ponemos su js en un script para index.html   `<script src="./peliculas/populares/movieDetails/movieDetails.js"></script>`

- app.js
3) Creamos la ruta hija:

    ```$stateProvider.state("popularesId", { url: "/populares/:movieId", templateUrl: "./peliculas/populares/movieDetails/movieDetails.html",controller: "movieDetailsController" });```

4) la añadimos a nuestra lista de componentes: `var app = angular.module("videoclubApp", ["ui.router","movieDetailsComponent", <---------])`

- populares.html:

5) Nos vamos al html donde queremos poner los links a las rutas de detalles. En este caso populares.html y ponemos los links:

 `<img ui-sref="popularesId({movieId: movie.id})" src="{{'https://image.tmdb.org/t/p/w200/'+movie.poster_path}}" alt="image">`

YA FUNCIONA LA RUTA, Ahora le pasamos los parametros para buscar por esa id que tenemos en la url:

6) Nos vamos al js del componente de details y usamos un servicio que está en nuestra factory al que le tenemos que pasar el id,
para ello usaremos `$stateParams.movieId` <--- movieId es como llamamos al parámetro en el state de app.js
con esta simple línea ya tenemos el id.

7) a pintar en el html y listo!