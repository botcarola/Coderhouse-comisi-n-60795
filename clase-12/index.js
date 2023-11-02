// sugar syntax
// término acuñado por Peter Landin
// expresa una forma de codificar simplificada
// que favorezca a la lectura de código

// operador ++
// operador unario suma
// incrementa un valor en 1

// for ( 
//     let i = 0;
//     i < 10; 
//     i++ 
//     ) {
//     console.log(i)
// }

// operador --
// operador unario resta
// decrementa un valor en 1

// for (
//     let i = 10; 
//     i > 0;
//     i-- 
//     ) {
//         console.log(i)
    // }

// operador +=
// operador -=
// precisa que se declare el valor a incrementar o decrementar

// for ( let i = 0; i < 10; i += 5) {
//     console.log(i)
// }

// for (
//     let i = 10; 
//     i > 0;
//     i -= 3 
//     ) {
//         console.log(i)
//     }

// OPERADOR TERNARIO
// la resolución de un if / else
// evaluamos una condición
// y otorgando dos posibles resultados en relació na esa evaluación

const permisoDeLosPadres = false
const edad = 14

if ( permisoDeLosPadres || edad >= 18 ) {
    console.log("Puede comprar la entrada")
} else {
    console.log("No cumple con los requisitos")
}

// sintaxis del operador ternario
// condicion ? valor en caso de que sea true : valor en caso de que sea false

// const evaluarCompraEntrada = permisoDeLosPadres || edad >= 18 ? "Puede comprar la entrada" : "No cumple con los requisitos"

// console.log(evaluarCompraEntrada)

// ejemplo 2

// const evaluarCondicion = ( condicion, respuestaTrue, respuestaFalse ) => condicion ? respuestaTrue :  respuestaFalse

// console.log(evaluarCondicion( edad >= 18, "Es mayor de edad", "Es menor de edad"))

// // ejemplo 3

// console.log(data)

// data.forEach(element => {
//     console.log(element.email ? element.email.toUpperCase() : "No tiene mail")
    
// });

// BOTÓMN PARA ENVIAR MAIL A CLIENTE SI TIENE MAIL REGISTRADO

const cardsClientes = data.reduce(( acc, element ) => {
    return acc + `
        <div class="card">
            <h2>
                ${ element.first_name} ${ element.last_name}
            </h2>
            <h3>
                ${ element.email ? element.email : "No tiene mail"}
            </h3>
            <button>
                ${ element.email ? "Enviar email" : "Registrar mail" }
            </button>            
        </div>
    `
} ,"")

console.log(cardsClientes)

document.querySelector(".container").innerHTML = cardsClientes

// OPERADORES DE CORTOCIRCUITO // SHORTCUT
// nos facilitan en poco código un valor
// SON LOS MISMO OPERADORES LÓGICOS DE SIEMPRE

// AND
// &&
// SI ES TRUE, ENTONCES EJECUTÁ ESTO O RETORNÁ ESTO

// true && true --> 

const jamon = "si"
const queso = true
const pan = true
const mayonesa = "no"

console.log( jamon && queso && pan && mayonesa)

// for con cortocircuito

for ( let i = 0; i < 10; i++ ) {
    console.log(data[i].email && "Podemos contactar al cliente")
 
}

// enviar mensaje si el carrito está vacío

const carrito = []

if (carrito.length === 0) {
  console.log("El carrito está vacío!")
}

// con operador AND
carrito.length === 0 && console.log("El carrito está vacío!")

// OR ||
// EJECUTA ESTO O SINO ESTO OTRO
// evalúa hasta el último elemento de la cadena
// PORQUE NECESITA VERIFICAR QUE AL MENOS UN CASO SEA TRUE
// esto o esto otro

// QUE SI ENCUENTRA EL PRIMER CASO EN TRUE, DEVUELVE ELPRIMER CASO, SINO DEVUELVE EL SEGUNDO

for (let i = 0; i < data.length; i++) {
    console.log(data[i].email || "No tiene mail")
}

// verificar estado de usuario

const estado = false

console.log(estado || "No está disponible")

// EJEMPLO DE DATOS DEL CARRITO

localStorage.setItem("carrito", JSON.stringify([{producto: "harina", precio: 500}, {producto: "gaseosa", precio: 900}]))

let carro = JSON.parse(localStorage.getItem("carrito")) || []

console.log(carro)

// nullish
// operador que verifica si el dato es un null o undefined
// si no lo es, todo demás dato es considerado como "true"

console.log( null ?? "El estado del usuario es nulo")

console.log( 0 ?? "El estado del usuario es nulo")

for ( let i = 0 ; i < data.length; i++ ) {
    console.log(data[i].email ?? "El mail es nulo")
}

// OPTIONAL CHAINING
// encadenamiento opcional
// ?

let persona = {}

console.log(persona)
console.log(persona.edad)

// ERROR, N OSE PUEDEN LEER PROPIEDADES DE INDEFINIDO

// console.log(persona.mascota.nombre)

// aplicando para evitar el error

console.log(persona?.mascota?.nombre)

// DESTRUCTURING
// podemos desestructurar datos como arrays y objetos para obtener un valor encapsulado en ellos

const auto = {
    marca: "Toyota",
    modelo: 2020,
    precio: 15000000,
}

const { precio, marca } = auto

console.log(marca, precio)

// ejemplo de destructuring de array de objetos

const tarjetas = data.reduce((acc, elemento) => {
    const { email } = elemento
    return acc + `
    <h2>${ email } </h2>
    `
}, "")

console.log(tarjetas)

// alias
// podemos usar alias en el destructuring para generar una variable con un nombre distintivo, distinto a el de la clave de la propiedad

const mesa = {
    patas: 3,
    altura: 100,
    radio: 100
}

// primero mencionamos la propiedad y luego asignamos el alias

const { patas: patasDeLaMesa } = mesa

console.log(patasDeLaMesa)

const pcGamer = {
    "placa de video": "RTX 3080",
    "motherboard": "Gigabyte MJ23L2"
}

console.log(pcGamer["placa de video"])

const { ["placa de video"] : placaDeVideo } = pcGamer 

console.log(placaDeVideo)