// una librería es un código prediseñado por otros desarrolladores que puede ser implementado en cualquier proyecto, facilitando una funcionalidad

// SWEET ALERT
// ES UNA LIBRERÍA QUE PROVEE ALERTAS O MODALES
// este es el objeto que representa todo el código o el acceso a la funcionalidad

// console.log(Swal)

// Swal.fire()

// si le paso un solo argumento, tipo string, se generará la alerta

// Swal.fire("Esto es un mensaje de prueba")

// si le paso dos cadenas de caracteres, puedo tener un título y subtítulo

// Swal.fire("Esto es un título", "esto es un subtítulo")

// si le paso tres argumentos, el tercero representa un ícono
// warning, error, success, info y question

// Swal.fire("¡Cuidado!", "Ningún operador le pedirá sus datos personales", "warning")

// si queremos generar un mensaje especializado, le pasamos como argumento un objeto

// Swal.fire({
//     title: "Bienvenido",
//     text: "A esta web",
//     icon: "success",
//     footer: "Este es el pie del popup"
// })

// la funcionalidad estrella de sweet alert son las promesas, en donde dependiendo de la respuesta obtenida, se dará una nueva acción persoanlizada

// Swal.fire({
//     title: "Do you want to save the changes?",
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Save",
//     denyButtonText: `Don't save`
// }) .then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//         Swal.fire("Saved!", "", "success");
//     } else if (result.isDenied) {
//         Swal.fire("Changes are not saved", "", "info");
//     }
// });

//EJEMPLO DE IMPLEMENTACIÓN DE SWEET ALERT

const formMensajes = document.querySelector("#form-mensajes")
const inputNombre = document.querySelector("#input-nombre")
const inputMensaje = document.querySelector("#input-mensaje")

formMensajes.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputNombre.value.length > 0 && inputMensaje.value.length > 0 ) {
        
        Swal.fire({
            title: "Su formulario ha sido enviado",
            icon: "success"
        })
        event.target.reset()
    } else {
        Swal.fire({
            title: "No puede enviar el formulario si sus campos están vacíos.",
            icon: "error"
        })
    }
}

// TOASTIFY
// librería que me facilita incorporar notificaciones que pueden ser fáiclmente customizables

Toastify({
    text: "Su producto se ha añadido al carrito",
    duration: 2000,
    close: true,
    style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
        width: '250px',
        height: '60px',
        fontSize: '1.3rem',        
    },
    position: "left",
    gravity: "bottom"
}).showToast()

// SWIPER JS
// LIBRERÍA QUE PERMITE IMPLEMENTAR CARROUSELES

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// LUXON
// librería uqe me permite manipular fechas


const DateTime = luxon.DateTime;
// esta variable representa el acceso a la librería

console.log(DateTime)

// instanciar una fecha

const fechaDeHoy = DateTime.local()

console.log(fechaDeHoy)

// visualizar fecha local

console.log(fechaDeHoy.toString())

console.log(fechaDeHoy.toLocaleString())

// .now()
// muestra la hora actual

console.log(DateTime.now())

// podemos pasar fechas actuales o específicas

const fechaEspecifica = DateTime.local(1997, 11, 7)

console.log(fechaEspecifica)

// podemos crear fechas a través de objetos

const fechaDesdeObjeto = DateTime.fromObject(
    {
        day: 20,
        hour: 14,
        month: 7
    },
    {
        zona: "America/Buenos_Aires",
        numberingSystem: "beng"

    }
)

console.log(fechaDesdeObjeto)

console.log(fechaDesdeObjeto.toLocaleString())

// norma ISO

console.log(DateTime.fromISO("1230-09-29").toString())

// podemos obtener datos particulares sobre las fechas

console.log(fechaDesdeObjeto.year) // extraemos el año
console.log(fechaDesdeObjeto.month) // mes
console.log(fechaEspecifica.day) // día
console.log(fechaDeHoy.second) // segundo
console.log(fechaDeHoy.weekday) // día de la semana
console.log(fechaDesdeObjeto.zoneName) // nombre de la zona
console.log(fechaDesdeObjeto.daysInMonth)

// PODEMOS VISUALIZAR DIVERSOS FORMATOS DE FECHA

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_SHORT)) // fecha corta

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_MED)) // fecha abreviada

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)) // fecha y día abreviado

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_FULL)) // fecha completa

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_HUGE)) // FECHA COMPLETA CON DÍA DE LA SEMANA

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_SIMPLE)) // fecha corta

