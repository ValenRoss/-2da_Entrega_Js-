
let carrito = [];

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
const kit2 = new producto(2,"Kit Supervivencia 1",10000,"./assets/image1.png")
const kit3 = new producto(3,"Kit Supervivencia 1",10000,"./assets/image1.png")
const kit4 = new producto(4,"Kit Supervivencia 1",10000,"./assets/image1.png")
const kit5 = new producto(5,"Kit Supervivencia 1",10000,"./assets/image1.png")
const kit6 = new producto(6,"Kit Supervivencia 1",10000,"./assets/image1.png")
const kit7 = new producto(7,"Kit Supervivencia 1",10000,"./assets/image1.png")
const kit8 = new producto(8,"Kit Supervivencia 1",10000,"./assets/image1.png")

const productosZ = [kit1,kit2,kit3,kit4,kit5,kit6,kit7,kit8];
console.log(productosZ) 

const contenedorDeProductos = document.getElementById("contenedorDeProductos")

const mostrarProductos = () => {
    productosZ.forEach( producto => {
        const card = document.createElement("div")
        card.innerHTML =    `
                <div id ="card">
                    <img src ="${producto.img}" class = "cardImg">
                    <div class = "cardBody">
                    <h2> ${producto.nombre} </h2>
                    <p> $${producto.precio} </p>
                    <button id= "boton">Agregar al Carrito</button>
                    </div>
                </div>`
        contenedorDeProductos.appendChild(card)
    })
}
mostrarProductos()