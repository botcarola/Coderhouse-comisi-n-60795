console.log(users)
// declaramos las variables que tienen nodos en la parte superior para generar un orden

const containerTabla = document.querySelector("#entidad-usuarios")
const formEdicion = document.querySelector("#form-user")

// subimos los datos invocados al localStorage para poderlos hacer perdurar y que las modificaciones también perduren en el tiempo

localStorage.setItem("clientes", JSON.stringify(users))

// generamos la variable global que contendrá los datos de los clientes que obtenga dle LOCALSTORAGE O que existan en la base de datos, script

let clientes = JSON.parse(localStorage.getItem("clientes"))

// esta función genera nodos y a su vez los inyecta en un contenedor nodo

const tablasHtml = ( array, container ) => {

    const nodos = array.reduce(( acc, elemento ) => {
        return acc + `
            <tbody>
                <tr>
                    <td>
                        ${ elemento.first_name }
                    </td>
                    <td>
                        ${ elemento.last_name }
                    </td>
                    <td>
                        ${ elemento.gender || "---" }
                    </td>
                    <td>
                        ${ elemento.email || "---"}
                    </td>
                    <td>
                        ${ elemento.company_name }
                    </td>
                    <td>
                        ${ elemento.job_title || "---" }
                    </td>
                    <td class="buttons">
                        <button id="edit-${ elemento.id }" class="button-edit">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </td>
                    <td class="buttons">
                        <button id="delete-${ elemento.id}" class="button-delete">
                            <i class="fa-solid fa-delete-left"></i>
                        </button>
                    </td>
                </tr>
            </tbody>            
        ` 
    }, `
        
    `)

    console.log(nodos)

    // inserto nodos en container

    container.innerHTML = nodos

}
// GENERAMOS LOS NODOS AL CARGAR EL SITIO INVOCANDO A LA FUNCIÓN DE MANERA GLOBAL

tablasHtml(clientes, containerTabla)


// función que me permite llenar los campos del formulario con un value

const datosFormEdicion = ( nombre, apellido, genero, email, empresa, puesto ) => {
    document.querySelector("#nombre").value = nombre 
    document.querySelector("#apellido").value = apellido
    document.querySelector("#genero").value = genero || "---"
    document.querySelector("#email").value = email || "---"
    document.querySelector("#compania").value = empresa
    document.querySelector("#posicion").value = puesto || "---"
}

// ligamos un evento al body para identificar a los botones y generarles interactividad

document.body.onclick = ( event ) => { 

    if ( event.target.classList.contains("button-edit")) {
        // buscamos el objeto en base al id del botón, que es coincidente con el id del objeto que tiene sus datos
        const obtenerRegistro = clientes.find( element => element.id === Number(event.target.id.slice(5)))
        // invocamos a la función que asigna un value a cada campo, pasándole los datos del objeto filtrado
        // hacemos una validación sobre si el find obtiene un resultado correcto
        if ( obtenerRegistro ) {
            datosFormEdicion(obtenerRegistro?.first_name, obtenerRegistro?.last_name, obtenerRegistro?.gender, obtenerRegistro?.email, obtenerRegistro?.company_name, obtenerRegistro?.job_title)
            formEdicion.style.display = "flex"
        }
        
    } else if (event.target.id === "form-closed") {
        formEdicion.style.display = "none"
    }    

}

formEdicion.onsubmit = ( event ) => {
    event.preventDefault()
}