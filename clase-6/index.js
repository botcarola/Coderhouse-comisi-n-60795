// UN DATO PRIMITIVO ES UN DATO QUE SE VALE POR SÍ MISMO
// PUEDEN TENER DIFERENTES TIPOS, PERO SOLAMENTE SON SU PROPIO TIPO
// SON INMUTABLES, PUEDEN VALER LO QUE VALEN O SINO NO EXISTEN

const esEstudiante = true

// LOS DATOS TIPO OBJECT, SON DATOS COMPLEJOS
// DATOS QUE TIENEN UNA SINTAXIS ESPECÍFICA
// DATOS QUE PUEDEN CONTENER A OTROS DATOS
// estos datos pueden cambiar sus datos internos

const cliente = {
    nombre: "Carlos",
    cliente: true
}    

const cliente1 = {
    nombre: "Fernando",
    cliente: true
}    

const interesados = {
    nombre: "Sabrina",
    cliente: false
}    

// arrays
// lista de datos
// se definen por []
// se pueden llamar vectores, matrices y arreglos
// los elementos del array se separan con ,

const listaEstudiantes = ["a", "b", "c", "d"]
console.log(listaEstudiantes)

// los arrrays se definen por contener x cantidad de datos

// entonces el método length me va a facilitar la cantidad

console.log(listaEstudiantes.length)

// un array puede contener infinitos elementos o mejor, no tiene límite

// también se puede generar un array con un cosntructor

const numeros = new Array(1, 2, 3 ,4)

console.log(numeros)

// el typeof de array es object, pero no por objeto literal, sino por el tipo

// el array se caracteriza por tener un índice
// este índice, siempre arranca en cero
// a través del índice y los corchetes, puedo acceder al valor del array que yo quiera

document.write(listaEstudiantes[2])

// CON UN BUCLE, PUEDO RECORRER UN ARRAY Y ACCEDER A CADA UNO DE SUS VALORES

const vocales = ["a", "e", "i", "o", "u"]

console.log(vocales)
console.log(vocales.length)

// no usamos <= al recorrer arrays, porque eso implicaría una diferencia entre la cantidad de elemento de un array y el índice de los mismos
// que el índice siempre va a ser menor por 1 unidad, ante la cantidad de elementos que componen un array

for (let i = 0; i < vocales.length; i++) {
    console.log(vocales[i])
}

// VISUALIZAR TODOS LOS NOMBRES DE LOS POKEMONES DE LA PRIMERA GENERACIÓN CON UN SIMPLE FOR

console.log(pokemon)

for ( let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].name.toUpperCase())
}

////////////////////////////////////////////////

// MÉTODOS DE ARRAYS //

// para añadir un elemento nuevo al array, puedo usar push
// push recibe un valor entre sus paréntesis
// siempre push añade al elemento nuevo en la última posición

const frutas = [ "banana", "manzana", "pomelo", "anana"]

console.log(frutas)

frutas.push("granada")

console.log(frutas)

// podemos añadir elementos al principio del array //

// unshift
// añade un nuevo elemento al inicio de la cadena
// desventaja: reposiciona el índice de todos los elementos

frutas.unshift("kiwi")

console.log(frutas)

// podemos remover el último elemento de un array con pop
// no necesita que se le pase ninguna aclaración, simplemente saca al último

frutas.pop()

// podemos remover el primer elemento de un array
// no necesita aclaración
// corre todo el índice a la izquierda

frutas.shift()

console.log(frutas)

// slice
// es un método que permite copiarme un rango de la cadena del array
// puedo copiar todo o algo
// genera una nueva instancia
// el segundo valor es no incluyente

const frutasCompradas = frutas.slice(0, 2)

// puedo decidir que empiece a cortar y que no tenga un límite

const algunasFrutas = frutas.slice(2)

console.log(frutasCompradas)
console.log(frutas)
console.log(algunasFrutas)

// quiero recortar anana

console.log(frutas.slice(3))

// SPLICE
// permite recortar una cadena
// añadir nuevos elementos
// eliminar elementos
// eliminar y añadir elementos
// AFECTA AL ARRAY ORIGINAL

const estudiantes = ["Fabricio", "Mía", "Sofía", "Lucas"]

// el primer valor hace referencia al índice en donde se quiere empezar a añadir o eliminar
// el segundo valor, la cantidad de elementos que se quieran recortar, a partir de ese valor, hacia la derecha

console.log(estudiantes)

estudiantes.splice(2, 0, "Juan")

console.log(estudiantes)

estudiantes.splice(1, 0, "Adrián")
estudiantes.splice(4, 0, "Sergio")

// el splice permite borrar un elemento y reemplazarlo por otro

const utiles = ["lapiz", "goma", "regla", "lapicera"]

console.log(utiles)

// el valor a eliminar es incluyente del índice señalado en el primer argumento

const meRobeUnaRegla = utiles.splice(2, 2)

console.log(utiles)

// el splice se queda con los elementos que se removieron del array 

console.log(meRobeUnaRegla)

// cortar array vacío

const vacio = []

console.log(vacio.splice(3,3))

// se puede borrar y añadir a la vez

utiles.push("crayones", "lapicera de brillito", "fibras", "fibrón negro")

const seTermino = utiles.splice(3, 2, "sacapuntas")

console.log(utiles)
console.log(seTermino)

// join
// transforma un array en una cadena de caracteres y permite que se elija cómo separar los elementos de la cadena

console.log(estudiantes.join(", siguiente: "))

// concat
// une dos arrays diferentes

const unirArrays = utiles.concat(estudiantes)
console.log(unirArrays)

// indexOf 
// nos devuelve el índice de un elemento del array

console.log(unirArrays.indexOf("Juan"))

// reverse

unirArrays.reverse()

console.log(unirArrays)

// HAY TRES MÉTODOS DE ARRAYS QUE AFECTAN AL ARRAY ORIGINAL Y SON: SPLICE, SORT Y REVERSE