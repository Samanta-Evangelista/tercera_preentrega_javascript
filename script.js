let productos = [
  {
    id: 1,
    nombre: "Alfajor jorgito negro",
    categoria: "golosinas",
    stock: 30,
    precio: 180,
    rutaImagen: "jorgitonegro.jpg",
  },
  {
    id: 2,
    nombre: "Alfajor jorgito blanco",
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
    nombre: "Pico dulce",
    categoria: "golosinas",
    stock: 50,
    precio: 150,
    rutaImagen: "picodulce.jpg",
  },
  {
    id: 5,
    nombre: "Papas fritas",
    categoria: "snack",
    stock: 25,
    precio: 350,
    rutaImagen: "papasfritas.jpg",
  },
  {
    id: 6,
    nombre: "Palitos salados",
    categoria: "snack",
    stock: 25,
    precio: 250,
    rutaImagen: "palitossalados.jpg",
  },
  {
    id: 7,
    nombre: "Agua mineral",
    categoria: "bebidas",
    stock: 30,
    precio: 300,
    rutaImagen: "aguamineral.jpg",
  },
  {
    id: 8,
    nombre: "Jugo baggio multifruta",
    categoria: "bebidas",
    stock: 50,
    precio: 200,
    rutaImagen: "baggiomultifruta.jpg",
  },
  {
    id: 9,
    nombre: "Jugo baggio naranja",
    categoria: "bebidas",
    stock: 50,
    precio: 200,
    rutaImagen: "baggionaranja.jpg",
  },
];

let contenedor = document.getElementById("contenedorProductos");

productos.forEach((producto) => {
  let tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>    
    <img src="./imagenes/${producto.rutaImagen}">    
    <p>$${producto.precio}</p>
    <button class="btn btn-orange">Agregar al carrito</button>
    `;
  contenedor.appendChild(tarjeta);
});
