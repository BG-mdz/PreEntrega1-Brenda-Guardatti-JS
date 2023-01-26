/**Objeto con CLASS */
class Vela{
    constructor (id,nombre,precio,oferta){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.oferta = oferta;
    }
}

//ARRAY OBJETOS
const velaFrambuesa = new Vela (1,"Frambuesa", 300,true);
const velaArandano = new Vela (2, "Arandano", 120,false);
const velaMAnzana = new Vela (3, "ManzanaCanela", 1000,false);
const velaVainilla = new Vela (4, "Vainilla", 400,true);

/**ARRAY de OBJETOS */
const velas = [velaFrambuesa, velaArandano, velaMAnzana, velaVainilla];
console.log (velas);

const carrito =[];

function seleccionProductos() {
    let productoElegido;
    do {
        productoElegido = parseInt(prompt("Ingrese el numero del producto que desea adquirir:" + "\n" + "1. Vela de Frambuesa" + "\n" + "2. vela de Arandano"+ "\n"+ "3. Vela de Manzana & Canela" + "\n" + "4. Vela de Vainilla"  + "\n" +  "5. Continuar con la compra" +"\n" + "6. Para saber si el producto esta en oferta"+ "\n" + "0. Salir"))
        if(productoElegido >= 0 && productoElegido <= 6){
            switch (productoElegido) {
                case 0:
                    alert("Saliste, gracias")
                    break;
                case 5:
                    pagarCarrito()
                    break;
                case 6:
                    productoEnOferta()
                    break;
                default:
                    buscarProductos(productoElegido)
                    break;
            }
        } else {
            alert("Ingresaste un valor inválido.")
        }
    } while (productoElegido !== 6 && productoElegido !== 0)
}

function productoEnOferta(){
    let ingreseProducto;
    do{
        ingreseProducto=Number(prompt("Ingrese producto del cual desea saber si esta en oferta"));
        let velaBuscada = velas.find(vela=>vela.id===ingreseProducto);
        if (velaBuscada.oferta){
            alert("Este producto se encuentra en oferta");
        }
        else{
            alert("Lo sentimoos. Actualmente este producto no esta en oferta");
        }
    }while(ingreseProducto !==0|| isNaN(ingreseProducto));
}

function buscarProductos(valor) {
    const velaBuscada = velas.find(vela => vela.id === valor);
    elegirCantidad(velaBuscada)
}

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

    alert("Felicidades. Pasá a pagar. El precio final es de: $" + total)
    carrito = []
}

seleccionProductos();