let productos = [
  {
    id: 1,
    nombre: "Alfajor Jorgito Negro",
    categoria: "golosinas",
    stock: 30,
    precio: 180,
    rutaImagen: "jorgitonegro.jpg",
  },
  {
    id: 2,
    nombre: "Alfajor Jorgito Blanco",
    categoria: "golosinas",
    stock: 30,
    precio: 180,
    rutaImagen: "jorgitoblanco.jpg",
  },
  {
    id: 3,
    nombre: "Tutucas",
    categoria: "snack",
    stock: 25,
    precio: 200,
    rutaImagen: "tutucas.jpg",
  },
  {
    id: 4,
    nombre: "Pico Dulce",
    categoria: "golosinas",
    stock: 50,
    precio: 150,
    rutaImagen: "picodulce.jpg",
  },
  {
    id: 5,
    nombre: "Papas Fritas",
    categoria: "snack",
    stock: 25,
    precio: 350,
    rutaImagen: "papasfritas.jpg",
  },
  {
    id: 6,
    nombre: "Palitos Salados",
    categoria: "snack",
    stock: 25,
    precio: 250,
    rutaImagen: "palitossalados.jpg",
  },
  {
    id: 7,
    nombre: "Agua Mineral",
    categoria: "bebidas",
    stock: 30,
    precio: 300,
    rutaImagen: "aguamineral.jpg",
  },
  {
    id: 8,
    nombre: "Jugo Baggio Multifruta",
    categoria: "bebidas",
    stock: 50,
    precio: 200,
    rutaImagen: "baggiomultifruta.jpg",
  },
  {
    id: 9,
    nombre: "Jugo Baggio Naranja",
    categoria: "bebidas",
    stock: 50,
    precio: 200,
    rutaImagen: "baggionaranja.jpg",
  },
];

let carritoDeCompras = [];
let carritoRecuperado = localStorage.getItem("carrito");

if (carritoRecuperado) {
  carritoDeCompras = JSON.parse(carritoRecuperado);
  document.getElementById("idCantidadProductos").innerHTML =
    carritoDeCompras.length;
}

let contenedor = document.getElementById("contenedorProductos");

productos.forEach((producto) => {
  let tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>    
    <img src="./imagenes/${producto.rutaImagen}">
    <p><strong>$${producto.precio}</strong></p>
    <button class="btn btn-orange" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
  contenedor.appendChild(tarjeta);
});

function agregarAlCarrito(idProducto) {
  const productoEncontrado = buscarProductoPorId(idProducto);

  const productoExistente = carritoDeCompras.find(
    (item) => item.id === productoEncontrado.id
  );

  if (productoExistente) {
    productoExistente.cantidad += 1;
    alert(
      `Se agregó otro "${productoEncontrado.nombre}" al carrito. Total: ${productoExistente.cantidad}`
    );
  } else {
    productoEncontrado.cantidad = 1;
    carritoDeCompras.push(productoEncontrado);
    alert(`Producto "${productoEncontrado.nombre}" agregado al carrito.`);
  }

  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

  document.getElementById("idCantidadProductos").innerHTML =
    carritoDeCompras.length;
}

function buscarProductoPorId(id) {
  const productoEncontrado = productos.find((producto) => producto.id === id);
  return productoEncontrado;
}

let botonCarrito = document.getElementById("carrito");

botonCarrito.addEventListener("click", verCarrito);

function verCarrito() {
  if (carritoDeCompras.length > 0) {
    let mensaje = "";
    let total = 0;
    carritoDeCompras.forEach(function (producto) {
      mensaje +=
        "<li>" +
        producto.cantidad +
        " un. " +
        producto.nombre +
        " = $" +
        producto.cantidad * producto.precio +
        "</li>";
      total += producto.cantidad * producto.precio;
    });

    mensaje += "<br /><strong>" + "Total: $" + total + "</strong>";

    document.getElementById("miCarrito").style.display = "block";

    const listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = mensaje; // Limpia la lista antes de mostrar los productos
  } else {
    alert("Agregar productos al carrito");
  }
}

function cerrarCarrito() {
  document.getElementById("miCarrito").style.display = "none";
}

function limpiarCarrito() {
  document.getElementById("miCarrito").style.display = "none";

  carritoDeCompras = [];
  localStorage.removeItem("carrito");
  document.getElementById("idCantidadProductos").innerHTML = "";
}

function finalizarCompra() {
  document.getElementById("miCarrito").style.display = "none";

  let total = 0;
  carritoDeCompras.forEach(function (producto) {
    debugger;
    total += producto.cantidad * producto.precio;
  });

  carritoDeCompras = [];
  localStorage.removeItem("carrito");
  document.getElementById("idCantidadProductos").innerHTML = "";
  debugger;

  alert("Fin de la compra. Valor: $" + total + ". Gracias por su compra.");
}
