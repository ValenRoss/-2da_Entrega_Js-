


class producto {
    constructor(id,nombre,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 10;
    }
}
const kit1 = new producto(1,"Kit Supervivencia 1",10000,"./assets/image1.png")
const kit2 = new producto(2,"Kit Supervivencia 2",10000,"./assets/image1.png")
const kit3 = new producto(3,"Kit Supervivencia 3",10000,"./assets/image1.png")
const kit4 = new producto(4,"Kit Supervivencia 4",10000,"./assets/image1.png")
const kit5 = new producto(5,"Kit Supervivencia 5",10000,"./assets/image1.png")
const kit6 = new producto(6,"Kit Supervivencia 6",10000,"./assets/image1.png")
const kit7 = new producto(7,"Kit Supervivencia 7",10000,"./assets/image1.png")
const kit8 = new producto(8,"Kit Supervivencia 8",10000,"./assets/image1.png")

const productos = [kit1,kit2,kit3,kit4,kit5,kit6,kit7,kit8];
let carrito = [];
console.log(productos) 

const contenedorDeProductos = document.getElementById("contenedorDeProductos")

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML =    `
                <div id ="card">
                    <img src ="${producto.img}" class = "cardImg"> 
                    <div class = "cardBody">
                    <h2> ${producto.nombre} </h2>
                    <p> $${producto.precio} </p>
                    <button id= "boton${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>`
        contenedorDeProductos.appendChild(card)
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(productos.id);
        })
    })
}
mostrarProductos()  

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;    
    }else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    } 
    console.log(carrito);
}