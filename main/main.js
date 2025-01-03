
let carrito = [];  

class Producto {
    constructor(id,nombre,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const kitSuperv = new Producto(1,"Kit de Supervivencia",100000,"./assets/image1.png")
const Machete = new Producto(2,"Machete Kill Zombie",5000,"./assets/image2.png")
const Winchester = new Producto(3,"Winchester",50000,"./assets/image3.png")
const Colt = new Producto(4,"One Shoot Colt",30000,"./assets/image4.png")
const Gafas = new Producto(5,"Gafas de +40% Aim",2000,"./assets/image5.png")
const AidKit = new Producto(6,"Aid Kit",5000,"./assets/image6.png")
const AntiViral = new Producto(7,"Anti Viral",100000,"./assets/image7.png")
const LolipopAsis = new Producto(8,"Asistencia Lolipop",10000,"./assets/image8.png")

const productos = [kitSuperv,Machete,Winchester,Colt,Gafas,AidKit,AntiViral,LolipopAsis];

console.log(productos) 

const contenedorDeProductos = document.getElementById("contenedorDeProductos")

const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div")
        card.innerHTML =    `
                <div class ="card">
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
            agregarAlCarrito(producto.id);
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
    calcularTotal();
}
const contenedorDeLCarrito = document.getElementById("contenedorDelCarrito")
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})
const mostrarCarrito = () => {
    contenedorDeLCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div") 
        card.innerHTML =  `
                <div class = "card">
                    <img src ="${producto.img}" class = "cardImg"> 
                    <div class = "cardBody">
                    <h2> ${producto.nombre} </h2>
                    <p> $${producto.precio} </p>
                    <p> ${producto.cantidad} </p>
                    <button id= "boton${producto.id}">Eliminar del Carrito</button>  
                    </div>
                </div>`
        contenedorDeLCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        } )

    })
}  
const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();

    const vaciarCarrito = document.getElementById("vaciarCarrito");

    vaciarCarrito.addEventListener("click", () =>{
        eliminarTodoElCarrito
    })

    const eliminarTodoElCarrito = () => {
        carrito = [];
        mostrarCarrito();
    }

}   
const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach( producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total $${totalCompra}`;
}