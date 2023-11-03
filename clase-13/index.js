
// descomponer cierta data
// extraer cierta información de un objeto o array y guardarla en una variable


// destructuring de objetos

const persona = {
    nombre: "Guido",
    apellido: "Bendersky",
    edad: 18,
    gustoDeHelado: "Dulce de leche granizado"
}

const { gustoDeHelado } = persona

console.log(gustoDeHelado)

// alias

const { gustoDeHelado : gustoHeladoGuido } = persona

console.log(gustoHeladoGuido)

// destructuring arrays
// tengo que tener en cuenta la posición

const frutas = [ "anana", "naranja", "uvas", "melón" ]

const [ primero, segundo, tercero ] = frutas


console.log(primero, segundo, tercero)

// si quiero obtener un valor que se encuentra en un índice alejado de cero

const [ , , , frutaFavorita ] = frutas

console.log(frutaFavorita)

// DESTRUCTURING EN PARÁMETROS objetos
// puedo desestructurar en los parámetros para poder obtener los valores

const infoPersona = ({ nombre, apellido, gustoDeHelado }) => {
    console.log(`El gusto favorito de ${ nombre } ${ apellido} es: ${ gustoDeHelado }`)
}

infoPersona(persona)

console.log(rickInfo)

const generarTarjeta = ({ name, image, gender, status, species }) => {
    return `
        <div>
            <h3>
                Name: ${ name }
            </h3>
            <h4>
                Status: ${ status }
            </h4>           
        </div>
    `
}

document.write(generarTarjeta(rickInfo))

// DESTRUCTURING DE PARÁMETROS CON ARRAYS

const numeros = [ 34, 65, 73, 100 ]

const visualizarResultados = ([ otro , primero, , ultimo ]) => {    
    return primero + ultimo
}

console.log(visualizarResultados(numeros))

// SPREAD OPERATOR
// provee versatilidad ante diversos escenarios
//sintaxis: ...
// tiene un iterador interno

// EJEMPLO DE SU DESCOMPOSICIÓN
// PERMITE QUE UN Math.min tenga acceso a cada un ode los varlores de un array

console.log(Math.min(...numeros))

// basicamente descomponete y provee cada elemento que forma parte del array

Math.min(34, 65, 73, 100)

// PODEMOS COPIAR ARRAYS

const utiles = [ "lapiz", "cartuchera", "corrector", "regla", "crayón" ]

// esta copia no genera un nuevo array y toda modificación realizada sobre sí, afecta al array original PORQUE SON LO MISMO

const copiaInsegura = utiles

console.log(utiles === copiaInsegura)

// CON SPREAD OPERATOR COPIAMOSY GENERAMOS UN NUEVO ARRAY QUE SI SE MODIFICA NO AFECTA AL ORIGINAL

const misUtiles = [...utiles]

console.log(misUtiles === utiles)

// PERMITE CONCATENAR ARRAYS

const concatenarArrays = [ ...frutas, ...numeros ]

console.log(concatenarArrays)

// PERMITE COPIAR objetos

const copiaPersona = { ...persona }

console.log(copiaPersona)

// puedo integrar un objeto con spreadoperator a un nuevo objeto

const datosAdicionalesPersona = {
    domicilio:  "calle falsa 123",
    partido: "Caseros",
    ...persona,
    pais: "Argentina"
}

console.log(datosAdicionalesPersona)

// puede dividir caracteres de un dato string y generar un array a partir de ellos

const palabra = "otorrinolaringólogo"

const palabraAArray = [...palabra]

console.log(palabraAArray)


// convertir un array en un objeto

const frutasObjeto = {
    ...frutas
}

console.log(frutasObjeto)

// REST PARAMETERS
// ...
// enviar una cantidad variable de parámetros a una función, QUE SE ENCAPSULAN O REPRESENTAN EN FORMA DE ARRAY
// podemos implementarlo para evitar tener errores en las invocaciones de funciones

const multiplicar = ( factor, ...numeros ) => {    

    return numeros.map( element => element * factor)

}

console.log(multiplicar( 5, 4, 435435, 66767, 23123))