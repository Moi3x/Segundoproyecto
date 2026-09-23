"use strict";

function calcularIMC(masa ,altura){
return  masa / (altura*altura);
}
function mediaEquipo(){
    let suma=0;
for(let i =0; i < arguments.length ; i++){
    suma+=arguments[i];
}
return suma/arguments.length;

}
function equipoMayor(){
let mediaMasAlta=0;
let mejorEquipo="";
let empate = false;

for (let i = 0; i < arguments.length; i++){
   const nombre = arguments[i];
   const media =arguments[i+1];
if(media > mediaMasAlta){
    mediaMasAlta=media;
    mejorEquipo=nombre;
    empate=false;
}else if (media ===mediaMasAlta){
    empate=true;
}
}
return {mejorEquipo,mediaMasAlta,empate};

}
function multiplicarNumero(num1 ,num2){
    let comodin=num2;
    let cadena="";

for(let i = 1;i <= num1;i++){
    cadena +=comodin + " ";
    
    comodin = comodin*2;
}
return cadena.trim();
}

//parametros por defecto
//nombreProducto=Producto generico", precio=100,impuesto=21

function impuestoProducto(nombreProducto,precio,impuesto){
nombreProducto=(nombreProducto===""||nombreProducto===undefined)?"Producto generico": nombreProducto;
precio=(precio===undefined||precio==null)? 100:precio;
impuesto=(impuesto===undefined||impuesto==null)? 21:impuesto;
if(isNaN(precio)||isNaN(impuesto)){
    console.error("Los numeros introducidos en el precio o el impuesto no son validos");
return;
}
const precioFinal= precio +(precio*impuesto/100);

return `${nombreProducto} Precio: ${precio} Iva: ${precioFinal}`;
}

function numeroMeses(numero){
    if (numero===null ||typeof numero !=="number" ||Number.isNaN(numero)||!Number.isInteger(numero)||numero<=0 ||numero>12){
        console.error("El numero introducido esta fuera de rango o es incorrecto");
    return;
    }
   const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[numero-1];

  /*  switch(numero){
        case 1:
            return "Enero";
        case 2:
           return  "Febrero";
        case 3:
            return "marzo";
        case 4:
            return "abril";
        case 5:
            return "mayo";
        case 6:
            return "junio" ;
        case 7:
            return "julio";
        case 8:
            return "agosto";
        case 9:
            return "septiembre";
        case 10:
            return "octubre";
        case 11: 
            return "noviembre";
        case 12:
            return "diciembre";
        }*/
}


export {calcularIMC , mediaEquipo , equipoMayor,multiplicarNumero,impuestoProducto,numeroMeses};

