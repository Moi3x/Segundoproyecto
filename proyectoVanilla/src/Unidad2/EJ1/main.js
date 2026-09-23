import { calcularIMC, mediaEquipo ,equipoMayor,multiplicarNumero,impuestoProducto,numeroMeses} from "./Biblioteca/funciones.js";

// EJERCICIO 1

console.log("Masa Marcos");
const marcos = calcularIMC(70,160);
console.log(marcos);
console.log("Masa Juan");
const juan = calcularIMC(60, 160);
console.log(juan);
console.log(`Tiene Marcos un IMC mayor a Juan: ${marcos > juan}`);

// EJERCICIO 2

const juanEquipo =mediaEquipo(89,120,103);
const miguelEquipo=mediaEquipo(116,94,123);
const MariaEquipo=mediaEquipo(97,134,105);

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
