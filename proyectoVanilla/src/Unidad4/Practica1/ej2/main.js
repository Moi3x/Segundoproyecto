"use strict"

import numeroAleatorio from "./insertar.js"

setInterval(()=>{
const destino = document.getElementById("insertar");
const insertarAleatorio = numeroAleatorio();
const crearLi=document.createElement("li");
crearLi.textContent=`numeroAleatorio: ${insertarAleatorio}`;
destino.insertAdjacentElement(`beforeend`,crearLi);
},2000);