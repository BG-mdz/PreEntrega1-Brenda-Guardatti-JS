//productos
const frambuesa = 300;
const arandano = 120;
const manzana = 1000;
const vainilla = 400;
let ingreseProducto;

//Funciones
//multiplicacion-FUNCTION

function multiplicacion (item){
    let ingreseCantidad;
    let resultadoFinal;
do{
    ingreseCantidad = parseInt(prompt("Ingrese la cantidad de velas que desea asquirir (maximo 10)."));
    resultadoFinal = item * ingreseCantidad;

}while(ingreseCantidad<1 || ingreseCantidad>10 || isNaN(ingreseCantidad))
    alert(`El precio final es: $${resultadoFinal}`)
}
//funcion COMPRA
//productos-CICLOS
function compra (){
let ingreseProducto
    do{
        ingreseProducto = parseInt(prompt("Ingrese el numero del producto que quiere adquirir: 1.frambuesa, 2. arandanos, 3. manzana, 4.vainilla, para salir ingrese 0"));
    switch (ingreseProducto){
        case 0:
            alert("Gracias por su compra.")
            break;
        case 1:
            multiplicacion (frambuesa);
            break;
        case 2:
	        multiplicacion (arandano);
            break;
        case 3:
	        multiplicacion (manzana);
            break;
        case 4:
	        multiplicacion (vainilla);
            break;
        default:
            alert ("Ingreso una opcion incorrecta")
            break
    }

}
while (ingreseProducto !== 0)
}


//envios-CONDICIONALES
let zona = prompt("Ingrese en que zona vive:" + "\n" + "Latinoamerica" + "\n" + "Europa" + "\n" +  "Asia ").toLowerCase();


if (zona == "latinoamerica"){
compra();
}
else if (zona == "europa"){
    alert ("Consulte condiciones de envio");
}
else if (zona == "asia"){
    alert ("No realizamos envios a su zona");
}
else{
    alert ("Ha ingresado una zona no valida.");
}

/**Objeto con CLASS */
class Producto{
    constructor (nombre,precio,stock, oferta){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.oferta = oferta;
    }
}


const producto1 = new Producto ("Frambuesa".toLowerCase(), 300,10,true);
console.log(producto1.nombre)
const producto2 = new Producto ("Arandano".toLowerCase(), 120,10,true);
console.log(producto2.oferta)
const producto3 = new Producto ("ManzanaCanela".toLowerCase(), 1000,5,true);
console.log(producto3.stock)
const producto4 = new Producto ("Vainilla".toLowerCase(), 400,8,true);
console.log(producto4.precio)

/**ARRAY de OBJETOS */
const productos = [producto1,producto2,producto3,producto4];
console.log (productos);


//Array vacio con metodo push
//foreach funcion callback con arrow function
nombreProductos=[];
productos.forEach(producto=>nombreProductos.push(producto.nombre));
console.log (nombreProductos)

//productos.forEach(nombre=>console.log(nombre));

//find
const consigneProducto =  prompt("Ingrese el nombre del producto que desea encontrar");
//const encontrarProducto = productos.find((producto)=>producto.nombre === consigneProducto);
const encontrarProducto= productos.find(producto=>producto.precio > 500);
console.log(encontrarProducto);


//fiter
const productosPrecio = productos.filter ((producto=>producto.precio <600));
console.log(productosPrecio);

//map precios con IVA
const preciosIva = productos.map((producto)=>{
    producto.precio = producto.precio + (producto.precio *1.21);
    return producto;
});
console.log(preciosIva);

//reduce calculo total de precio productos

const precioTotal = preciosIva.reduce((acc,preciosIva)=>{
    return acc + preciosIva.precio;
},0);
console.log(precioTotal);


