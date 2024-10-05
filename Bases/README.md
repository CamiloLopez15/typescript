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

## Castear tipos
En TypeScript castear tipos se usa para tratar un valor como un tipo determinado pero sin llegar a cambiarle el tipo a dicho valor, por ejemplo, imaginemos que tenemos una variable de tipo `any` y en determinado momento de la aplicación esa variable se desea tratar como un string, entonces podemos castear ese tipo en ese momento para que TypeScript lo tome como si fuese un string, existe dos formas de hacer eso.
- La primera: `(variable as string).charAt(10)`
- La Segunda: `<string>variable.charAt(10)`

## Tupla
Una tupla en TypeScript es un array al cual tu le defines el tipo de dato de cada posición del array, por ejemplo, si deseas que el primer valor sea un string y el segundo valor un number lo puedes asignar usando una tupla. La forma en como se hace eso es la siguiente `const hero: [string, number] = ["Spider-man", 100]`

## Enums
Los enum sirven para enumerar valores, la forma más sencilla de entender es imaginar que tienes un objeto el cual tiene la propiedad `age` esta propiedad y resulta y pasa que para que funcione el programa a su totalidad necesitamos de esa propiedad. Entonces imagina que un día por X motivos esa propiedad pasa de llamarse `age` a `years`, ahora te tocaría cambiar en todos los lugares del código. La solución a esto es utilizar un `enum` el cual me permitiría enumerar las propiedades del objetos y definirle como valor el nombre de la propiedad del objeto principal, entonces cuando accedamos a la propiedad simplemente llamamos al `enum` y ya, en el caso que la propiedad cambie en el objeto principal simplemente la cambias en el `enum` y automáticamente se aplicará a todo el código.

## Void
El tipo Void se utiliza cuando una función no tiene un return explicito, sino que implícito. O sea, no hay un return dentro de la función.