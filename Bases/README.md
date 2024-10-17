# typescript

Notas del curso de TypeScript de Fernando Herrera

# ¿Que es TypeScript?

TypeScript es JavaScript pero con tipos, en otras palabras sería un super set de JavaScript, permitiendo que podamos definir tipos a variables, funciones, clases, objetos, entre otros para detectar errores de una forma más fácil a cambio de la escritura de más código.

Ahora bien, TypeScript es un lenguaje que se compila a JavaScript, por lo general las librería que usamos ya lo hacen de forma automática, pero en este caso debemos hacerlo de forma manual.
Para que el código se transpile a JavaScript debemos ejecutar el comando en consola `tsc nombre_archivo`, esto automáticamente creará un archivo o varios archivos `.js` que contendrán el código de TypeScript transpilado al JavaScript.

# ¿Que es el archivo tsconfig.json?

El archivo `tsconfig.json` es un archivo que se crea a partir del comando en consola `tsc --init`, este archivo contiene todas las configuraciones del funcionamiento de TypeScript, como el tipo de reglas que se seguirán en el código, entre otras configuraciones.
Al tener este archivo nos permite ejecutar el comando `tsc` el cual transpilará todo el código de los archivos de TypeScript sin la necesidad de escribir el nombre.

## Algunas Configuraciones del archivo `tsconfig.json`

Por acá dejo algunas configuraciones interesantes que podemos añadir al archivos de `tsconfig.json`.

### SourceMap

El sourceMap lo podemos definir con `booleans`, esto sirve para que se genere un archivo map de JavaScript del archivo de TypeScript. Lo cual produce que cuando depuremos, ejecutemos código y se muestre en consola nos diga específicamente el lugar del código donde ocurrió eso, etc. Mayoritariamente esto nos sirve para depurar, por ende, cuando el código vaya a producción no es necesario dicha propiedad, pero si deseas déjala.

### removeComments

Al momento de transpilar el código elimina los comentarios que dejemos en los archivos de `.ts`.

### Exclude

Es una array de cadenas, en las cuales vamos a añadir las rutas, archivo o similares de typeScript que queramos omitir al momento de transpilar.

### Include

Es una array de cadenas, en las cuales vamos a añadir las rutas, archivo o similares de typeScript que queramos transpilar.

### OutFile

Nos sirve para englobar todo el código de una aplicación en un solo archivo, cabe recalcar que para ello necesitamos especificar que `"module": "AMD"` para que pueda transpilar correctamente.

# Modo Observador

El modo observador nos permite evitar estar escribiendo el comando en la consola de `tsc` para transpilar el código de TypeScript, ya que, este modo estará observando cada vez que se actualice un archivo de TypeScript y lo transpilará automáticamente. Para activar este modo lo puedes hacer con el siguiente comando `tsc --watch` o `tsc -w`.

# Principios básicos de TypeScript

## Castear tipos

En TypeScript castear tipos se usa para tratar un valor como un tipo determinado pero sin llegar a cambiarle el tipo a dicho valor, por ejemplo, imaginemos que tenemos una variable de tipo `any` y en determinado momento de la aplicación esa variable se desea tratar como un string, entonces podemos castear ese tipo en ese momento para que TypeScript lo tome como si fuese un string, existe dos formas de hacer eso.

-   La primera: `(variable as string).charAt(10)`
-   La Segunda: `<string>variable.charAt(10)`

## Tupla

Una tupla en TypeScript es un array al cual tu le defines el tipo de dato de cada posición del array, por ejemplo, si deseas que el primer valor sea un string y el segundo valor un number lo puedes asignar usando una tupla. La forma en como se hace eso es la siguiente `const hero: [string, number] = ["Spider-man", 100]`

## Enums

Los enum sirven para enumerar valores, la forma más sencilla de entender es imaginar que tienes un objeto el cual tiene la propiedad `age` esta propiedad y resulta y pasa que para que funcione el programa a su totalidad necesitamos de esa propiedad. Entonces imagina que un día por X motivos esa propiedad pasa de llamarse `age` a `years`, ahora te tocaría cambiar en todos los lugares del código. La solución a esto es utilizar un `enum` el cual me permitiría enumerar las propiedades del objetos y definirle como valor el nombre de la propiedad del objeto principal, entonces cuando accedamos a la propiedad simplemente llamamos al `enum` y ya, en el caso que la propiedad cambie en el objeto principal simplemente la cambias en el `enum` y automáticamente se aplicará a todo el código.

## Void

El tipo Void se utiliza cuando una función no tiene un return explicito, sino que implícito. O sea, no hay un return dentro de la función.

## Never

Es cuando una función no finaliza, o sea, no llega a ningún return implícito o explicito. Como por ejemplo, cuando arroja un error.

## Clases

Al momento de crear clases en TypeScript este nos facilita funcionalidades que otro lenguajes de programación le facilitan al usuario, un ejemplo de esto es Java. Acá te enlistaré carácteristicas que nos fácilita TypeScript para crear clases tipadas.

### Private constructor

Sirve para definir un constructor para que solo puedas instanciar la clase dentro de la misma clase, esto se aplica principalmente al patron singleton.

### Abstract

Una clase Abstract se define de la siguiente manera `abstract class Mutant {}`, estas clases sirven para definir comportamientos comunes para las otras clases, o sea, para crear clases extendidas con base a esta pero TypeScript no nos permite instanciarla.

### Public

Lo usamos al principio del nombre de una propiedad o método, sirve para especificar que podrás acceder al método o propiedad de la clases desde fuera de esta una vez que esté _instanciada_.

### Private

Lo usamos al principio del nombre de una propiedad o método, sirve para especificar que no podrás acceder al método o propiedad de la clases desde fuera de esta una vez que esté _instanciada_ o no.

### Static

Lo usamos al principio del nombre de una propiedad o método, sirve para especificar que puedes acceder a la propiedad o método desde fuera o dentro de la clases _sin tener que instanciarla_.

### Protected

Lo usamos al principio del nombre de una propiedad o método, sirve para especificar que no podrás acceder al método o propiedad de la clases desde fuera de esta una vez que esté _instanciada_ o no. La diferencia entre `private` y `protected` es que con protected podrás acceder a este método desde otra clases que extiendan la clase en donde está dicho método, en cambio, con `private` solo los puedes llamar dentro de la misma clase.

### Get

Aunque `Get` es de JavaScript hago mención de el acá igualmente. Sirve para obtener una información de la clase y aplicarle lógica a esta antes de ser devuelta. Se llama como si fuese una propiedad y este siempre debe devolver algo. Por ejemplo, `wolwerine.fullName`.

### Set

`Set` también es de JavaScript pero haremos la explicación de este acá. Sirve para definir una propiedad. Es una especie de método que solo puede recibir un valor como parámetros y nunca devuelve nada. Para usar un `set` debemos llamarlo como si fuese una propiedad e igualarlo a lo que necesitemos. Por ejemplo, `wolwerine.fullName = "Logan";`.

## Types e Interfaces

Los tipos y las interfaces función similar, estas están encargadas de asegurarse que el código siga una esctructura, son como un mapa. Sin embargo, estas tienen una diferencias, por ejemplo con su forma de definirse y algunas caracteristicas.

### Estructura

La estructura de un tipo es: `type Person = {...}`
La estructura de una interface es: `interface Person {...}`

### Funcionamiento

El `Type` sirve para definir tipos pero no te permite extenderlos.
La `interface` sirve para definir tipos y poderlo extender como si fuesen clases. Digamos que las `interface` funcionan similar a una clase pero no crean ni instancian nada, solo definen tipos.

## Namespace

Sirve para crear entornos de trabajo en el cual definimos nuestro código y lo expornotamos para que puedan ser usados en otras partes de código, por lo general no es usado al menos que un framework te lo pida.

## Generics

Los tipos genericos lo usamos para definir un tipo que nosostros queramos a una plantilla base y podamos obtener un tipo correcto en base al tipo principal, estos tipos se lo podemos pasar a funciones, clases, interfaces, entre otros. Un ejemplo de esto es `const function = <T>(param: T): T => param` al momento de llamar la función hacemos esto `function<string>(param)` de esta forma al momento de retornarnos el valor la función sabemos que es un `string` y podremos tratarlo como tal.

## Decoradores.

Los decoradores son funciones que se ejecutaran en el momento que se haga la compilación o transpirlación del código.
### Factory Decorator
Un `factory decorator` es un decorador que devuleve una función, lo cual nos permite enviarle parámetros.