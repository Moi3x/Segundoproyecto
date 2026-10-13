"use strict";
import { calcularIMC, mediaEquipo ,equipoMayor,multiplicarNumero,
    impuestoProducto,numeroMeses ,esNumero,comprobarParidad,
    comprobarSigno, esPrimo,analisisNumerico, mostrarAnalisis
    ,mostrarMultiplosDeTres,calcularPotencia,calcularMedia,calculadora
} from "./Biblioteca/funciones.js";

// EJERCICIO 1

console.log("Masa Marcos");
const marcos = calcularIMC(70,160);
console.log(marcos);
console.log("Masa Juan");
const juan = calcularIMC(60, 160);
console.log(juan);
console.log(`Tiene Marcos 4;un IMC mayor a Juan: ${marcos > juan}`);

// EJERCICIO 2

const juanEquipo =mediaEquipo(89,120,103);
const miguelEquipo=mediaEquipo(116,94,123);
const MariaEquipo=mediaAlberto(97,134,105);

const r1 =equipoMayor("Juan",juanEquipo,"Miguel",miguelEquipo,"Maria",MariaEquipo);

if (r1.empate) {
    console.log(`Hay un empate con una media de ${r1.mediaMasAlta}`);
} else {
    console.log(`El equipo de ${r1.mejorEquipo} tiene la media más alta: ${r1.mediaMasAlta}`);
}
// Ejercicio 3
console.log(multiplicarNumero(4,7));

//Ejercicio 4

console.log(impuestoProducto());

console.log(numeroMeses(12));

const resultado = analisisNumerico(7);
if (resultado)mostrarAnalisis(resultado);
else console.log("ERROR: El valor introducido no es un número.");
mostrarMultiplosDeTres(20);
const base=2 ;
const exponente =7;
const resultado2 = calcularPotencia(base,exponente);
if (resultado2 === null){
    console.log("ERROR: La base y el exponente deben ser números enteros.");
}else{
    console.log(`========== EJERCICIO 4 ==========`);
    console.log(`Base: ${base}`);
    console.log(`Exponente: ${exponente}`);
    console.log(`Resultado: ${resultado2}`);
    console.log("=================================");
}
const resultadoMedia = calcularMedia(10,20,30,40);
if (resultadoMedia === null) {
    console.log("ERROR: Debes introducir al menos un número entero positivo o cero.");
}else{console.log(`La media de los numeros es ${resultadoMedia}`);}

const calculadoraResultado = calculadora(2,2,"+");
console.log(`El resultado es ${calculadoraResultado}`);


import{calcularVelocidad ,mediaComida , ganadorTorneo , 
    valorPotenciaX2, presupuestoObra,diaDeLaSemana}from "./Biblioteca/practica.js";
//EJERCICIOS PRACTICA 
const distanciaAna =12;
const tiempoAna=1.2;
const distanciaLuis =45;
const tiempoLuis=1.7;
const esMasRapida= velocidadAna > velocidadLuis
const velocidadAna = calcularVelocidad(distanciaAna,tiempoAna);
const velocidadLuis= calcularVelocidad(distanciaLuis,tiempoLuis);
console.log(`Velocidad Ana:${velocidadAna.toFixed(2)}km/h`);
console.log(`Velocidad Luis:${velocidadLuis.toFixed(2)}km/h`);
console.log(`Ana es mas rapida que luis? :${esMasRapida}`);

const mediaSara=mediaComida(2,3,5);
const mediaLuis=mediaComida(4,6,7);
const mediaAlberto=mediaComida(24,55,11);
const resultado3=ganadorTorneo(
    "Sara",mediaSara,
    "Luis",mediaLuis,
    "Alberto",mediaAlberto
);
if(resultado3.empate){
    console.log(`Wow empate con la media${resultado3.mediaMasAlta}`);
}else{
    console.log(`Gana ${resultado3.nombreGanador}con media ${resultado3.mediaMasAlta}`);
}
console.log(valorPotenciaX2(2,8));

console.log(presupuestoObra());
console.log(presupuestoObra("Cocina",5000,20));

console.log(diaDeLaSemana(3));
console.log(diaDeLaSemana(9));














