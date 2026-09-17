"use strict";

function calcularIMC(masa ,altura){
return  masa / (altura*altura);
}
function mediaEquipo(){
    let suma;
for(let i =0; i < arguments.length ; i++){
    suma+=arguments[i];
}
return suma/arguments.length;

}
function equipoMayor(){
}




export {calcularIMC , mediaEquipo};
