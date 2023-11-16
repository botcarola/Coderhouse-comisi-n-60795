const containerCards = document.querySelector(".container")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let productos;

const subirAlLS = ( clave, data ) => localStorage.setItem( clave, JSON.stringify(data))
const obtenerDelLs = clave => JSON.parse(localStorage.getItem(clave))
const aniadirAlCarrito = ( data ) => carrito.push(data)
const obtenerProducto = (clase, data) => {
    const obtenerId = clase.slice(4)
    return data.find( element => element.id === Number(obtenerId))
}

const nodosProductos = (data, container) => {
    const nodos = data.reduce((acc, element) => {
        return acc + `
            <article class="card">
                <figure class="container-img">
                    <img src=${element.image} alt="Imagen de ${element.category}">
                </figure>
                <h3>
                    ${element.title}
                </h3>
                <h4>
                    $ ${element.price}
                </h4>
                <button class="addcart" id="add-${element.id}">
                    <i class="addcart fa-solid fa-cart-plus" id="add-${element.id}"></i>
                </button>
            </article>
        `
    }, "")

    container.innerHTML = nodos
}

const llamadoApi = (url, generarNodos, container) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        generarNodos(data, container)    
        productos = data    
    })
}

llamadoApi("https://fakestoreapi.com/products", nodosProductos, containerCards)

document.body.onclick = ( event ) => {   
    if (event.target.classList.contains("addcart")) {    
        aniadirAlCarrito(obtenerProducto(event.target.id, productos))    
        subirAlLS("carrito", carrito)
        Toastify({
            text: `El producto ${obtenerProducto(event.target.id, productos).title} ha sido añadido al carrito.`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();       
    }
}

console.log(productos)


// filtrar por búsqueda 
const inputBusqueda = document.querySelector("#input-busqueda")

document.querySelector("#form-busqueda").onsubmit = event => {
    event.preventDefault()
    const filteredProducts = productos.filter(producto =>
        producto.category.toLowerCase().includes(inputBusqueda.value.toLowerCase())
      );
    nodosProductos(filteredProducts, containerCards)
}
