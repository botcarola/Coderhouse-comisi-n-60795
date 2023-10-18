// las funciones de orden superior reciben o retornan funciones
// estas funciones se denominan callbacks

// let acumuladora = 0

// for (let i = 0; i < 10; i++) {
//     acumuladora = acumuladora + i
//     console.log(acumuladora)
// }

// reduce
// retorna un único valor obtenido de la iteración de todos los valores del array
// recibe un callback como argumento

const carrito = [10000, 4500, 20000, 5468, 3000, 1, -1234]

const sumaTotal = carrito.reduce(( acumuladora, elementoActual  ) => {
    return acumuladora + elementoActual
}, 0)

console.log(sumaTotal)

// CÓMO GENERAR ELEMENTOS HTML CON REDUCE

const titulosPokemon = pokemon.reduce(( acc, element ) => {
    return acc + `
        <h2>
            ${ element.name }
        </h2>
    `
}, "")

console.log(titulosPokemon)

// inyecto todos los elementos html con document.write

document.write(titulosPokemon)

// sort
// método de array que permite ordenar un array
// puede ordenar strings o numbers
// los ordena distinto
// recibe un callback
// modifica el array original
// sort ordena en relación a la posición unicode de los elementos

console.log("sebastián".charCodeAt(0))

// ordenar array de frutas

const frutas = [ "kiwi", "ananá", "banana", "sandia", "uvas", "ñ", "pera"]

frutas.sort()

console.log(frutas)

// ordenar numbers
// recibe dos parámetros obligatorios que representan los valores que se comparan

// ordenar de manera ascendente

console.log(carrito.sort((x, y) => { 
    return x - y
}))

// ordenar de manera descendente 

console.log(carrito.sort((x, y) => { 
    return y - x
}))

// ORDENAR STINGS CON FORMATO A - Z Y Z - A

let clientes = [
    {
        nombre: "Braulio"
    },
    {
        nombre: "Mariano"
    },
    {
        nombre: "ñandu"
    },
    {
        nombre: "Agustín"
    },
    {
        nombre: "Jorge"
    }
]

// ascendente

console.log(clientes.sort((a, b) => {
    if ( a.nombre < b.nombre ) {
        return -1
    } else if ( a.nombre > b.nombre ) {
        return 1
    } else {
        return 0
    }
}))

// descendente

console.log(clientes.sort((a, b) => {
    if ( b.nombre < a.nombre ) {
        return -1
    } else if ( b.nombre > a.nombre ) {
        return 1
    } else {
        return 0
    }
}))

// forma paralela para ordenar strings
// ascendente

console.log(clientes.sort((a, b) => a - b))

// descendente

console.log(clientes.sort((a, b) => b - a))

////////////////////////////////////////////////////

// los objetos tienen propiedades que pueden contener datos
// los objetos tienen métodos, funciones integradas, que pueden ser utilizados a través de la notación de punto

// OBJETO MATH
// ES UN OBJETO NATIVO
// facilita propiedades matemáticas y métodos
// accedemos a ellos a través de la notación de punto

console.log(Math)

// constante de Euler

console.log(Math.E)

// PI

console.log(Math.PI)

// PUEDO ACCEDER A SUS PROPIEDADES
// Math.min devuelve el número menor de una cadena de argumentos pasados al método
// Math.min no procesa arrays, no tiene un iterador interno ( no tiene un bucle )

console.log(Math.min(50, 42, 10000, 9, 523434))

// podemos pasarle mútiples valores a este método con un spread operator

console.log(Math.min(...carrito))

// Math.max
// visualizar el número mayor

console.log(Math.max(8234, 243, 1232133, Infinity))

// Math.sqrt: la raíz cuadrada de un número

console.log(Math.sqrt(81))

// Math.random()
// Retorna un número aleatorio

// si usamos el método sin ninguna fórmula, devuelve un número random entre 0 y 1

console.log(Math.random())

// si aplicamos la fórmula, podemos elegir el rango de este número random

// Math.random() * (max - min) + min

console.log(Math.random() * (100 - 50) + 50)

const numeroRandom = Math.random() * (100 - 50) + 50;
console.log(numeroRandom)

// Math.floor 
// redondea un número flotante hacia abajo, hacia el valor más cercano

console.log(Math.floor(numeroRandom))

// Math.ceil()
// redondea hacia arriba

console.log(Math.ceil(numeroRandom))

// Math.round()
// redondea al valor más cercano

console.log(Math.round(numeroRandom))

// DATE
// es también un objeto incorporado que provee fechas

const fechaDeHoy = new Date()

console.log(fechaDeHoy)

// la fecha de hoy está en formato utc, relativo al navegador del usuario

// la fecha no es un string, es de tipo objeto

console.log(typeof fechaDeHoy)

// los meses en javascript van de 0 al 11, en donde 0 es enero y 11 es diciembre

// para poder generar una fecha específica, tenemos que pasarle al constructor, el año, mes y día

// si no pasamos hora, minuto y segundo, la fecha se establece con hora, minuto y segundo en 00:00:00

const instanciarFecha = ( año, mes, dia ) => new Date(año, mes, dia)

console.log(instanciarFecha(2020, 0, 1))

// getMonth()
// obtengo el mes teneindo en cuenta qeu arranca enero en 0 y diciembre es 11

console.log(fechaDeHoy.getMonth())

// getDate()
// extrae el día en número de cualquier fecha

console.log(fechaDeHoy.getDate())

// getFullYear()

console.log(fechaDeHoy.getFullYear())

// RESTA ENTRE FECHAS

const fechaRandom = instanciarFecha(1992, 10, 24)

console.log(fechaDeHoy - fechaRandom)

// toDateSTring()
// string
// se visualiza la fecha en formato americano

console.log(fechaDeHoy.toDateString())

// toLocaleDateSTring()
// string
// muestra la fecha en formato local

console.log(fechaDeHoy.toLocaleDateString())

// toLocaleString()
// transforma en fecha local

console.log(fechaDeHoy.toLocaleString())

// toTimeString()
// nos provee el horario en formato local
// string

console.log(fechaDeHoy.toTimeString())