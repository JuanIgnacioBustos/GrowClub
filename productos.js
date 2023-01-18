const stock = document.getElementById("stock");
const stockProductos = "../json/productos.json";

fetch(stockProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            stock.innerHTML += `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class= "card-body">
                    <h5>${producto.nombre}</h5>
                    <p> ${producto.precio} </p>
                <button class="btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
            </div>
            </div>
            `
        })
    })
    .catch(error => console.log(error))
    .finally( () => console.log("Proceso Finalizado"))