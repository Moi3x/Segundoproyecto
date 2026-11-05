"use strict"
import {
    contarEnlaces,
    contarParrafos,
    contarSegundoParrafo,
    seleccionarPenultimoEnlace,
    seleccionarPrimerEnlace,
    contarB,
    textoB,
    numEnlacesFiltrados,
    numSup,
    ultimoTitle
} from "./contarElementos.js";
// Primer ejercicio
setTimeout(() => {
const destino = document.getElementById("info");
const primerEnlace=seleccionarPrimerEnlace();
const penultimoENlace=seleccionarPenultimoEnlace();
    destino.insertAdjacentHTML(
      `beforeend`,
     `<p>El numero  de parrafos es: ${contarParrafos()}</p>
      <p>El segndo parrafo es: ${contarSegundoParrafo()}</p>
      <p>El total de enlaces es: ${contarEnlaces()}</p>
      <p>El primer enlace es : ${primerEnlace}</p>
      <p>El segndo parrafo es: ${penultimoENlace}</p> `,
    );
  }, 2000);
//Primer ejercicio otra manera de hacerlo 
setTimeout(() => {
  const destino2 = document.getElementById("info");
  const contarBs=contarB();
  const buscarPorEnlaces=numEnlacesFiltrados();
  const numerodeSup=numSup();
  const ultimoTitutlo=ultimoTitle();
  destino2.insertAdjacentHTML(
    `beforeend`,
    `<p>El numero total de b es: ${contarBs}</p>
     <p>El segundo texto a leer es:${textoB()}</p>
     <p>El numero de enlaces que apuntar a citi_note-2 es:${buscarPorEnlaces}</p>
     <p>El numero de total de sup en la pagina es : ${numerodeSup}</p>
     <p>El ultimo titulo del enlac es: ${ultimoTitutlo}</p>`
  );
},2000);