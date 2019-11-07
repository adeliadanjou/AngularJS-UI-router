 # FORMS ANGULARJS

1) Crea tu <form></form> con su internos inputs y demás
3) a la etiqueta <form> le añadimos ng-submit="nombredeFunciónAquí(formCool)" y un name="formCool"
2) A cada input le añades un name="formCool.film.email" o lo que sea".... 
Básicamente aquí le añadimos un objeto film al form y dentro de ese objeto las propiedades del input.

4) en el .js creamos esa función del paso 3:
`  $scope.submit = function(formCool){}`

5) si ahí hacemos un console.log del formCool nos vienen todas las cosas del formulario, incluídos valores.