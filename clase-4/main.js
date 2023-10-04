// funciones
// conjunto de instrucciones
// bloques de código
// son un conjunto de instrucciones personalizadas que permite que el desarrollador pueda resolver todo tipo de necesidad de negocio

// conocemos funciones integradas en javascrit

// invocamos a las funciones llamando a su identificador y en el caso de que precisen datos, se los pasamos

// tanto alert, prompt como confirm reciben "un dato" que siempre va a ir dentro de los paréntesis

// alert("Bienvenido al sitio")
// prompt()
// confirm()

// FUNCIONES PERSONALIZADAS
// sintaxis:
// function identificadorDeLaFuncion () { BLOQUE DE CÓDIGO}
// las funciones por declaracion se pueden llamar antes de su "creación"

function saludar () {
    // esta función genera un mensaje en consola
    // esta función no devuelve ningún dato
    console.log("Hola gente beia")
}

console.log(saludar)

// las funciones pueden no "devolver" nada
// serían funciones "void"

console.log(saludar())

// console.log(alert("sadsad"))

// para que nuestra función devuelva un dato, se tiene que utilizar lap alabra reservada return

function saludarAMariano () {
    return "Hola Mariano"
}

// invoco a la funcion
// al utilizar return, ahora la función en su invocación VALE "HOLA MARIANO"

saludarAMariano()

// si yo hago un console.log del identificador de la funcion, no voy a obtener el resultado de la ejecuciónPORQUE NUNCA SE EJECUTÓ

console.log(saludarAMariano)

// para poder generar que la función se invoque y ejecuten sos instrucciones, necesitamos ligarle los paréntesis

console.log(saludarAMariano())

// sumar
// en particular esta función SOLAMENTE DEVUELVE EL MISMO VALOR UNA Y OTRA VEZ
// los datos estáticos del return mantienen el mismo resutlado

function suma () {
    return 10 + 234234
}

const numerosSumados = suma()

console.log(numerosSumados)

const otrosNumerosSumados = suma()

console.log(suma())

// para generar un código reutilizable que permita incorporar múltiples valores que generen nuevos resutlados, podemos utilizar parámetros
// cuando escribo una función, le paso parámetros

function resta ( x, y ) {
    return x - y
}

// cuando invoco una función le paso los argumentos(que son los valores) que reemplazan a los parámetros

console.log(resta(5, 7))
console.log(resta(23123, 234234))
console.log(resta(23, 6546))

// cuando no le pasamos los datos que prometimos hacemos un "rompimiento de contrato"
// javascript rellena esos valores con indefinido

console.log(resta())
console.log(resta(78))

// función que permite evaluar que multiples personas puedan entrar o no a ver una película de terror japonesa

function validarVentaDeEntrada ( edad ) {

    if ( edad >= 18 ) {
        console.log("Puede comprar la entrada.") 
    } else if ( edad < 18 ) {
        const validarPermiso = confirm("¿Tiene permiso de los padres?")

        if ( validarPermiso ) {
            console.log("tiene permiso de los padres, puede comprar la entrada")
        }

    } else {
        console.log("No le podemos vender la entrada, no cumple con los requisitos.")
    }
}

// validarVentaDeEntrada("asdsadasd")
// validarVentaDeEntrada(29)
// validarVentaDeEntrada(15)
// validarVentaDeEntrada("kldjd0921")
// validarVentaDeEntrada(99)
// validarVentaDeEntrada(1)

// function con un bucle

function tablaDeMultiplicar ( numero ) {
    for ( let i = 1; i <= 10; i++ ) {
        console.log(`${ numero } x ${ i } = ${ numero * i }`)
    }
}

tablaDeMultiplicar(8)

// generar una funcion que me permita hacer muchas etiquetas desde javascript e insertarlas en HTML

function productosAHtml ( categoria ) {
    for ( let i = 0; i < 10; i++ ) {
        document.write(`<p class="producto"> ${categoria} </p>`)
    }
}

productosAHtml("Zapatos")
productosAHtml("Vestidos")
productosAHtml("Remeras")
productosAHtml("Memorias RAM")

// FUNCIONES POR EXPRESION O FUNCIONES ANÓNIMAS
// su nombre se lo otorga el identificador de la variable que lo contiene
// NO SON FUNCIONES DECLARATIVAS
// NO LAS PUEDO LLAMAR ANTES DE QUE EXISTA

const multiplicar = function ( a, b ) {
    return a * b
}

// cómo invoco a la función? 
// llamo al identificador y le coloco los paréntesis

console.log(multiplicar(5, 10))

// funciones flecha
// sintaxis de función simplificada 
// preciso de un identificador en donde asignarla si es uqe la quiero reutiliar
// sintaxis: () => {}

const division = () => {
    return a / b
}

// sintaxis simplificada
// tiene el return implícito

const dividirValores = ( a , b ) => a / b

console.log(dividirValores(10, 2))

// sintaxis simplificada relativa a parámetros

const saludarAAlguien = nombre => console.log(`Hola ${nombre}`)

saludarAAlguien("Sebastian")
saludarAAlguien("Emiliano")

