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
}

function buscarProductoPorId(id) {
  const productoEncontrado = productos.find((producto) => producto.id === id);
  return productoEncontrado;
}

let botonCarrito = document.getElementById("carrito");

botonCarrito.addEventListener("click", verCarrito);

function verCarrito() {
  let mensaje = "Productos seleccionados:\n";
  let total = 0;
  carritoDeCompras.forEach(function (producto) {
    mensaje +=
      producto.cantidad +
      " un. " +
      producto.nombre +
      " = $" +
      producto.cantidad * producto.precio +
      "\n";
    total += producto.cantidad * producto.precio;
  });

  mensaje += "\n" + "Total: $" + total;

  alert(mensaje);
}
