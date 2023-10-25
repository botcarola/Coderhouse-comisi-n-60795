// COMO INTERACTUAR Y OBTENER E LVALOR DE UN INPUT CON EVENTOS

const inputNombre = document.querySelector("#nombre")

// ONCLICK NO SIRVE PARA OBTENER EL VALOR

// inputNombre.onclick = ( ) => {
//     console.log("sldkasdjk")
// }

// onchange u oninput

inputNombre.onchange = ( event ) => {

    // para obtener el valor

    console.log(event.target.value)

    if ( event.target.value !== "" || event.target.value !== null ) {
        inputNombre.style.border = "10px solid green"
    }

}   

// método oninput
// captura cada una de las interacciones que se generan en el campo

// inputNombre.oninput = ( event ) => {
//     console.log(event.target.value)


// }

// metodo onblur
// cuando se saca foco de un campo de formulario

const inputEdad = document.querySelector("#edad")

// inputEdad.onblur = ( event ) => {
//     console.log(event.target.value)

// }

// evento sobre select

const selectPais = document.querySelector("#pais")

// selectPais.onchange = ( event ) => {
//     console.log(event.target.value)
// }

// PUEDO DETENER COMPORTAMIENTOS POR DEFECTO DESENCADENADOS POR NAVEGADOR

// cuando quiero hacer un envío de formulario, LLAMO AL FORMULARIO

const altaPersona = []

document.querySelector("#form-persona").onsubmit = ( event ) => {
    // si tiene defaultPrevented en true, se puede prevenir
    console.log(event)
        
    // PREVENIMOS ENVÍO
    event.preventDefault()

    // ¿Cómo enviar formulario?  

    altaPersona.push({
        nombre: inputNombre.value,
        edad: inputEdad.value,
        correoElectronico: document.querySelector("#email").value,
        pais: selectPais.value
    })

    console.log(altaPersona)

    event.target.reset()
}

// SE PUEDE PREVENIR UN EVENTO SIEMPRE Y CUANDO SE GENERE POR DEFECTO ALGÚN COMPORTAMIENTO

window.addEventListener("contextmenu", (event) => {
    event.preventDefault()
})