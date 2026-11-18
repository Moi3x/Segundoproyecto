"use strict";


const borrarTareas=document.querySelectorAll(".tarea, .acabada");

borrarTareas.forEach((tarea)=>{
    tarea.remove();
});
const crearTarea =()=>{
const pendientes = document.getElementById("pendientes");
const textarea =document.querySelector("textarea");
const texto = textarea.value.trim();
if(texto ===""){
    console.log("mal");
    return;
}const nuevaTarea=document.createElement("div");
nuevaTarea.classList.add("tarea");
const id=crypto.randomUUID();
nuevaTarea.id =id;
const pTexto=document.createElement("p");
pTexto.textContent=texto;
const pBotones=document.createElement("p");
pBotones.classList.add("botones");

const botonBorrar=document.createElement("input");
botonBorrar.type="button";
botonBorrar.value="Borrar";
botonBorrar.classList.add("del");

const botonAcabar=document.createElement("input");
botonAcabar.type="button";
botonAcabar.value="Acabar";
botonAcabar.classList.add("end");


pBotones.appendChild(botonBorrar);
pBotones.appendChild(botonAcabar);
nuevaTarea.appendChild(pTexto);
nuevaTarea.appendChild(pBotones);
pendientes.appendChild(nuevaTarea);

textarea.value="";

botonBorrar.onclick=()=>{
    borrarTarea(id);
};
botonAcabar.onclick=()=>{
    acabarTarea(id);
}
};


const botonAñadir= document.querySelector(".add");
if(botonAñadir){
botonAñadir.onclick=crearTarea;
}

const borrarTarea =(id)=>{
const tarea = document.getElementById(id);
if(tarea){
    tarea.remove();
}
}

const volverTarea=(id)=>{
const pendientes =document.getElementById("pendientes");
const tarea=document.getElementById(id);

if (tarea && pendientes) {
    // Restaurar clases CSS al estado pendiente (quita fondo verde)
    tarea.classList.remove("acabada");
    tarea.classList.add("tarea");

    // Seleccionar los botones dentro de esta tarea concreta
    const botonBorrar = tarea.querySelector(".del");
    const botonAcabar = tarea.querySelector(".end");

    // Restaurar texto y evento original del botón Borrar
    if (botonBorrar) {
      botonBorrar.value = "Borrar";
      botonBorrar.onclick = function () {
        borrarTarea(id);
      };
    }

    // Restaurar texto y evento original del botón Acabar
    if (botonAcabar) {
      botonAcabar.value = "Acabar";
      botonAcabar.onclick = function () {
        acabarTarea(id);
      };
    }

    // Mover el div de vuelta al contenedor #pendientes
    pendientes.appendChild(tarea);
  }
}



const archivarTarea =(id)=>{
    const tarea= document.getElementById(id);
    if(tarea){
        tarea.classList.add("oculto");
    }

}
const mostrarTareas=()=>{
    const tareaOcultas=document.getElementById("acabadas");
if(tareaOcultas){
    tareaOcultas.forEach((tarea)=>{
        tarea.classList.remove("oculto");
    });
}
const botonMostrar = document.querySelector(".sho");
if(botonMostrar){
    botonMostrar.onclick=mostrarTareas;
}
}


const acabarTarea=(id)=>{

const acabadas = document.getElementById("acabadas");

const tarea=document.getElementById(id);

if(tarea && acabadas){
    tarea.classList.remove("tarea");
    tarea.classList.add("acabada");

const botonBorrar = tarea.querySelector(".del");
const botonAcabar=tarea.querySelector(".end");
if(botonBorrar){
    botonBorrar.value="Archivar";
    botonBorrar.onclick=()=>{
        archivarTarea(id);
    };
};
if(botonAcabar){
    botonAcabar.value="Volver";
    botonAcabar.onclick=()=>{
        volverTarea(id);
    };
}
acabadas.appendChild(tarea);
}
};

