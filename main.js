
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
    do{
    let ingreseProducto = parseInt(prompt("Ingrese el numero del producto que quiere adquirir: 1.frambuesa, 2. arandanos, 3. manzana, 4.vainilla, para salir ingrese 0"));

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