"use strict";
function calcularVelocidad(distancia,tiempo){
    return distancia / tiempo;
}
function mediaComida(){
    let suma ;
for(i=0;i <arguments.length;i++){
    suma += arguments[i];
}
return suma/arguments.length;
}
function ganadorTorneo(){
    let nombreGanador="";
    let mediaMasAlta;
    let empate=false;
for (i=0;i< arguments.length;i+=2){
const nombre = arguments[i];
const media =arguments[i+1];
if(media > mediaMasAlta){
    mediaMasAlta=media;
    nombreGanador=nombre;
    empate=false;
}else if (media ===mediaMasAlta){
    empate=true;
}
}
return{nombreGanador,mediaMasAlta,empate}
}

function valorPotenciaX2(veces,valor){
    let acumulado=valor;
    let cadena="";
    for(i=1;i <=veces;i++){
        cadena+=acumulado + " ";
        acumulado*=2;
    }
    return cadena.trim();
}
function presupuestoObra(descripcion="Reforma generica", costeBase=1000,margen=15){
    if(isNaN(costeBase)||isNaN(margen)){
        console.error("EL coste o margen no son correctos")
    return;
    }
    const total = costeBase (costeBase * margen)/100;
    return `${descripcion} Coste: ${costeBase} total:${total}`; 
}
function diaDeLaSemana(numero){
    if(numero===null || typeof numero !== "number"|| Number.isNaN(numero)||!Number.isInteger(numero)|| numero <1 || numero >7){
        console.error("Numero fuera de rango.Deber ser un entero  1 y 7")
    return;
    }
    const dias=["Lunes","martes","miercoles"];
    return dias[numero-1];
}


export{calcularVelocidad,mediaComida,ganadorTorneo,valorPotenciaX2,presupuestoObra};