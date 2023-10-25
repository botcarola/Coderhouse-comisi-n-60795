// DOM
console.log(document)

// getElementById
// getElementsByTagName
// getElementsByClassName

// querySelector()
// basado en los selectores de CSS
// puedo llamar a cualquier elemento que sea un selector válido
// va a ser un elemento único
// me devuelve la primer coincidencia

// acceso por etiqueta

console.log(document.querySelector("p"))

// acceso por clase

console.log(document.querySelector(".titulo"))

// acceso por identificador

console.log(document.querySelector("#subtitulo"))

// querySelectorAll()
// NODELIST

console.log(document.querySelectorAll("li"))

// EVENTOS
// 1) primero pensamos a qué le queremos ligar un evento
// 2) llamamos al elemento
// 3) asociamos un handler (manipulador de eventos)

// addEventListener( "click", callback )
// recibe dos argumentos
// el primer argumento es un string que define el tip ode evento a escuchar
// el segundo argumento es un callback
// se sugiere pasar una función flecha

const botonAlert = document.querySelector("#enviar-alert")

botonAlert.addEventListener("click", () => {
    alert("Se ha hecho click sobre este botón, primer aviso")
} )


// handler de tipo on
// permite ligar un evento específico detallado en el nombre: on + evento
// onclick


const botonMensaje = document.querySelector("#mensaje-consola")

botonMensaje.onclick = () => {
    console.log("Se hizo click exitosamente.")
}

// AÑADIR ALGO AL CARRITO A TRAVÉS DE UN EVENTO

const productos = []

const productoElegido = {
    nombre: "Camiseta",
    precio: 20000,
    categoria: "Deporte",
    marca: "ADADAS"
}

const aniadirAlCarrito = document.querySelector("#aniadir-carrito")

aniadirAlCarrito.onclick = ( infoDelEvento ) => {
    console.log(infoDelEvento.target.id)
    productos.push(productoElegido)
    console.log(productos)
    document.querySelector(".container-mensaje").innerHTML = `
    <div class="container">
        <div>
            <span id="cerrar-notificacion">
                X
            </span>
        </div>
        <h2 class="mensaje">Tu producto ${productoElegido.nombre} ha sido añadido al carrito. <h2>
    </div>
    `
    console.log(document.querySelector("#cerrar-notificacion"))
}

// LLAMAR AL PADRE DE ESE NODO QUE AÚN NO EXISTE

document.querySelector(".container-mensaje").onclick = ( evento ) => {
    console.log(evento)

    if ( evento.target.id === "cerrar-notificacion") {

        document.querySelector(".container").style.display = "none"

    }
}