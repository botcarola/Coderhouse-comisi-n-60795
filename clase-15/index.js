const saludar = ( persona ) => console.log(`Hola ${persona}`)

// el sincronismo es un estilo de programación en donde las isntrucciones se ejecutan una tras otra, en secuencia
// el encargado de ejecutar las instrucciones se llama "callstack" o "pila de llamadas"

console.log("Este mensaje va primero")
console.log("Este mensaje va segundo")
console.log("Este mensaje va primero")

saludar("Jona")

// ejecución en funciones de orden superior

const suma = ( a, b ) => a + b

const multiplicar = ( a, b, c) => suma(a, b) * c

console.log("lskajdlkasjdsad")

console.log(multiplicar(15, 23, 2))

const sumaDeNumero = suma(30, 23)

// VAMOS A BLOQUEAR LA PILA DE LLAMADAS
// la programación sincrónica es bloqueante de la pila de llamadas

// const procesoLento = () => {
//     for (let i = 0; i < 10000000000000; i++) {
//         console.log("Proceso lento terminado")
//     }
// }

// const procesoRapido = () => {
//     console.log("Proceso rápido terminado")
// }

// procesoLento()
// procesoRapido()

// setTimeout
// método asincrónico que permite la ejecución de un callback, luego de determinado tiempo de espera

console.log("Voy primero")

setTimeout(() => {
    console.log("Voy segundo")
}, 2000)

console.log("Voy tercero")

// PROCESO SÍNCRONO Y ASÍNCRONO

const procesoAsincrono = () => {
    setTimeout(() => {
        console.log("Proceso asíncrono terminado")
    }, 2000)
}

const procesoSincrono = () => {
    console.log("Proceso síncrono terminado")
}

procesoAsincrono()
procesoSincrono()

// setInterval
// método asincrónico que permite la ejecución paulatina de una función (callback)
// sintaxis
//setInterval( funcion, tiempo)

// setInterval(() => {
//     console.log("Hola, estoy dentro de un loop")
// }, 2000)

// podemos hacer uso de clear para detener la invocación de los métodos asincrónicos de setTimeout y setInterval

const mensajePaulatino = setInterval(() => console.log("asljdklajd"), 1000)

clearInterval(mensajePaulatino)

const mensajeEnDosSegundos = setTimeout(() => console.log("Tesaludaré en dos segundos: Hola"), 2000)

clearTimeout(mensajeEnDosSegundos)

// PROMESAS
// ES UN OBJETO EN JS, QUE REPRESENTA ALGO QUE PUEDE ESTAR DISPONIBLE, AHORA, EN EL FUTURO O NUNCA
// LA PROMESA TIENE UN ESTADO POR DEFECTO Y ES PENDING

const promesa = new Promise(( resolve, reject ) => {
    setTimeout(() => {
        resolve("resolvido")
    }, 3000)
})

console.log(promesa)

// .then

const saludarUsuario = ( nombre ) => {
    return new Promise(( resolve, reject ) => {
       
            if ( typeof nombre === "string" && nombre.length > 0 ) {
                resolve(`Hola ${ nombre }`)
            } else {
                reject("No es un nombre o el valor es distinto a string")
            }
       
    })
}

// then y catch nos van a permitir interactuar con la respuesta de la promesa
// si la respuesta se decanta por resolve, then tendrá acceso a su resultado
//  si la respuesta se decanta por reject, catch atrapará el error

saludarUsuario("Dylan")
.then( res => console.log(res))
.catch( error => console.log(error))

saludarUsuario(11293810923318123)
.then(( respuesta ) => { console.log(respuesta)})
.catch( ( error ) => console.log(error))

// carga de imagen con promise
// trayecto-callstack-eventloop.jpg

function cargarImagen ( url ) {
    return new Promise(( resolve, reject ) => {
        const imagen = new Image()
        imagen.src = url
        imagen.onload = () => resolve(imagen)
        imagen.onerror = ( error ) => reject(error)
    })
}

cargarImagen("trayecto-callstack-eventloop.jpg")
.then(( response ) => {
    console.log(response)
    // document.querySelector(".container").innerHTML = response
})
.catch(( error ) => console.log(error))

// finally (finalmente)
// método que se va a ejecutar independientemente de la respuesta de la promesa

function promesaRechazada () {
    return new Promise ( (resolve, reject) => {
        reject("La promesa ha sido rechazada.")
    })
}

promesaRechazada()
.then(( res ) => console.log(res))
.catch( error => console.log(error))
.finally( () => {
    console.log("Se ha terminado el proceso.")
})

// simulacro de peticion a una api con promesa

const fetchData = ( status ) => {
    return new Promise(( resolve, reject ) => {
        if( status >= 200 && status < 300 ) {
            resolve({
                meta: "info-de-lapeticion",
                data: [1, 2 , 3, 4, 5, 6 ,7 ,7,8]
            })
        } else if ( status >= 400 && status< 500 ) {
            reject("Error en la petición.")
        } else if ( status >= 500 && status < 600 ) {
            reject("Error en el servicio.")
        }
    })
}

fetchData(404)
.then(( respuesta ) => {
    const reducirValores = respuesta.data.reduce(( acc, element) => {
        return acc + element
    }, 0)
    alert("la suma de los valores es:" + " " + reducirValores)
})
.catch(error => alert(error))
