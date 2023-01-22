

/* navbar */

const navbarindex = document.getElementById("navbarindex");

navbarindex.innerHTML = `    <div id="navbarindex">

<nav class="navbar navbar-expand-lg bg-lav">
    <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href=".index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./productos.html">Productos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./carrito.html">Carrito</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./contacto.html">Contacto</a>
            </li>
            </ul>
    </div>
    </div>
</nav>
</div>
`

/* modo oscuro */
const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")

botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
    if ( body.className === "modo-claro modo-oscuro"){
        botonModos.textContent = "Modo Claro"
    } else {
        botonModos.textContent = "Modo oscuro"
    }
}


/* carrusel */

const carouselExampleFade = document.getElementById("carouselExampleFade")

carouselExampleFade.innerHTML = `        
    <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="./multimedia/footerchill.jpg" class="d-block w-100" alt="growsoulcarrusel">
    </div>
    <div class="carousel-item">
        <img src="./multimedia/caruseluno.jpg" class="d-block w-100" alt="carruselsemillas">
    </div>
    <div class="carousel-item">
        <img src="./multimedia/caruselreparto.jpg" class="d-block w-100" alt="repartocarrusel">
    </div>
    </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">siguiente</span>
        </button> `

/* texto introduccion */

const textoIntro = document.getElementsByClassName("textoIntro")

textoIntro.innerHTML = `  
    <h1>Soul GrowShop</h1>
    <p>La tarea como tienda dedicada al cultivo no es solo vender y ofrecer una gran variedad de productos para jardinería y cultivo.</p>
    <p>Su labor va más allá.</p>
    <p>Quienes poseen este tipo de comercios o tiendas online, ayudan al cliente en sus compras, brindan asesoramiento y dan tips basados en su experiencia como adeptos al mundo del autocultivo.</p>
    <p>Esta tarea es vital, ya que los consumidores se sienten acompañados durante el proceso, logran una compra satisfactoria y seguramente se harán clientes habituales de la tienda que mejor los pueda asesorar a la hora de comenzar a cultivar o a brindarles cuidados intensivos a sus plantas.</p></strong>
    `

/* carrito */

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const combocompletoeden = new Producto(1, "Combo Completo de Cultivo Eden", 6100, "./multimedia/promouno.jfif");
const comboparafernalia = new Producto(2, "Combo Parafernalia", 2700, "./multimedia/promodos.jfif");
const combocarpa = new Producto(3, "Combo Carpa", 44000, "./multimedia/promotres.jfif");
const comboturbina = new Producto(4, "Combo Turbina Kit Indoor", 27000, "./multimedia/promocuatro.png")
const combomedidor = new Producto(5, "Combo Medidor Ph Digital", 3500, "./multimedia/promocinco.jfif")
const combofloracion = new Producto(6, "Combo Floracion", 3500, "./multimedia/promoseis.jfif")
const combopanelled = new Producto(7, "Combo Panel Led 300w", 61000, "./multimedia/promosiete.jfif")
const combomonster = new Producto(8, "Combo Monster", 8500, "./multimedia/promoocho.png")

const productos = [combocompletoeden, comboparafernalia, combocarpa, comboturbina, combomedidor, combofloracion, combopanelled, combomonster];

let carrito = []; 

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");

const presentarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class= "card-body">
                    <h5>${producto.nombre}</h5>
                    <p> ${producto.precio} </p>
                <button class="btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
            </div>
            </div>
            `
    contenedorProductos.appendChild(card);/* Para agregar productos al carrito:  */
    const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}
presentarProductos();

/* la función agregar al carrito:  */

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
        if(productoEnCarrito) {
            productoEnCarrito.cantidad++;
    }   else {
        const producto = productos.find(producto => producto.id === id);
            carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));/* local storage */
    calcularTotal();
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

/* función para mostrar carrito:  */

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
    const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
    <div class="card">
        <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
    <div class= "card-body">
        <h5>${producto.nombre}</h5>
            <p> ${producto.precio} </p>
            <p> ${producto.cantidad} </p>
        <button class="btn colorBoton" id="eliminar${producto.id}" > Eliminar Producto </button>
    </div>
    </div>
    `
    contenedorCarrito.appendChild(card);

/* paraeliminar productos del carrito:  */
const boton = document.getElementById(`eliminar${producto.id}`);
    boton.addEventListener("click", () => {
        eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

/* Función que elimina el producto del carrito:  */

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));/* ls */
}

/* vaciar carrito */

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

/* la función que elimina todo del carrito */

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();/* local storage */
}

/* mostrar mensaje de compra */

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}