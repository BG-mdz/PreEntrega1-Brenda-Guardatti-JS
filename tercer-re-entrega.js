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
const velaFrambuesa = new Vela (1,"Frambuesa", 300,true,"./assets/Frambuesa-500.png");
const velaArandano = new Vela (2, "Arandano", 120,false, "img");
const velaMAnzana = new Vela (3, "ManzanaCanela", 1000,false, "img");
const velaVainilla = new Vela (4, "Vainilla", 400,true,"img");

/**ARRAY de OBJETOS */
const velas = [velaFrambuesa, velaArandano, velaMAnzana, velaVainilla];
console.log (velas);
/**ARRAY carrito vacio */
let carrito =[];

function elegirCantidad(velaElegida){
    let cantidad = parseInt(prompt("Ingrese la cantidad deseada"));

    if(carrito.some(vela => vela.id === velaElegida.id)){
        carrito.forEach(vela => {
            if(vela.id === velaElegida.id){
                vela.cantidad = vela.cantidad + cantidad
            }
        })
    } else {
        let productoParaCarrito = {
            id: velaElegida.id,
            nombre: velaElegida.nombre,
            precio: velaElegida.precio,
            cantidad: cantidad,
        }
        carrito.push(productoParaCarrito)
        alert("Producto agregado con éxito!")
    }

}
function pagarCarrito(){

    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad
    })
    // agregarItemHTML(producto);
    alert("Felicidades. Pasá a pagar. El precio final es de: $" + total)
    carrito = []
}

//capturando eventos en el DOM
let html = "";
velas.forEach(element =>{
    const classCard = element.oferta ? "card": "redCard"
    html += //sugar syntax +=
    `<div class= ${classCard}>
        <li>
            ${element.nombre}
        </li>
        <li>
            ${element.precio}
        </li>
        <li>
            ${element.oferta}
        </li>
        <button id= ${element.id} class="button" onclick=AddToCart(${element.id})>Agregar al carrito</button>
        <button id= ${element.id} class="button" onclick=TakeOutfromCart(${element.id})>Remover del carrito</button>
    </div>`
    })
document.getElementById("display-container").innerHTML = html;

function AddToCart (elegirCantidad){

    localStorage.getItem("compra")? carrito = JSON.parse(localStorage.getItem("compra")) : carrito=[]

    let producto = velas.find(element=>element.id===elegirCantidad)
    carrito.push(producto)
    localStorage.setItem("compra", JSON.stringify(carrito))
    console.log(carrito);
}

//if 