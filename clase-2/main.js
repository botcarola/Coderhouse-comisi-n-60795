// por convención se generan identificador con camelCase
// container_child --> snake_case
// container-child --> kebab-case
// containerChild --> camelCase

// mala práctica a la hora de declarar el identificador de una variable
// o no simboliza su contenido
let o = "laskdjasd0912u3yi12t378asdjhsadlajkd'01203" 


const nombreDelUsuario = "kevinxD"
let edad = 28
edad = 29
// console.log(edad)

// booleano
// representa dos valores: true o false
// es un tipo de dato primitivo

let luz = false;
let luzApagada = true;

// OPERADORES DE COMPARACIÓN
// como resultado siempre van a dar un booleano
// no hay forma que devuelva un valor diferente

// operador >
// se compara de izquierda a derecha
// si el número es mayor, entonces da true
// si el número es igual al que se compara false

console.log(1560 > 500) // true
console.log(500 > 1560) // false
console.log(1560 > 1560) // false

// operador <
// se compara de izquierda a derecha
// si el número es menor que el de la izquierda, da true
// si el número es igual al que se compara da false

console.log(1000 < 10000) // true
console.log(10000 < 1000) // false
console.log(10000 < 10000) // false

// operador >= 
// se compara de izuqierda a derecha
// es incluyente de los valores iguales
// "es este número mayor que mil? no, pero igual? si"

console.log(1000 >= 1000)

edad = 17

console.log(edad >= 21) // este usuario no puede comprar bebidas alcóholicos porque es menor de edad

edad = 21

console.log(edad >= 21)

// operador <= 
// se compara de izquierda a derecha
// es incluyente de los valores iguales
// "es este número menor? no, pero es igual? si"

edad = 4

console.log( edad <= 3)

edad = 3 

console.log(edad <= 3)

// operador == (igualdad)
// compara si dos valores son iguales

console.log("carola" == "carola") // true
console.log("carola" == "Carola") // false
console.log("0" == 0) // true
console.log(null == undefined) // true
console.log( null == 0) // false

// operador de igualdad estricta ===
// compara si dos valores son iguales POR TIPO Y POR VALOR

console.log( null === undefined )
console.log( Number(null) )
console.log( Number(undefined) )
console.log( "0" === 0 )

// operador desigualdad !=
// verifica si la desigualdad es de valor, no de tipo

console.log(100 != "hola") // true
console.log( 100 != "100") // false

// operador de desigualdad estricta !==
// verifica si dos elementos son desiguales por valor y por tipo

console.log( 100 !== "100") // true
console.log(100 !== 100) // false

// EN JAVASCRIPT EXISTEN 6 BOOLEANOS FALSE

console.log(false) // el booleano false es false
console.log(Boolean(0)) // es un falsy, ausencia de valor numérico
console.log(Boolean("")) // es un falsy, por ausencia de caracteres
console.log(Boolean(null)) // vacío intencional, la nada
console.log(Boolean(NaN)) // false, not a number
console.log(Boolean(undefined)) // false, indefinido

// OPERADORES LÓGICOS
// LOS OPERADORES LÓGICOS NO SIEMPRE DEVUELVEN UN BOOLEANO

// AND (Y) &&
// EVALÚA QUE TODOS LOS OPERANDOS DE LA CADENA SEAN TRUE

// se representa con doble ampersand: &&
// es una y como la de nuestro lenguaje
// todos los operandos de una frase tienen que ser TRUE para poder generar que en la respuesta se devuelva


const jamon = "si" // son true porque son strings
const queso = 1 // true por sstring
const pan = 1

console.log( Boolean(queso))
console.log(Boolean(jamon))

console.log(jamon && queso && pan)

// UN && SOLO VA A SER TRUE EN LOS SIGUIENTES CASOS

true && true // true, todos sus operandos son true
true && false // false
false && true // false
false && false // false

console.log( 243324 && 2 && 5 && -78 && 123)

// operador OR ||
// es una o en nuestro idioma
// AL MENOS UN OPERANDO TIENE QUE SER TRUE

const edadDelMenor = 13
const edadAdolescente = 17
const tienePermisoParaIrAlCine = false 
const permisoPadresAdolescente = true

console.log( edadDelMenor >= 18 || tienePermisoParaIrAlCine) // false, no puede

console.log( edadAdolescente >= 18 || permisoPadresAdolescente)

true || true // esto es true
true || false // true
false || true // true
false || false // false

// IF..ELSE
// nos permite evaluar un caso
// en caso de que esa evaluación sea true, se ejecuta un bloque de código
// en caso de que no, no hace nada
// si tiene un else, ejecuta algo como caso contrario

// "SI ESTO ES TRUE, ENTONCES EJECUTO ESTO"

// if ( CONDICIÓN O VALOR A EVALUAR ) { --> solo SE EJECUTAN LAS SENTENCIAS, SI LA CONDICIÓN DIO TRUE
//     CONJUNTO DE SENTENCIAS A EJECUTAR
// }

// en este caso, un millón es mayor a mil, da como resultado true y ejecuta la sentencia

if ( 1000000 > 1000 ) {
    console.log("es mayor")
}

// en este caso, el string "carola" es true, por lo tanto el if ejecuta la sentencia

if ( "Carola" ) {
    console.log("Es verdadero")
}

// CASO NOTA

// 0 ---> ausente
// 1 - 6 --> desaprobado
// 7 - 10 --> aprobado

// else if

const notaDelAlumno = 10000

if  ( notaDelAlumno >= 7 && notaDelAlumno <= 10 ) {
    console.log(`Usted ha aprobado, su nota es: ${ notaDelAlumno }`)

} else if ( notaDelAlumno <= 6 && notaDelAlumno >= 1 ) {

    console.log(`Usted ha desaprobado, debe rendir el recuperatorio, su nota es: ${ notaDelAlumno }`)

} else {
    
    if ( notaDelAlumno === 0 ) {
        console.log(`Usted se ha ausentado, no hay posibilidad de volver a rendir. Ha desaprobado. Nota ${ notaDelAlumno }`)

    } else if ( typeof notaDelAlumno !== "number" ) {

        console.log("Formato inválido")
    }
}

// CASO TEMPERATURA

// -5° hasta 5° ---> puede nevar
// 6° hasta 16° ---> hace frío
// 17° hasta 27° ---> templadito ( primavera u otoño)
// 28° hasta 38° ---> hace calor
// 38° para arriba ---> ola de calor

const temperaturaActual = 38

if ( temperaturaActual <= 5 && temperaturaActual >= -5 ) {
    console.log("Puede nevar.")

} else if ( temperaturaActual >= 6 && temperaturaActual <= 16 ) {
    console.log("Hace frío")

} else if ( temperaturaActual <= 27 && temperaturaActual >= 17 ) {
    console.log("Está templado")

} else if ( temperaturaActual <= 38 && temperaturaActual >= 28 ) {
    console.log("Hace calor")

} else if ( temperaturaActual >= 38 ) {
    console.log("Ola de calor")
}