const personajesRickAndMorty = "https://rickandmortyapi.com/api/character";

// fetch (MÉTODO DE PETICIONES HTTP QUE ES UNA PROMESA)
// nos permite hacer peticiones de todo tipo hacia un servidor (GET, POST, PATCH, PUT, DETELE)
// este método es asincrónico
// fetch(URL, {})
// el primer argumento hace referencia a la URL que utilizaremos en la petición


// PETICIONES GET
// PETICIÓN HTTP QUE PIDE INFORMACIÓN, vamos a pedirle al servidor que nos provea de información específica
// esta información dependerá de la URL y de su endpoint o query params
// como solo pedimos información, no precisamos pasar el segundo argumento al método fetch

// fetch(personajesRickAndMorty)
// .then(( respuesta ) => respuesta.json())
// .then(( data ) => console.log(data))

// CONSUMO ARCHIVO JSON LOCAL
// SOLO LO PUEDO HACER SI USO LIVERSERVER

// fetch("data.json")
// .then( response => response.json())
// .then( data => {
//     data.forEach(element => {
//         console.log(element)        
//     });
// })
// .catch( error => console.log(error))

// GENERAMOS NODOS QUE INYECTAMOS EN EL DOM

// fetch(personajesRickAndMorty)
// .then( respuesta => respuesta.json())
// .then( data => {
//     console.log(data)
//     
// })

// función que genera nodos

const nodosHtml = (array) => {
    const nodos = array.reduce((acc, elemento) => {
        return acc + `
                    <div class="card">
                        <div class="container-img">
                            <img src=${elemento.image} alt=${elemento.name}>
                        </div>
                        <h3>
                            ${elemento.name}
                        </h3>
                    </div>
                `
    }, "")

    document.querySelector(".container").innerHTML = nodos
}


// PETICIÓN GENERADA DESDE UN EVENTO DE ENVÍO DE FORMULARIO

const peticion = (nombreDelPersonaje) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nombreDelPersonaje}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            nodosHtml(data.results)            
        })
        .catch(() => {
            alert("No hay información sobre ese personaje.")
        })
}

const inputNombre = document.querySelector("#input-nombre")

// DESDE EL EVENTO INVOCO UNA FUNCIÓN QUE HACE UNA PETICIÓN ASINCRÓNICA

document.querySelector("form").onsubmit = (event) => {
    event.preventDefault()

    if (inputNombre.value.length > 0) {
        peticion(inputNombre.value)
        event.target.reset()
    } else {
        alert("No se puede realizar la petición sin un nombre.")
    }
}

// MÉTODO POST
// MÉTODO HTTP QUE ME PERMITE DAR DE ALTA UN USUARIO, ENVIAR INFORMACIÓN A UNA BASE DE DATOS
// A TRAVÉS DE UN REQUEST/ solicitu
// SE HACE A TRAVÉS DEL MÉTODO FETCH, QEU ES ASINCRÓNICO
// INCORPORA UN BODY, YA QUE ENVÍA INFORMACIÓN


// fetch("https://6554040e63cafc694fe615f4.mockapi.io/estudiantes/students", {
//     method: "POST",
//     body: JSON.stringify({
//         "name": "Mariano Diaz",
//         "student": true,
//         "id": "100",       
//     }),
//     headers: {
//         "Content-Type":"application/json"
//     }
// })
// .then( response => response.json())
// .then( data => console.log(data))
// .catch( error => console.log(error))

// PUT
// MÉTODO HTTP QUE ME PERMITE MODIFICAR UN DATO DE ALGO QUE YA EXISTE EN UNA BASE DE DATOS
// SE HACE A TRAVÉS DE UNA REQUEST/ solicitud
// SE HACE A TRAVÉS DEL MÉTODO FETCH, QUE ES ASINCRÓNICO
// INCORPORA UN BODY, YA QUE ENVÍA INFORMACIÓN

fetch("https://6554040e63cafc694fe615f4.mockapi.io/estudiantes/students/40", {
    method: "PUT",
    body: JSON.stringify({
        "name": "Victoria Santucho",
        "student": true,
    }),
    headers: {
        "Content-Type":"application/json"
    }
})
.then( response => response.json())
.then( data => console.log(data))

// DELETE
// MÉTODO HTTP QUE ME PERMITE BORRAR UN DATO QUE YA EXISTE
// SE HACE A TRAVÉS DE UNA REQUEST/ solicitud
// SE HACE A TRAVÉS DEL MÉTODO FETCH, QUE ES ASINCRÓNICO

fetch("https://6554040e63cafc694fe615f4.mockapi.io/estudiantes/students/41", {
    method: "DELETE"
})
.then( res => res.json())
.then( data => console.log(data))