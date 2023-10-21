// DATA DE RICK AND MORTY

console.log(data)

// PODEMOS ACCEDER A LAS PROPIEDADES DE UN OBJETO DE DOS MANERAS

const persona = {
    nombre: "Cristian",
    "apellido": "Cabrera",
    "edad de la persona": 20
}

console.log(persona)

// caso nombre

console.log(persona.nombre)

// caso apellido

console.log(persona.apellido)

// caso edad
// la propiedad tiene un nombre que no es válido para js
// no lo interpreta como una "variable"

console.log(persona["edad de la persona"]) 

// GENERAR ELEMENTOS DESDE JS E INYECTARLOS EN EL DOM

const validarPropiedad = ( objeto ) => {
    if (  objeto.title ) {
        return objeto.title
    } else {
        return objeto.name
    }
}

// FUNCIÓN GENÉRICA QUE ACEPTA DIVERSOS TIPOS DE RESPUESTA

function nodos ( array, contenedor ) {

    for ( let i = 0; i < array.length; i++) {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3>
                ${ validarPropiedad(array[i]) }
            </h3>
            <div class="container-img">
                <img src=${ array[i].image } alt=${ validarPropiedad(array[i]) }>
            </div>        `
        contenedor.appendChild(card)
    }
}

nodos(data, document.getElementById("container-personajes"))
nodos(products, document.getElementById("container-productos"))

