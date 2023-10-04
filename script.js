let productos = [
    { id: 1, nombre: "alfajor jorgito negro", categoria: "golosinas", stock: 30, precio: 180, rutaImagen: "jorgitonegro.jpg" },
    { id: 2, nombre: "alfajor jorgito blanco", categoria: "golosinas", stock: 30, precio: 180, rutaImagen: "jorgitoblanco.jpg" },
    { id: 3, nombre: "tutucas", categoria: "snack", stock: 25, precio: 200, rutaImagen: "tutucas.jpg" },
    { id: 4, nombre: "pico dulce", categoria: "golosinas", stock: 50, precio: 150, rutaImagen: "picodulce.jpg" },
    { id: 5, nombre: "papas fritas", categoria: "snack", stock: 25, precio: 350, rutaImagen: "papasfritas.jpg" },
    { id: 6, nombre: "palitos salados", categoria: "snack", stock: 25, precio: 250, rutaImagen: "palitossalados.jpg" },
    { id: 7, nombre: "agua mineral", categoria: "bebidas", stock: 30, precio: 300, rutaImagen: "aguamineral.jpg" },
    { id: 8, nombre: "jugo baggio multifruta", categoria: "bebidas", stock: 50, precio: 200, rutaImagen: "baggiomultifruta.jpg" },
    { id: 9, nombre: "jugo baggio naranja", categoria: "bebidas", stock: 50, precio: 200, rutaImagen: "baggionaranja.jpg" },
]


let contenedor = document.getElementById("contenedorProductos")
 
productos.forEach(producto => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"

    tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>    
    <img src="./imagenes/${producto.rutaImagen}">    
    <p>$${producto.precio}</p>
    <button>Agregar al carrito</button>
    `
        contenedor.appendChild(tarjeta)
}
)

