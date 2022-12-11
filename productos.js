
class Productos {
    constructor(id, nombre, medidas, categoria, precio, marca) {
        this.id = id;
        this.nombre = nombre;
        this.medidas = medidas;
        this.categoria = categoria;
        this.precio = precio;
        this.marca = marca;
    }
}

const maceta = new Productos(01, "Maceta", "10litros", "accesorios", 1500, "mad rocket")
const kitHerramientas = new Productos(02, "Kit de Herramientas", "100x50cm", "accesorios", 3200, "tramontina")
const carpaIndoor = new Productos(03, "Carpa Indoor", "250x120cm", "accesorios", 38000, "cultivarg")
const coolerLed = new Productos(04, "Cooler Agroled", "170x100cm", "accesorios", 7999, "agroled")
const turbinaExtractor = new Productos(05, "Turbina Extractor", "50x30cm", "accesorios", 17999, "agroled")
const fertilizanteFlora = new Productos(06, "Fertilizante de Floracion", "30x30cm", "aditivos", 1300, "topcroat")
const fertilizanteVege = new Productos(07, "Fertilizante de Vegetacion", "30x25cm", "aditivos", 999, "topcroat")
const jabonPotasico = new Productos(08, "Jabon Potasico", "20x20cm", "aditivos", 500, "topcroat")
const aceiteNeem = new Productos(09, "Aceite de Neem", "15x15cm", "aditivos", 7999, "agroled")
const sustratoPremium = new Productos(10, "Sustrato Premium", "400x200cm", "sustratos", 2200, "juanijuana")
const tierraFertil = new Productos(11, "Tierra Fertil", "400x200cm", "sustratos", 1499, "juanijuana")
const panelLed = new Productos(12, "Panel led 400w", "70x50cm", "iluminacion", 24999, "agroled")
const picadorGrinder = new Productos(13, "Picador Grinder", "30x30cm", "parafernalia", 1650, "lion")
const bandeja = new Productos(14, "Bandeja Raw", "70x50cm", "parafernalia", 4299, "raw")
const sedas = new Productos(15, "Paquete de sedas de celulosa", "20x20cm", "parafernalia", 399, "ocb")


const arrayProductos = [];

arrayProductos.push(maceta);
arrayProductos.push(kitHerramientas);
arrayProductos.push(carpaIndoor);
arrayProductos.push(coolerLed);
arrayProductos.push(turbinaExtractor);
arrayProductos.push(fertilizanteFlora);
arrayProductos.push(fertilizanteVege);
arrayProductos.push(jabonPotasico);
arrayProductos.push(aceiteNeem);
arrayProductos.push(sustratoPremium);
arrayProductos.push(tierraFertil);
arrayProductos.push(panelLed);
arrayProductos.push(picadorGrinder);
arrayProductos.push(bandeja);
arrayProductos.push(sedas);

console.log(arrayProductos);

/* //Función con el menú de opciones: */

function menu() {
    alert("Bienvenido a Grow Club");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Consulta de producto \n 2) Alta de producto \n 3) Baja de producto \n 4) Modificar un producto \n 5) Salir"));
    return opcion;
}

/* //Función para consultar un producto: */

function consultaProductos() {
    let nombre = parseInt(prompt("Ingrese el nombre del producto: "));
    let productos = arrayProductos.find(productos => productos.nombre === nombre);
    console.log(productos);
}

/* Funcion para dar de alta un producto */

function altaProductos() {
    let id = prompt("Ingrese el id del producto: ");
    let nombre = prompt("Ingrese el nombre del producto: ");
    let medidas = prompt("Ingrese medidas del producto: ");
    let categoria = parseInt(prompt("Ingrese la categoria del producto: "));
    let precio = parseInt(prompt("Ingrese el precio del producto: "));
    let marca = prompt("Ingrese la marca del producto: ");
    let productos = new Productos(id, nombre, medidas, categoria, precio, marca);
    arrayProductos.push(productos);
    console.log(arrayProductos);
}

/* Funcion para dar de baja un producto */
function bajaProductos() {
    let nombre = parseInt(prompt("Ingrese el nombre del Producto: "));
    let productos = arrayProductos.find(productos => productos.nombre === nombre);
    let indice = arrayProductos.indexOf(productos);
    arrayClientes.splice(indice, 1);
    console.log(arrayProductos);
}

/* Funcion para modificar un producto */

function modificacionProductos() {
    let id = parseInt(prompt("Ingrese el id del producto: "));
    let productos = arrayProductos.find(productos => productos.id === id);
    let indice = arrayProductos.indexOf(productos);
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = prompt("Ingrese el precio del producto: ");
    let marca = parseInt(prompt("Ingrese la marca del producto: "));
    let productosModificado = new Productos(nombre, precio, marca);
    arrayProductos.splice(indice, 1, productosModificado);
    console.log(arrayProductos);
}


/* Ejecucion */

let opcion = menu();
switch (opcion) {
    case 1:
        consultaProductos();
        break
    case 2:
        altaProductos();
        break;
    case 3:
        bajaProductos();
        break;
    case 4:
        modificacionProductos();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opción incorrecta");
        break;
}
