// el objeto storage me permite a través de la prlabra reservada el localStorage

console.log(localStorage)

// nos permite alojar localmente información del usuario RELATIVA A UN DOMINIO
// eso quiere decir que cada sitio web, que tenga su dominio, va a tener su propio storage
// esta información perdura en el tiempo en relación al dominio
// para poder incorporar algo en el almacenamiento local, precisamos utilizar la notación de punto y acceder al setItem

// recibe dos argumentos
// el primero es el nombre del elemento al que vamos a alojar, entendido como clave
// ejemplo "inicioSesion", se pasa como string

// SINTAXIS
// localStorage.setItem(CLAVE, VALOR)

localStorage.setItem("modoOscuro", "si")

// puedo pasarle una variable a la clave

const edadUsuarioClave = "edadUsuario"

localStorage.setItem(edadUsuarioClave, 30)

// CAMBIAR UN VALOR, REASIGNARLO

localStorage.setItem(edadUsuarioClave, 31)

// PARA OBTENER ESOS DATOS ALOJADOS, UTILIZAMOS getItem
// se pasa un argumento
// este es un string con el nombre de la clave o key del elemento guardado

// seteamos un modo oscuro

const verificarModoOscuro = localStorage.getItem("modoOscuro")

console.log(verificarModoOscuro)

function validarModoOscuro ( modo  ) {

    if ( modo === "si" ) {
        console.log("MODO OSCURO")
    } else if ( modo === "no" ) {
        console.log("MODO CLARO")
    }
}

// ejecutamos la función para validar el modo oscuro

validarModoOscuro(verificarModoOscuro)

// 

document.querySelector("#modo-claro").onclick = () => {
    // modificamos valor de modo oscuro  
    localStorage.setItem("modoOscuro", "no")
    const obtenerValorDeSesion = localStorage.getItem("modoOscuro")  
    // volvemos a ejecutar la función para que se cambie el modo
    validarModoOscuro(obtenerValorDeSesion)
}

// sessionStorage
// almacena temporalmente un valor relativo al dominio del sitio
// este valor se borra cuando dejamos de estar en esa pestaña
// si cerramos la pestaña, se borra
// estos valores no perduran en el tiempo y pueden sobreescribirse en el caso de uqe sea necesario

sessionStorage.setItem("inicioSesion", "si")

// para obtener el dato en sessionStorage utilizamos getItem
// se pasa un argumento: la clave o key de lo que querramos obtener

const validarEstadoSesion = sessionStorage.getItem("inicioSesion")

// BORRAR EN LOCALSTORAGE UNA CLAVE

localStorage.removeItem("edadUsuario")

// BORRAR TODA LA COLECCIÓN PODEMOS USAR CLEAR

// localStorage.clear()

// BORRAR EN SESSIONSTORAGE

sessionStorage.setItem("J2sjI2HDJS", "KLASDJD01232KL3JAS{ÑDKÑSLADSAPDKSAPOD2109EASLKJDKASLDJ1209ESKLADJSKLADJSALIDJ2109EUI")

sessionStorage.removeItem("J2sjI2HDJS")

// BORRAR TODA LA COLECCIÓN PODEMOS USAR CLEAR

sessionStorage.clear()

// JSON
// tipo de dato de texto
// este tipo de dato es ajeno a javascript
// cualquier lenguaje puede tener acceso a json
// a través de diversos métodos podemos transformar a nuestros datos en datos tipo JSON
// esto facilita la transmisión de datos, enel modelo clietne -servidor
// también permite preservar el tipo, bajo un formato de texto

const productos = [
    {
        nombre: "arroz",
        precio: 500
    },
    {
        nombre: "sal",
        precio: 200
    }
]

// al seter un tip ode dato objeto, este pierde su formato y se rompe

localStorage.setItem("carrito", productos)

// al intenar obtenerno, este está malogrado, eso significa que no puedo operar sobre este, se genera un [OBJECT OBJECT]

console.log(localStorage.getItem("carrito"))

// EJEMPLO APARTE

// AL INTENTAR GENERAR UN NODO CON UN OBJETO, SE GENERA [OBJECT OBJECT] PORQIE SE "PARSEA" A TIPO TESTO Y ATROFIA EL DATO

// document.write(productos)

// PARA PODER SOLVENTAR ESTA PROBLEMÁTICA, JAVASCRIPT NOS PERMITE CONVERTIR LOS DATOS EN TIPO JSON

// esto genera que no se "atrofies"

// JSON.stringify --> convertir a JSON

// JSON.parse --> convertir a dato operable en JS


// 1) convertir el tipo de dato a subir al almacenamiento en JSON

const productosAJson = JSON.stringify(productos)

// si averiguamos su tipo, al hacer la conversión es de tipo string

console.log(typeof productosAJson)

localStorage.setItem("carrito", productosAJson)

// VAMOS A UTILIZAR LOS DATOS

// obtengo este valor a través de la key con getItem

const productosDelLs = localStorage.getItem("carrito")

// ESTE DATO AL N OESTAR CONVERTIDO EN UN TIPO DE DATO ARRAY DE OBJETOS, NO SE  PUEDE ITERAR
// SE BAJÓ DEL LOCALSTORAGE PERO SIGUE SIENDO UN STRING
// ESTA FUNCIÓN DA ERROR

// productosAJson.map( element => console.log(element))

const productosAObjeto = JSON.parse(productosAJson)

console.log(productosAObjeto)

productosAObjeto.forEach( element => console.log(element))

// CÓMO INTERACTUAR DESDE UN EVENTO CON EL LOCALSTORAGE

let publicaciones = []

const formPublicaciones = document.querySelector("#form-publicaciones")
const inputNombre = document.querySelector("#input-nombre")
const inputMensaje = document.querySelector("#input-mensaje")


formPublicaciones.onsubmit = ( event ) => {
    // SIEMPRE QUE TRABAJE CON UN FORMULARIO ,TENGO QUE PREVENIR EL ENVÍO, SINO MI FORM NO ANDA

    event.preventDefault()

    // validamos qeu el form no esté vacío
    
    if ( inputNombre.value.length > 0 && inputMensaje.value.length > 0 ) {
        // si no está vacío añadimos el objeto al array
        publicaciones.push({
            nombre: inputNombre.value,
            mensaje: inputMensaje.value
        })    
        localStorage.setItem("publicaciones", JSON.stringify(publicaciones))
    } else {
        // envíamos un mensaje en el caso de que sí
        alert("No puede enviar una publicación vacía")
    }

    // validamos que se añadió al array 

    console.log(publicaciones)

    // resetear los campos del form
    event.target.reset()
}