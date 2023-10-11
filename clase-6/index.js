// array: es una lista de datos
// se definen literalmente por los corchetes

const clientes = []

console.log(clientes)

// LOS ARRAYS SE MIDEN CON EL PROPIEDAD length
// te devuelve la cantidad de elementos que se encuentren en el array

console.log("Leon".length)

// ejemplo de array con constructor
// NO SE USA

const numeros = new Array()

console.log(numeros)

// ACCESO A LOS DATOS DEL ARRAY

const utiles = [ "Lapiceras", "Goma", "Sacapuntas", "Corrector", "Regla" ]

// podemos referirnos al array a través del identificador

console.log(utiles)

// podemos acceder a sus valores a través de los corchetes, en donde el índice permite el acceso al dato incorporado en la cadena

console.log(utiles[2])

// RECORRIDO DE ARRAY CON UN FOR

const frutas = [ "banana", "manzana", "kiwi", "papaya", "melón", "sandía", "uvas" ]

for ( let indice = 0; indice < frutas.length; indice++ ) {
    console.log(indice)
    console.log(frutas[indice])
    console.log(frutas[indice].toUpperCase())

}

const productos = [ 
    {
        id: 1110,
        nombre: "remera"
    },
    {
        id: 342341,
        nombre: "pantalón"
    },
    {
        id: 54353452,
        nombre: "sombrero"
    }
]

// recorro con un for un array de objetos

for ( let i = 0; i < productos.length; i++ ) {
    console.log(productos[i].nombre)
    document.write(`<h2> ${ productos[i].nombre } </h2>`)
}

// incorporar elementos a un array
// push
// añade un elemento luego del último elemento del array

const personas = []

personas.push("Luis")

console.log(personas)

personas.push("Ciro", "Mariano")

console.log(personas)

// agregar un nuevo elemento al inicio de la cadena
// este elemento se inserta en la posición 0 y mueve el índice de todos los datos consecutivos 

personas.unshift("Jorge")

console.log(personas)

// remover datos de un array
// pop() : remueve el último elemento de la cadena

personas.pop()

// shift() : remueve el primer elemento de la cadena

personas.shift()

console.log(personas)

personas.push("Jorge")

// SPLICE
// MODIFICA EL ARRAY ORIGINAL
// permite eliminar elementos de una cadena, permite añadir elemento a una cadena
// permite añadir y eliminar

// CÓMO NO HACER NADA CON SPLICE

const numbers = [ 1, 3, 4, 5353, 6, 232, 2323, 11, 1.6, 324234 ]

// simplemente no le pasamos argumentos
// SI NO LE PASO DATOS AL SPLICE, NO HACE NADA, SOLO GENERA UN ARRAY VACÍO

const arrayConSpliceSinArgumentos = numbers.splice()

console.log(arrayConSpliceSinArgumentos)
console.log(numbers)

// ELIMINAR ELEMENTOS
// el primer valor hace referencia a partir de dónde recortar, incluyendo al elemento alojado en ese índice
// el segundo valor representa la cantidad de elementos a recortar

const numbersRecortados = numbers.splice(0, 3)

console.log(numbersRecortados)
console.log(numbers)

// AÑADIR ELEMENTOS A UN ARRAY
// el primer valor representa la posicón que tomará el nuevo elemento
// el segundo valor representa la cantidad de elemtnos a eliminar, si se pone 0, no se elimina nada
// el último valor es el nuevo valor que ocupará ese índice

numbersRecortados.splice(1, 0, 10000, 555, 333)

console.log(numbersRecortados)

// AÑADIR Y QUITAR ELEMENTOS AL MISMO TIEMPO

numbersRecortados.splice(2, 2, "JAJA XD")

console.log(numbersRecortados)

// join()
// permite generar una cadena de caracteres que comprende todos los valores del array, separados o no por un caracter a elección

const arrayAString = numbersRecortados.join(" - ")
console.log(arrayAString)

// concat
// permite generar un nuevo array con la combinación de dos arrays diferentes
// el array pasado por argumento al concat, incorpora sus datos al final de la cadena, luego del último elemento del array se relaciona con el método

const arrayMezclado = numbersRecortados.concat(frutas, personas, utiles, productos)

console.log(arrayMezclado)

// slice()
// MÉTODO QUE PERMITE COPIAR UN ARRAY O UNA PARTE DE UN ARRAY

const otrasFrutas = frutas.slice()

console.log(otrasFrutas)

// TAMBIÉN PODEMOS COPIAR PARTES ESPECÍFICAS DEL ARRAY
// el primer argumento es el índice de donde se inicia a cortar
// el segundo es el final del corte, SIN INCLUIR EL VALOR DEL ÍNDICE

const frutasTropicales = frutas.slice(2, 4)

console.log(frutasTropicales)

// indexOf()
// nos devuelve el índice de un elemento
// si el valor del argumento no coincide en la búsqueda, devuelve -1
// si coincide devuelve el índice

console.log(frutas.indexOf("Melon"))

console.log(frutas.indexOf("melon"))

console.log(frutas.indexOf("melón"))

// includes()
// devuelve un booleano
// devuelve true si existe el valor en la cadena
// devuevle false si no existe

// EJEMPLO DE FUNCIÓN CUSTOM PARA HACER LO MISMO QUE INCLUDES

const validarSiExiste = ( valor, array ) => {
    
    for ( let i = 0; i < array.length; i++ ) {
        if (array[i] === valor ) {
            return true           
        } 
    }

    return false   
}

console.log(validarSiExiste("Melón", frutas))

// obtener boolean a través de la búsqueda con includes

console.log(frutas.includes("melón"))

// reverse()
// afecta al array original
// INVIERTE EL ORDEN DE LOS ELEMENSTOS DEL ARRAY
// "LOS ÚLTIMOS SERÁN LOS PRIMEROS"

frutas.reverse()

console.log(frutas)

// for ... of

for ( const fruta of frutas ) {
    console.log(`La fruta es: ${fruta}`)
}