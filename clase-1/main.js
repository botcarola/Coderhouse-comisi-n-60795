// los archivos script tienen una terminación .js
// podemos incluir comentarios en js utilizando //

// también puedo comentar con /**/ como en CSS

/*
ñasldkañslkd
asñldksad
asñldkasñldsa
ñlaskdñlasd
ñlaskdñslakd
*/


console.log("Hola mundo desde un archivo js")

// PROGRAMAR ES MANIPULAR DATOS
// en javascript los datos más sencillos son denominados "datos primitivos"

// number
// tipo de dato primitivo numérico
// números enteros y números flotantes

console.log(10)
console.log(-1000)
console.log(12093810923)

// números flotantes, número con coma, números decimales

console.log(10.5)
console.log(0.45345)

// infinity

console.log(Infinity)

// -infinity

console.log(-Infinity)

// NaN
// las operaciones matemáticas en javascript son seguras
// si se hacen operaciones matemáticas entre datos incongruentes, n ose va a interrumpir el código
// NOT A NUMBER
// se da como resultado de malas operaciones matemáticas

console.log(NaN)

// OPERADORES MATEMÁTICOA

// suma +

console.log(20 + 10)

// cuando el operador suma, intenta sumar dos operandos que no son de tipo number pero alguno es de tipo string, los concatena

console.log("20" + 30)

// resta -
// permite restar x valor al primer operando de la operación

console.log(50 - 10)

// JAVASCRIPT EN OPERADORES ARITMÉTICOS HACE CONVERSIÓN DE TIPO CUANDO UNO DE ESOS VALORES NO ES NUMBER, PERO SI ES UN STRING "NUMBER"
// LO HACE CON TODOS LOS OPERADORES (matemáticos) QUE NO SEAN SUMA

console.log("50" - 10)

// NOT A NUMBER APARECE

console.log("cincuenta" - 10)

// multiplicación *

console.log(10 * 23434)

// conversión de tipo
console.log(10 * "67")

// nan

console.log(456 * "sdasd")

// división /

console.log(23123 / 2)

// conversión de tipo
console.log("213213" / 6)

// nan
console.log("asdsad" / 2)

// string 
// cadenas de caracteres
// REPRESENTAN "TEXTO"
// representan todo tipo de caracteres, no solo letras

// independientemente del tipo de comillas, siempre será el mismo dato: string

// comillas simples

console.log('esto es una cadena de comillas simples')

// comillas dobles

console.log("Esta es otra cadena, pero con comillas dobles")

// comillas invertidas o backticks

console.log(`Hola soy una cadena de texto`)

// template string o interpolación

console.log(`El resultado de esta suma es: ${ 2 * 93478234 + 674 }`)

// cómo concateno esta misma operación?

console.log("El resultado de esta suma es: " + 2 * 213123 + 674)

// VARIABLES
// espacio reservado de memoria, que me permite alojar datos
// si tuviesemos que hacer un paralelismo, una variable sería equivalente a guardar algo en una caja

// ANATOMÍA DE LA VARIABLE
// let ---> la palabra reservada indica a javascript que se va a generar una variable
// identificador --> es el nombre de la variable
// ESTO ES UNA DECLARACIÓN DE VARIABLE

let baldosas

// el valor por defecto undefined
// valor no asignado // indefinido // valor que no existe

console.log(baldosas)

// si intento llamar a un identificador que no existe en javascript, se interrumpe el código por error: "reference error: is not defined"

// console.log(citricos)

// OPERADOR DE ASIGNACIÓN

baldosas = 1500;

// si quiero volver a redeclarar, se me rompe el código, es ilegal

// let baldosas --> rompe el código

// se puede declarar una nueva variable con un distinto identificador

let baldosasRojas = 2000;

// reasignación
// cuadno una variable de tipo let cambia su valor en tiempo de ejecución

baldosas = 4500

console.log(baldosas)

// const --> constante
// la declaración de variables con constantes, indican que:
// LA VARIABLE NO SE PUEDE REASIGNAR
// LA VARIABLE VA A TENER EL MISMO VALOR QUE EN EL MOMENTO EN EL CUAL SE ASIGNÓ UNO

const nombreDelUsuario = "Julián"

//si intento reasignar, me va a dar error

// nombreDelUsuario = "Eduardo"

// NO SE USA VAR PARA DECLARAR VARIABLES

// EJEMPLO DE VARIABLES CON INTERPOLACIÓN

console.log(`La cantidad de baldosas es de: ${ baldosas }`)

console.log(`Un cliente compró la mitad de las baldosas disponibles, ahora tenemos en stock: ${ baldosas / 2 }`)

// OPERADOR TYPEOF
// este operador te permite saber con qué dato estás trabajndo
// este operador es una palabra reservada

console.log(typeof "01983123")
console.log(typeof 123213)

// CUADROS DE DIÁLOGO: permiten interactuar con el usuario a través del navegador
// los cuadros de diálogo son nativos del navegador y no se pueden estilar

// alert
// comunica al usuario a través de una ventana un mensaje
// debería recibir cadena de caracteres, pero puede recibir cualquier dato SIN CAER UN ERROR QUE CORTE LA EJECUCIÓN

// alert("Te ganaste un iphone")

// si le pasamos numbers, lo visualiza como un texto

// alert(213123)

// puedo pasarle como valor una identificador a un alert 

// alert(baldosas)

// prompt()
// es un cuadro de diálogo que permite que el usuario ingrese un dato que puede tipear

// prompt()

// para poder preservar el dato que ingresa el usuario, debo guardar esta función en una variable

const respuestaDelUsuario = prompt("Ingrese su edad")

console.log(respuestaDelUsuario)

// confirm
// devuelve valor booleano
// para guardar el valor, necesitamos unavariable

confirm("Quiere instalar la actualización o no?")