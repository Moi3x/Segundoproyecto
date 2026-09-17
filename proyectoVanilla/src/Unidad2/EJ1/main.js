import { calcularIMC, resultado } from "./Biblioteca/funciones.js";
console.log("Masa Marcos");
var marcos = calcularIMC(70,160);
console.log(marcos);
console.log("Masa Juan");
var juan = calcularIMC(60, 160);
console.log(juan);
console.log(`Tiene Marcos un IMC mayor a Juan: ${marcos > juan}`);