//envios-CONDICIONALES
let zona = prompt("Ingrese en que zona vive: Latinoamerica. Europa. Asia ").toLowerCase();

if (zona == "latinoamerica"){
    alert ("Realizamos envios");
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

//productos-CICLOS
const frambuesa = 300;
const arandano = 120;
const manzana = 1000;
const vainilla = 400;
let resultadoFinal;
let ingreseProducto;

//multiplicacion-FUNCTION

function multiplicacion (item){
    ingreseCantidad = parseInt(prompt("Ingrese la cantidad de velas que desea asquirir."));
    resultadoFinal = item * ingreseCantidad;
    alert ("El precio final es " + resultadoFinal);
}

//productos-CICLOS
do{
    let ingreseProducto = parseInt(prompt("Ingrese el numero del producto que quiere adquirir: 1.frambuesa, 2. arandanos, 3. manzana, 4.vainilla, para salir ingrese 0"));

    switch (ingreseProducto){
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
    }

}
while (ingreseProducto != 0)


