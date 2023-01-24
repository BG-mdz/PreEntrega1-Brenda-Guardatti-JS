/**Objeto con CLASS */
class Producto{
    constructor (nombre,precio,stock, oferta){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.oferta = oferta;
    }
}
const producto1 = new Producto ("Frambuesa", 300,10,true);
const producto2 = new Producto ("Arandano", 120,10,false);
const producto3 = new Producto ("ManzanaCanela", 1000,5,false);
const producto4 = new Producto ("Vainilla", 400,8,true);

/**ARRAY de OBJETOS */
const productos = [producto1,producto2,producto3,producto4];
//console.log (productos);
//Array carrito
const carrito = [];

function agregarVela(producto){
    carrito.push(producto.nombre)
    console.log(carrito)
    }

function seleccionProducto(){
    let ingreseProducto = 0;
    do {
        ingreseProducto = parseInt(prompt("Ingrese el numero del producto que quiere adquirir: 1.frambuesa, 2. arandanos, 3. manzana, 4.vainilla"));
        if(ingreseProducto <= 0 || ingreseProducto >=5
        || isNaN(ingreseProducto) ){
        alert("Opcion no valida")
    }
    }while (ingreseProducto <= 0 || ingreseProducto >=5 || isNaN(ingreseProducto));

    switch (ingreseProducto){
        case 1:
            agregarVela(producto1);
            alert (producto1.nombre)
            break;
        case 2:
            agregarVela(producto2);
            break;
        case 3:
            agregarVela(producto3);
            break;
        case 4:
            agregarVela(producto4);
            break;
    }
    alert(`El producto seleccionados es: ${ingreseProducto.nombre}`)// no funciona alert
}
//     alert(`El producto seleccionados es: ${ingreseProducto.id}`)
//     const ingreseCantidad = parseInt(prompt("Ingrese cantidad del producto que quiere adquirir"));
//     console.log(ingreseCantidad);
//     alert(`La cantidad ingresada es: ${ingreseCantidad}`);
//     const encontrarProducto = productos.find(nombre=>nombre.id===ingreseProducto);
//     console.log(encontrarProducto);
//     alert(`El precio es: ${ingreseProducto.precio}`)
    
//     if (productos.oferta === true){
//         alert("Este producto se encuentra en oferta");
//     }
//     else{
//         alert("Este producto no esta de oferta");
//     }

// }
seleccionProducto();



// //Array vacio con metodo push
// //foreach funcion callback con arrow function
// nombreProductos=[];
// productos.forEach(producto=>nombreProductos.push(producto.nombre));
// console.log (nombreProductos)

// //productos.forEach(nombre=>console.log(nombre));

// //find
// const consigneProducto =  prompt("Ingrese el nombre del producto cuyos datos desea encontrar");
// function busquedaProducto(consigneProducto){
// //const buscarPrecio = productos.find(producto=>producto.precio)
// const encontrarProducto = productos.find((producto)=>producto.nombre === consigneProducto);
// //const encontrarProducto= productos.find(producto=>producto.precio > 500);
// return encontrarProducto;
// }
// console.log(encontrarProducto);
// busquedaProducto();

// //fiter
// const productosPrecio = productos.filter ((producto=>producto.precio <600));
// console.log(productosPrecio);

// //map precios con IVA
const preciosIva = productos.map((producto)=>{
     producto.precio = producto.precio + (producto.precio *1.21);
     return producto;
 });
 console.log(preciosIva);

// //reduce calculo total de precio productos

// const precioTotal = preciosIva.reduce((acc,preciosIva)=>{
//     return acc + preciosIva.precio;
// },0);
// console.log(precioTotal);


