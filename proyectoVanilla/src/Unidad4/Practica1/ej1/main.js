"use strict"
import {
    contarEnlaces,
    contarParrafos,
    contarSegundoParrafo,
    seleccionarPenultimoEnlace,
    seleccionarPrimerEnlace
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