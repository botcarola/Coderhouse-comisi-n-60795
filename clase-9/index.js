// document es el objeto global que representa al DOM
// permite el acceso a sus nodos hijos y a sus métodos

console.log(document)

// getElementById()
// a través del document, usamos notación de punto para acceder a este métodio
// permite obtener un nodo o elemento por su id
// si un id no existe, retorna null
console.log(document.getElementById("footer"))

// si el id existe, retorna el objeto que contiene la información de ese nodo
// SIEMPRE RETORNA LA PRIMERA COINCIDENCIA, es como un find
// por eso es importante no repetir IDS, son únicos
// trae un solo elemento

console.log(document.getElementById("lista-desordenada"))

// getElementsByClassName()
// obtiene A TODOS LOS NODOS que compartan la misma clase
// genera una lista de nodos, se llama HTMLCOLLECTION
// si no hay coincidencias, la collection es vacía
// esta lista tiene índice y length, PERO NO ES UN ARRAY
// se puede acceder a sus hijos con corchetes, pero no es un array
// NO PUEDE SER RECORRIDA CON UN MÉTODO DE ARRAY

const parrafos = document.getElementsByClassName("parrafo")

console.log(document.getElementsByClassName("parrafo"))

for ( let i = 0; i < parrafos.length; i++ ) {
    console.log(parrafos[i])
    parrafos[i].textContent = "cambié todo"
}

// getElementsByTagName()
// obtiene A TODOS LOS NODOS que compartan la misma clase
// genera una lista de nodos, se llama HTMLCOLLECTION
// si no hay coincidencias, la collection es vacía
// esta lista tiene índice y length, PERO NO ES UN ARRAY
// se puede acceder a sus hijos con corchetes, pero no es un array
// NO PUEDE SER RECORRIDA CON UN MÉTODO DE ARRAY

const nodosPorEtiqueta = document.getElementsByTagName("li")

// si intentamos recorrer un htmlcollection con un método de array, da error

// nodosPorEtiqueta.forEach((element) => console.log(element))

// MODIFICAR EL CONTENIDO DE UN NODO

const tituloPrincipal = document.getElementById("titulo-principal")

// innerText, permite acceder al contenido de texto de una etiqueta

console.log(tituloPrincipal.innerText)

// podemos reasignar a través del operador de asignación

tituloPrincipal.innerText = "ALMACEN DE PRODUCTOS DE LIMPIEZA"
tituloPrincipal.innerText = "CHAT"

// textContent permite visualizar el contenido

console.log(tituloPrincipal.textContent)

// podemos reasignar a través del operador de asignación

tituloPrincipal.textContent = "VENDO RENAULT 12"

// ejemplo de modificación de contenido de texto

let statusVenta = false

if ( statusVenta === true ) {

    tituloPrincipal.textContent = "VENDIDO"

} else {

    tituloPrincipal.textContent = "VENDO RENAULT 12"
}

// innerHTML
// permite "inyectar" o incorporar nodos creados desde js
// sintaxis
// contenedorEnDondeAñadirNodos.innerHTML = "cadena de nodos, ACÁ VA HTML HECHO EN JS"

console.log(pokemon)

const cardsPokemon = pokemon.reduce(( acc, element ) => {
    return acc + `
        <div class="card">
            <h3>
                ${ element.name}
            </h3>
            <div class="container-img">
            <img src=${element.img} alt="${element.name}">
            </div>
        </div>
    `
}, "")

console.log(cardsPokemon)

// LLAMO AL CONTENEDOR EN DONDE VOY A INCORPORAR LAS CARTAS

const container = document.getElementById("container")

// ligo al contenedor el innerHTML

container.innerHTML = cardsPokemon

// clasname
// puedo añadir una clase a un nodo

container.className = "contenedor-cartas"

// .createElement
// nos permite crear etiquetas, solamente eso

const footer = document.createElement("footer")

console.log(footer)

footer.className = "footer"
footer.innerText = "2023 | Esta web no tiene relación alguna con Pokemon"

// append()
// método que me permite añadir texto o nodos

document.body.append(footer)

// eliminamos la lista desordenada

const listaDesordenada = document.getElementById("lista-desordenada")

listaDesordenada.remove()

