const toggleMenu = () => {
    document.body.classList.toggle("open");
};
/**Objeto con CLASS */
class Vela{
    constructor (id,nombre,precio,oferta,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.oferta = oferta;
        this.img = img;
    }
}

//ARRAY OBJETOS
const velaFrambuesa = new Vela (1,"Frambuesa", 300,true,"assets/imagenes/Frambuesa-500.png");
const velaArandano = new Vela (2, "Arandano", 120,false, "assets/imagenes/Arandanos-500.png");
const velaManzana = new Vela (3, "ManzanaCanela", 1000,false, "assets/imagenes/manzana-canela-500.png");
const velaVainilla = new Vela (4, "Vainilla", 400,true,"assets/imagenes/Vainilla-500.png");

/**ARRAY de OBJETOS */
const velas = [velaFrambuesa, velaArandano, velaManzana, velaVainilla];


let carrito = localStorage.getItem ("compra") ? JSON.parse(localStorage.getItem("compra")) : [];

//capturando eventos en el DOM
let html = "";

velas.forEach((element) =>{

    html += //sugar syntax +=
    `<br />
    <div class= "container" id= ${element.id}>
        <div class="card estilo-c">
            <a href="#">
                <div class="img-container">
                <img src=${element.img} alt="imagen-vela" />
                <span class="promo">15% de descuento</span>
                </div>
            </a>
            <div class="info-container">
                <h3>${element.nombre}</h3>
                <stron>${element.precio}</stron>
                <span class="rating">★★★★☆</span>
                <button class="add-cart" class="button" onclick=agregarCarrito(${element.id})> Agregar al carrito </button>
                <button class="add-cart" class="button" onclick=removerCarrito(${element.id})>Remover del carrito </button>
            </div>
    </div>
    <br>`
    })
document.getElementById("display-container").innerHTML = html;

let btnCarrito = document.getElementById("btn-carrito")
btnCarrito.addEventListener("click", mostrarCarrito)

// document.getElementById ("btn-carrito").innerHTML = `<button class="add-cart" onclick=mostrarCarrito()>Ver/Esconder carrito</button>`

function agregarCarrito(id){
    let vela = velas[id - 1]
        if (carrito.some(element=> element.id=== vela.id)) {
            carrito.forEach(element=>{
                if(element.id===vela.id){
                    element.cantidad += 1
                }
            })
        }else{
            let nuevoProductoParaCarrito = {
                id: vela.id,
                nombre: vela.nombre,
                precio: vela.precio,
                cantidad: 1,
                img:vela.img,
            }
            carrito.push(nuevoProductoParaCarrito);
            swal({
                title: "Genial!",
                text: "Tu producto se agrego con exito al carrito",
                icon: "success"});
        }
        localStorage.setItem("compra", JSON.stringify(carrito));
        localStorage.getItem("compra") ? carrito = JSON.parse(localStorage.getItem("compra")) : carrito = []
    }
function removerCarrito(id){
    if (carrito.some(element => element.id === id)) {
        carrito.forEach(element => {
            if (element.id === id) {
                if (element.cantidad > 1) {
                    element.cantidad -= 1
                } else {
                    carrito = carrito.filter(element => element.id !== id)
                    localStorage.setItem("compra", JSON.stringify(carrito));
                    localStorage.getItem("compra")? carrito = JSON.parse(localStorage.getItem("compra")) : carrito=[]
                }
            }
        })
    } else {
        swal({
            title:"Ups!",
            text: "El producto no se encuentra actualmente en el carrito",
            icon: "warning"});
    }
}

function mostrarCarrito() {

    let carritoHTML = document.getElementById("carrito")

    if(carritoHTML.textContent === ""){
        let mostrarCarritoHTML = ""
        if(carrito.length > 0){
            carrito.forEach(element => {
                mostrarCarritoHTML += `
                <div>
                    <li>
                        <img src=${element.img} alt="imagen-vela" />
                    </li>
                    <li>
                        Nombre: ${element.nombre}
                    </li>
                    <li>
                        Precio: ${element.precio}
                    </li>
                    <li>
                        Cantidad: ${element.cantidad}
                    </li>
                    <li>
                        Subtotal: ${element.cantidad * element.precio}
                    </li>
                    <br />
                </div>
                `
            })

            carritoHTML.innerHTML = mostrarCarritoHTML

        } else {
            carritoHTML.innerHTML = `<p>No tenés productos en el carrito...</p>`
        }
    } else {
        carritoHTML.textContent = ""
    }
}

// function pagarCarrito(){

//     let total = 0;
//     carrito.forEach(element => {
//         total += element.precio * element.cantidad
//     })
//     alert("Felicidades. Pasá a pagar. El precio final es de: $" + total)
//     carrito = []
// }
//40:00 booton de finalizar compra