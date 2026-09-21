import { calcularIMC, mediaEquipo, resultado } from "./Biblioteca/funciones.js";
console.log("Masa Marcos");
var marcos = calcularIMC(70,160);
console.log(marcos);
console.log("Masa Juan");
var juan = calcularIMC(60, 160);
console.log(juan);
console.log(`Tiene Marcos un IMC mayor a Juan: ${marcos > juan}`);
var juanEquipo =mediaEquipo(89,120,103);
var miguelEquipo=mediaEquipo(116,94,123);
var MariaEquipo=mediaEquipo(97,134,105);
var mayorMedia =Equipo