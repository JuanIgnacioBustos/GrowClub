let productossEnCarrito = localStorage.getItem("productoss-en-carrito");
productossEnCarrito = JSON.parse(productossEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoproductoss = document.querySelector("#carrito-productoss");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-productos-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarproductossCarrito() {
    if (productossEnCarrito && productossEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoproductoss.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        contenedorCarritoproductoss.innerHTML = "";
        productossEnCarrito.forEach(productos => {
            const div = document.createElement("div");
            div.classList.add("carrito-productos");
            div.innerHTML = `
                <img class="carrito-productos-imagen" src="${productos.imagen}" alt="${productos.titulo}">
                <div class="carrito-productos-titulo">
                    <small>Título</small>
                    <h3>${productos.titulo}</h3>
                </div>
                <div class="carrito-productos-cantidad">
                    <small>Cantidad</small>
                    <p>${productos.cantidad}</p>
                </div>
                <div class="carrito-productos-precio">
                    <small>Precio</small>
                    <p>$${productos.precio}</p>
                </div>
                <div class="carrito-productos-subtotal">
                    <small>Subtotal</small>
                    <p>$${productos.precio * productos.cantidad}</p>
                </div>
                <button class="carrito-productos-eliminar" id="${productos.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoproductoss.append(div);
        })

    actualizarBotonesEliminar();
    actualizarTotal();

    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoproductoss.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
}

    cargarproductossCarrito();
    function actualizarBotonesEliminar() {
        botonesEliminar = document.querySelectorAll(".carrito-productos-eliminar");
        botonesEliminar.forEach(boton => {
            boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "productos eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
        },
        onClick: function(){}
    }).showToast();
        const idBoton = e.currentTarget.id;
        const index = productossEnCarrito.findIndex(productos => productos.id === idBoton);
        productossEnCarrito.splice(index, 1);
        cargarproductossCarrito();
        localStorage.setItem("productoss-en-carrito", JSON.stringify(productossEnCarrito));
}

    botonVaciar.addEventListener("click", vaciarCarrito);
    function vaciarCarrito() {
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productossEnCarrito.reduce((acc, productos) => acc + productos.cantidad, 0)} productoss.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productossEnCarrito.length = 0;
            localStorage.setItem("productoss-en-carrito", JSON.stringify(productossEnCarrito));
            cargarproductossCarrito();
        }
    })
}

    function actualizarTotal() {
    const totalCalculado = productossEnCarrito.reduce((acc, productos) => acc + (productos.precio * productos.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

    botonComprar.addEventListener("click", comprarCarrito);
    function comprarCarrito() {
    productossEnCarrito.length = 0;
    localStorage.setItem("productoss-en-carrito", JSON.stringify(productossEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoproductoss.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}