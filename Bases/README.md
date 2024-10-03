# typescript
Notas del curso de TypeScript de Fernando Herrera

# ¿Que es TypeScript?
TypeScript es JavaScript pero con tipos, en otras palabras sería un super set de JavaScript, permitiendo que podamos definir tipos a variables, funciones, clases, objetos, entre otros para detectar errores de una forma más fácil a cambio de la escritura de más código.

Ahora bien, TypeScript es un lenguaje que se compila a JavaScript, por lo general las librería que usamos ya lo hacen de forma automática, pero en este caso debemos hacerlo de forma manual.
Para que el código se transpile a JavaScript debemos ejecutar el comando en consola `tsc nombre_archivo`, esto automáticamente creará un archivo o varios archivos `.js` que contendrán el código de TypeScript transpilado al JavaScript.

# ¿Que es el archivo tsconfig.json?
El archivo `tsconfig.json` es un archivo que se crea a partir del comando en consola `tsc --init`, este archivo contiene todas las configuraciones del funcionamiento de TypeScript, como el tipo de reglas que se seguirán en el código, entre otras configuraciones.
Al tener este archivo nos permite ejecutar el comando `tsc` el cual transpilará todo el código de los archivos de TypeScript sin la necesidad de escribir el nombre.

# Modo Observador
El modo observador nos permite evitar estar escribiendo el comando en la consola de `tsc` para transpilar el código de TypeScript, ya que, este modo estará observando cada vez que se actualice un archivo de TypeScript y lo transpilará automáticamente. Para activar este modo lo puedes hacer con el siguiente comando `tsc --watch` o `tsc -w`.

# Principios básicos de TypeScript
## Booleans
