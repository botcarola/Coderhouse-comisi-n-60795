// abstracción es una simplificación de una idea tras un concepto

// const calculadora = ( x, y, operacion ) => {
//     if ( operacion === "suma" ) {
//         return x + y
//     } else if  ( operacion === "resta" ) {
//         return x - y
//     } else if ( operacion === "multiplicar" ) {
//         return x * y
//     } else if ( operacion === "dividir" ) {
//         return x / y
//     }
// }

// PODEMOS MEJORAR ESTE CÓDIGO Y ABSTRAERLO
// 1) DIVIDIMOS LA LÓGICA EN FUNCIONES MÁS CHIQUITAS

const suma = (x, y) => x + y

const resta = (x, y) => x - y

const multiplicar = (x, y) => x * y

const dividir = (x, y) => x / y

// 2) AHORA LA FUNCIÓN CALCULADORA RECIBIRÁ LOS ARGUMENTOS NECESARIOS, SIN TENER RELACIÓN CON LA FUNCIONALIDAD DE LAS FUNCIONES QUE SE OCUPAN DE LAS OPERACIONES

// FUNCIONES DE PRIMERA CLASE
// EL JAVASCRIPT PODEMOS MANIPULAR A LAS FUNCIONES COMO SI SE TRATASEN DE VARIABLES
// NOS PERMITE QUE PODAMOS PASARLAS COMO ARGUMENTOS A OTRAS FUNCIONES
// TAMBIÉN NOS PERMITE QUE LSA FUNCIONES PUEDAN RETORNAR FUNCIONES

const calculadora = (x, y, operacion) => {
    return operacion(x, y)
}

console.log(calculadora(100, 3234, suma))

// console.log(calculadora(prompt("elija un primer número"), prompt("Elija un segundo número"), multiplicar))


// FUNCIONES DE ORDEN SUPERIOR
// son funciones que reciben como argumentos otras funciones y que también pueden retornar funciones

// MÉTODOS DE ARRAYS
// iteran sobre los arrays y realizan tareas específicas ocultas detrás de la abstracción de su "verbo"
// RECIBEN COMO ARGUMENTO UN CALLBACK
// QUÉ ES UN CALLBACK?
// FUNCIONES QUE SE PASAN A OTRAS COMO ARGUMENTOS Y SON LLAMADAS POR LA FUNCIÓN DE ORDEN SUPERIOR
// estas funciones no tienen nombre
// solo son invocadas por las funciones de orden superior

const frutas = ["banana", "manzana", "kiwi", "melón", "sandía", "durazno", "maracuyá"]

// forEach()
// permite iterar sobre un array
// es lo mismo que un for
// recibe un parámetro obligatorio
// tiene dos parámetros opcional, que son índice y array
// no retorna nada
// el forEach es como un for, pero está abstraído

// for ( let i = 0; i < frutas.length; i++) {
//     frutas[i]
// }

// for ( const fruta of frutas ) {
//     console.log(fruta)
// }

frutas.forEach((elemento, indice) => {

    document.write(`<h2>El elemento ${elemento} se encuentra en el índice ${indice}</h2>`)
})

// find()
// este método busca en el array y devuelve el primer resultado que coincida con la búsqueda
// tiene un parámetro obligatorio que representa al elemento actual que está recorriendo el método
// tiene dos parámetros opcionales: indice y array
// DEVUELVE EL OBJETO QUE ENCUENTRA, SI ASIGNAMOS LE RESULTADO A UNA VARIABLE, TENDREMOS ACCESO AL ELEMENTO
// si no encuentra nada, retorna un undefined

let clientes = [
    {
        nombre: "Mark"
    },
    {
        nombre: "Mariano"
    },
    {
        nombre: "Victoria",
        id: 0
    },
    {
        nombre: "Jerónimo"
    },
    {
        nombre: "León"
    },
    {
        nombre: "Victoria",
        id: 5
    },
]

const clienteImportante = clientes.find(( cliente ) => {
    return cliente.nombre === "Victoria"
})

console.log(clienteImportante)

// filter()
// recibe un callback
// su callback recibe un parámetro obligatorio: elemento actual
// recibe dos parámetros opcionales
// retorna todos los datos que filtrados
// si no encuentra resultados que cumplan son criterio, retorna un array vacío

let productos = [ 
    {
        name: "remera" 
    },
    {
        name: "pantalón deportivo"
    },
    {
        name: "gorra"
    },
    {
        name: "zapatillas"
    }
]

const productosFiltrados = productos.filter(( producto ) => {
    return producto.name !== "gorra"
})

console.log(productosFiltrados)

// some()
// método que recibe un callback
// tiene un parámetro obligatorio que representa al elemento actual
// tiene dos parámetros opciones: indice, array
// retorna un boolean si al menos encuentra una coincidencia, que en ese caso es true
// si no coincide, es false

const numbers = [ 1, 3 ,5 ,7 ,8 ,8 ,8 ,8]

const verificarSiHayUnValor = numbers.some(( numero ) => {
    return numero === 1000
})

console.log(verificarSiHayUnValor)

// map()
// método que recibe un callback
// tiene un parámetro obligatorio que representa al elemento actual
// tiene dos parámetros opcionales: indice, array
// retorna un nuevo array que incluye todos los valores del array anterior, los cuales puedne ser modificados
// no afecta al array original

const copiaDeProductos = productos.map(( producto ) => {
    return producto.name.toUpperCase()
})

console.log(copiaDeProductos)

console.log(productos)

