"use strict";
import {validarNumeros,sumaParametros,validarNumero2,multiplicarNumero,tablas} from "./Biblioteca/funciones.js";
import{curso,mostrarCurso,discente,calcularMedia,imprimirAficiones,imprimirInforme} from"./Biblioteca/funcionesJson.js";

console.log(tablas(5,multiplicarNumero));

// Pruebas de ejercicios 3.03
// ej 1
mostrarCurso(curso);
// ej 2
console.log(`La media de la evaluacion es de:${calcularMedia(discente)}`);
console.log(`Aficiones:`);
imprimirAficiones(discente)
console.log(`Informe:`);
imprimirInforme(discente)
