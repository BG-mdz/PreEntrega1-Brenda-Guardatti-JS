/**Objeto con CLASS */
class Vela{
    constructor (nombre,precio,stock, oferta){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.oferta = oferta;
    }
}

const carrito =[];

//ARRAY OBJETOS
const velas = [
    {id:1, nombre: "frambuesa", precio: 300, stock: 10, oferta: true},
    {id:2, nombre: "arandano", precio: 120, stock: 10, oferta: false},
    {id:3, nombre: "manzana&canela", precio: 1000, stock: 5, oferta: false},
    {id:4, nombre: "frambuesa", precio: 400, stock: 8, oferta: true},
];

function busquedaProductos (){
    const elegirVela = parseInt(prompt("Ingrese el numero del producto que quiere adquirir: 1.frambuesa, 2. arandanos, 3. manzana, 4.vainilla"));
    const ingreseCantidad = parseInt(prompt("Ingrese cantidad del producto que quiere adquirir"));
    console.log(ingreseCantidad);
    const productoSeleccionado = velas.find(nombre=>nombre.id === elegirVela);
    alert(`Usted ingreso el producto: ${productoSeleccionado.nombre}`);
    alert (`El precio del producto es: ${productoSeleccionado.precio}`);
    alert (`El stock del producto es: ${productoSeleccionado.stock}`);
}
busquedaProductos();
//Revisar codigo no funciona
function productoEnOferta (){
    let ingreseProducto
    do{
        ingreseProducto = parseInt(prompt("Ingrese el numero del producto que quiere saber is esta en oferta: 1.frambuesa, 2. arandanos, 3. manzana, 4.vainilla, 0. salir"));
        if (ingreseProducto.oferta === true){
            alert("Este producto se encuentra en oferta");
            }
            else{
            alert("Este producto no esta de oferta");
            }
    }while (ingreseProducto !== 0 || isNaN(ingreseProducto));// me larga que todo no esta en oferta
}
productoEnOferta();


//incompleto
// function preciosIva (){
//     const elegirVela = parseInt(prompt("Ingrese el numero del producto que quiere adquirir: 1.frambuesa, 2. arandanos, 3. manzana, 4.vainilla"));
//     const precioConIva = velas.map ((producto)=>{ producto.precio = producto.precio + (producto.precio * 1.21);
//         return producto;
// })
// }

