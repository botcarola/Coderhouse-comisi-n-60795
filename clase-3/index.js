const diaDeHoy = "Jueves"

if ( diaDeHoy === "Lunes") {
    console.log("Hoy es el primer día de la semana")
} else if ( diaDeHoy === "Martes") {
    console.log("Hoy es el segundo día de la semana")
} else if (diaDeHoy === "Miércoles") {
    console.log("estamos a la mitad de la semana")
} 

// SWITCH
// método que me permite evaluar casos
// sintaxis: switch (VALOR A EVALUAR ) { casos detallados}

switch (diaDeHoy) {
    case "Lunes":
        console.log("Es el primer día laboral de la semana.")
        break;
    case "Martes":
        console.log("Un día antes de la mitad de la semana.")
        break;
    case "Jueves":
        console.log("Ánimo, es el anteúltimo día laboral de la semana")
        break;
    default:
        console.log("No es un día válido de la semana.")
}

// Evaluar qué tipo de tarjeta tiene el usuario

// let primerosNumerosDeTarjeta = Number(prompt("Ingrese sus primeros 4 o 5 números de tarjeta."))

let primerosNumerosDeTarjeta = 4551

switch (primerosNumerosDeTarjeta) {
    case 4551:
        console.log("Su tarjeta es Visa")
        break;
    case 54673:
        console.log("Su tarjeta es American Express")
        break;
    case 3789:
        console.log("Su tarjeta es MasterCard")
        break;
    default:
        console.log("Es una tarjeta inválida.")
}

// truquito de jorge de parseo
// let primerosNumerosDeTarjeta = +prompt("Ingrese sus primeros 4 o 5 números de tarjeta.")

// una de las principales ventajas de los lenguajes de programación es la repetición

// VALOR INICIAL ES IGUAL A 0

let indice = 0;
console.log(indice)

// evalúo si el valor inicial es menor a 10

if ( indice < 10 ) {
    // si es menor, le sumo 1 al valor anterior
    indice = indice + 1  
    console.log(indice) 
}

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// if ( indice < 10 ) {
//     indice = indice + 1
//     console.log(indice)
// }

// todo este trayecto podríamos evitarlo si usáramos for
// for es un bucle
// sintaxis
// for ( VALOR INICIAL, [condicion], incremento/decremento ) {}
// el bucle for itera y realiza una tarea, mientras la condición sea true

for ( let i = 0; i < 10 ; i = i + 1) {
    console.log(i)
}

// pasos del for
// 1) se declara el valor inicial
// 2) evalúa la condición ,si la pasaa se ejecuta el código que está dentro de las llaves
// 3) una vez que finaliza de ejecutar las instrucciones, suma un valor a la variable del valor inicial

// VALORES DENTRO DE UN FOR
// si declaramos variables dentro de un for, no podemos obtener los valores anteriores, en el caso de que necesitemos acumularlos
// si declaramos variables dentro de un for, solo van a existir en ese bloque
// ++ operador unario
// valor++ --> le sumo 1 al valor anterior
// valor+= x  --> permite sumar un valor distinto a 1
// el operador +=, puede ser -=, *=, /=

//variable acumuladora
let valor = 0

for ( let i = 0; i < 10; i++ ) {  
    // si reasigno acá un valor, constantemente voy a reasignar al mismo valor, por cada iteración del for
    valor = 2 
    valor++
    console.log(`El valor de la iteración de ${i} en la suma de la variable valor es: ${valor}`)
}

console.log(valor)

// length
// me permite saber la cantidad de cosas que hay en algo

const nombre = "Leon"
console.log(nombre.length)

for (let i = 0; i < nombre.length; i++ ) {
    console.log(nombre[i])
}

// while
// es un bucle como for
// sintaxis
// while ( condicion ) { instrucciones y incremento }
// el valro inicial se declara por fuera de  la condición

let valorInicial = 5

while ( valorInicial < 10 ) {
    // tarea a ejecutar
    console.log("El valor es menor que 10")
    // incremento
    valorInicial++;
}

// while con decremento

let i = 10;

while ( i > 0 ) {
    console.log(`El valor de i en este while en decremento es: ${i}`)
    i--;
}

// do while
// va a ejecutar una acción al menos una vez

let suma = 0;
let numero = 2;
do {
    suma = suma + numero
    numero = numero + 2
    console.log(numero)
} while ( numero <= 0)
console.log(suma)

// VERIFICAR QUE LA CONTRASEÑA SEA CORRECTA

let contrasenia
do {
    contrasenia = prompt("Ingrese su contraseña.")
} while ( contrasenia != "contraseña123")

console.log(`Contraseña correcta, bienvenido usuario.`)