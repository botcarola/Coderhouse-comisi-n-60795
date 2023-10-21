// 3) Crea una función que reciba el parámetro: minutos.
// Con esta información, el algoritmo deberá retornar el resultado de la conversión en segundos mediante el mensaje: El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

// resolución por function

function convertirMinutosASegundos ( minutos ) {
    return `El resultado de la conversión de ${ minutos } a segundos es : ${ minutos * 60 }`
}

console.log(convertirMinutosASegundos(123))

// resolución por arrow

const convertirASegundos = minutos => `El resultado de la conversión de ${ minutos } a segundos es : ${ minutos * 60 }`

const resultado = convertirASegundos(60)

console.log(resultado)

// 2) Crea una función que reciba los siguientes parámetros: nombrePlaylist, primeraCancion, segundaCancion, terceraCancion.
// Con está información el algoritmo deberá retornar el siguiente mensaje: Se ha creado la playlist ${playlist} con las canciones ${primeraCancion}, ${segundaCancion} y ${terceraCancion}.
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const miPlaylist = (nombrePlaylist, primeraCancion, segundaCancion, terceraCancion) => {
    return `Se ha creado la playlist ${nombrePlaylist} con las canciones ${primeraCancion}, ${segundaCancion} y ${terceraCancion}.`
}

const playlist1 = miPlaylist("'Hora de limpiar'", "Señora de las 4 décadas - Arjona", "Hasta la Raíz - Natalia Lafourcade", "Ahora te puedes marchar - Luis Miguel")
const playlist2 = miPlaylist("'Dominguero'", "Oye mujer - Ke personajes", "Dime si eres feliz - La champions liga", "Una cerveza - Rafaga")
const playlist3 = miPlaylist("'La lloración'", "Como te extraño - Abel pintos", "Noviembre sin ti - Reik", "Que lloro - Sin Bandera")

console.log(playlist1)
console.log(playlist2)
console.log(playlist3)


// const playlist = (nombrePlaylist, primeraCancion, segundaCancion, terceraCancion) => {
//     return console.log(`Se ha creado la playlist: "${nombrePlaylist}" con las canciones '${primeraCancion}', '${segundaCancion}' y '${terceraCancion}'`)
// }
// playlist("Hora de limpiar", "Señora de las 4 decadas-Arjona", "Hasta la Raiz- Natalia Lafourcade", "Ahora te puedes marchar- Luis Miguel")
// playlist("Dominguero", "Oye mujer - Ke personajes", "Dime si eres feliz - La champions liga", "Una cerveza - Rafaga")
// playlist("La llorasion", "Como te extraño - Abel pintos", "Noviembre sin ti -  Reik", "Que lloro - Sin Bandera")

// 9) Crea una función que reciba dos parámetros: numeroDePartida y cantidad.
// Con esta información, el algoritmo deberá incrementar el número cinco veces la cantidad y mostrar cinco mensajes seguidos que muestren en consola el número del mensaje y el total incrementado hasta el momento. Por ejemplo si ingresamos el 6 como número y el 1 como cantidad, debería mostrar lo siguiente:

// 'Incremento 1: 7'
// 'Incremento 2: 8'
// 'Incremento 3: 9'
// 'Incremento 4: 10'
// 'Incremento 5: 11'


const incremetarNumero = ( numeroDePartida, cantidad ) => {

    let acc = numeroDePartida

    for ( let i = 1; i <= 5; i++ ) {
        console.log(`Incremento ${i}: ${ acc += cantidad }`)

    }
}

const resultadoIncrementoNumero = incremetarNumero(6, 1)
incremetarNumero(7, 5)
incremetarNumero(5468, 233)


// 9) Generar patrón: Usando un bucle for, imprime un patrón de asteriscos que tenga un número variable de filas y columnas, donde el número de filas sea igual a la longitud de una cadena de texto.

const toPrint = "xenomorph means strange form";
const numOfRows = toPrint.length;

// for (let i = 0; i < numOfRows; i++) {
//     let row = "";
//     for (let k = 0; k < numOfRows; k++) {
//         if (k <= i) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }

// sintaxis relativa a un valor inicial basado en el string mismo


// for (let line = "*"; line.length < 10; line += "*") {

//     console.log(line);
// }

// 6) Realice un bucle que coteje cuántas vocales tiene el nombre de un usuario. Para valerse de un dato, declare una variable que tenga como valor su nombre. Precisarán de una variable acumuladora que cuente la cantidad de vocales.

let nombre = "Jorge"

console.log(nombre.length)

// siempre que trabaje con strings o arrays, tenemos que generar que en la comparación no haya una igualación, porque el largo de la cadena es mayor simpre por uno más que el índice

let cantidadDeVocales = 0

// for ( let i = 0; i < nombre.length ; i++ ) {

//     if ( nombre[i] === "a" || nombre[i] === "e" || nombre[i] === "i" || nombre[i] === "o" || nombre[i] === "u" ) {
//         cantidadDeVocales++
//     }
// }

for ( let i = 0; i < nombre.length ; i++ ) {   

    if ( nombre[i].match(/[aeiouAEIOU]/) ) {
        cantidadDeVocales++
    }
}

console.log(cantidadDeVocales)

// 7) Inversión de una cadena: Utiliza un bucle for para invertir una cadena de texto, es decir, cambiar el orden de sus caracteres.

let nombreInvertido = ""

for ( let i = nombre.length - 1; i >= 0; i-- ) {
    console.log(nombre[i])
    nombreInvertido += nombre[i]
}

console.log(nombreInvertido)

let name2 = 'george';

let reversedWord = name2.split('').reverse().join('');

console.log(reversedWord);