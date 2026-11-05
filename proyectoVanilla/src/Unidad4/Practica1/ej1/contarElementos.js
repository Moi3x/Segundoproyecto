"use strict";
/*
NOTA: La ejecucicón del código de los ejercicios se realizará 
transcurridosdos segundosdesde la carga de la página 
através de un setTimeout(()=>{ funcion_a_realizar }, 2000)
, a menos que el enunciado indique lo contrario.

• el número de párrafos de la página,
• el texto del segundo párrafo,
• el número de enlaces de la página,
• la dirección del primer enlace y
• la dirección del penúltimo enlace.
El texto con la información será añadido al <div> con id=info y debe estar debidamente
formateado.
*/

// transformar array -> Arrayfrom();
const contarParrafos = () => {
  let parrafos = document.getElementsByTagName("p");
  return parrafos.length;
};
const contarSegundoParrafo = () => {
  let contarSParrafo = document.querySelectorAll("p")[1];
  return contarSParrafo.textContent;
};
const contarEnlaces = () => {
  let contarEnlaces = document.getElementsByTagName("a");
  return contarEnlaces.length;
};

const seleccionarPrimerEnlace = () => {
  return document.querySelector("a").href;
};
const seleccionarPenultimoEnlace = () => {
  let seleccionarPEnlace = document.querySelectorAll("a");
  return seleccionarPEnlace[seleccionarPEnlace.length - 2].href;
};
const contarHtml = () => {
  // SI QUIERO RECORRER X PARRAFO OCOLOCARLO ES MOVERSE RECURSIVAMENTE COMO?
  // PUES DESDE EL PRINCIPIO CON FIRSTCHILD O DESDE EL LASTCHILD Y MOVERSE CON NEXTSIMBLING
  /*primera
setTimeout(()=>{
    const destino = document.getElementById("info");// hace referencia al div con id info
    const parrafo1 =document.createElement("p");
    const texto1 =document.createTextNode(`el numero  de parrafos es ${contarParrafos()}`,

);
parrafo1.appendChild(texto1);
destino.appendChild(parrafo1);
},2000);*/
  /*segunda forma de hacerlo
 destino.innerHTML=`${destino.innerHTML}<p> El numero  de parrafos es :${contarParrafos()}</p>`;*/
  //tercera forma de hacerlo y hacerlo asi
};
// EJERCICIO 2 PRACTICA

const contarB = () => {
  let contar = document.getElementsByTagName("b");
  return contar.length;
};
const textoB = () => {
  let primerTextoB = document.querySelectorAll("b")[1];
  return primerTextoB.textContent;
};
const numEnlacesFiltrados = () => {
  let numEn = document.querySelectorAll("a");
  let enlaceFiltrado = [];
  for (let i = 0; i < numEn.length; i++) {
    if (numEn[i].href.endsWith("#cite_note-2")) {
      enlaceFiltrado = [...enlaceFiltrado, numEn[i]];
    }
  }
  return enlaceFiltrado.length;
};
const numEnlacesFiltradosClean = () => {
  let numEn = document.querySelectorAll('a[href="#cite_note-2"]');

  return numEn;
};
const numSup = () => {
  let numS = document.getElementsByTagName("sup");
  return numS.length;
};
const ultimoTitle = () => {
  let tittle = document.querySelectorAll("a[title");
  if (tittle.length === 0) return "Ninguno tiene titulo";
  let ultimo = tittle[tittle.length - 1];
  return ultimo.title;
};
// EJERCICIO 3 PRACTICA
const contarParrafos2 = () => {
  let contarParrafos2 = document.getElementsByTagName("p");
  return contarParrafos2.length;
};
const numeroTotalPalabrasTexto = () => {
  let contarPalabras = document.getElementsByTagName("p");
  let textoCompleto = "";
  for (let i = 0; i < contarPalabras.length; i++) {
    textoCompleto += contarPalabras[i].textContent + " ";
  }
  const palabras = textoCompleto.trim().split(" ");

  if (palabras.length === 1 && palabras[0] === "") {
    return 0;
  }
  return palabras.length;
};
const longitudCaracteres = () => {
  let contarCaracteres = document.querySelector("p");
  let textoPasado = contarCaracteres.textContent;
  let caracteresTotales = 0;
  for (let i = 0; i < textoPasado.length; i++) {
    caracteresTotales += textoPasado[i].textContent.length;
  }
  return caracteresTotales;
};
const mediaPalabrasPorParrafo = () => {
  let parrafos = document.getElementsByTagName("p");
  if (parrafos.length === 0) return "0.00";
  let textoCompleto = "";
  for (let i = 0; i < parrafos.length; index++) {
    textoCompleto += parrafos[i].textContent + " ";
  }
  let palabras2 = textoCompleto.trim().split(" ");

  if (palabras.length === 1 && palabras[0] === "") {
    return 0;
  }
  const media = palanbras.length / parrafos.length;
return media.toFixed(2);
};
const ultimoTextoRecortado =()=>{
  let textoRecortado =document.querySelectorAll('p');
  let ultimoParrado=textoRecortado[textoRecortado.length-1];
  let textoDelUltimo= ultimoParrado.textContent;
  let recorte=textoDelUltimo.slice(0,50)+"...";
  let forComplicado="";
  for (let i = 0;i < 50 && i < textoDelUltimo.length; i++) {
    forComplicado+=textoDelUltimo[i];
    
  }
  return forComplicado + "...";

}
 
export {
  contarEnlaces,
  contarParrafos,
  contarSegundoParrafo,
  seleccionarPenultimoEnlace,
  seleccionarPrimerEnlace,
  numSup,
  contarB,
  textoB,
  numEnlacesFiltrados,
  ultimoTitle,
};
