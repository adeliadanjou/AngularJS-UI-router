# VARIABLES DE ENTORNO CON ANGULAR JS:

1) Nos creamos un fichero env.js
2) Nos creamos una función anónima que se autollama con window como alcance. 
`(function (window) {}(this)`
3) Nos creamos un objeto y se lo asignamos a window:

    `window.__env =  {};`

4) Rellenamos el objeto con nuestras variables:

   ` window.__env.APIKEY = 'miApiKeyVaAqui';`
 
5) Creamos un .gitignore y dentro /env.js
6) Ponemos el fichero en index.html -->   ` <script src="../env.js"></script>`
7) Inyectamos nuestra variables donde queramos tal que --> `__env.APIKEY`

## LISTO!