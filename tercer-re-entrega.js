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
const velaMAnzana = new Vela (3, "ManzanaCanela", 1000,false, "assets/imagenes/manzana-canela-500.png");
const velaVainilla = new Vela (4, "Vainilla", 400,true,"assets/imagenes/Vainilla-500.png");

/**ARRAY de OBJETOS */
const velas = [velaFrambuesa, velaArandano, velaMAnzana, velaVainilla];
console.log (velas);
/**ARRAY carrito vacio */
//let carrito =[];
let carrito = localStorage.getItem ("carrito") ? localStorage. getItem("carrito") : [];
//capturando eventos en el DOM
let html = "";

velas.forEach((element,index) =>{

    html += //sugar syntax +=
    `<br />
    <div class= "card" id= ${index}>
    <li>
        <img src=${element.img} alt="imagen-vela" />
    </li>
    <li>
            Nombre:${element.nombre}
        </li>
        <li>
            Precio:${element.precio}
        </li>

        <button class="button" onclick=agregarCarrito(${index})> Agregar al carrito </button>
        <button class="button" onclick=removerCarrito(${index})>Remover del carrito </button>
    </div>
    <br>`
    })
document.getElementById("display-container").innerHTML = html;

document.getElementById ("btn-carrito").innerHTML = `<button onclick=mostrarCarrito()>Ver/Esconder carrito</button>`

function agregarCarrito(id){
console.log("agregar producto")
    let vela = velas[id]
        if (carrito.some(element=>element.id=== vela.id)) {
            carrito.forEach(element=>{
                if(element.id===vela.id){
                    element.cantidad +=1
                }
            })
        }else{
            let nuevoProductoParaCarrito ={
                id: vela.id,
                nombre: vela.nombre,
                precio: vela.precio,
                cantidad: 1,
            }
            carrito.push(nuevoProductoParaCarrito);
            alert("Producto agregado con éxito!")
        }
        localStorage.setItem("compra", JSON.stringify(carrito));
        localStorage.getItem("compra")? carrito = JSON.parse(localStorage.getItem("compra")) : carrito=[]
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
        console.log("El producto no se encuentra en el carrito")
    }
}

function mostrarCarrito() {

    let carritoHTML = document.getElementById("carrito")
    console.log(carrito)
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