"use strict";
const curso={
    nombre:"Moises",
    apellido1:"g",
    apellido2:"g",
    altura:180,
    peso:84,
    curso:"1DAW",
    direccion:{
        calle:"la que se",
        portal:"ese mismo",
        cp:24444
    },
    aficiones:["videojuegos","programar","leer"],
};

function mostrarObjeto(curso){
for (let propiedad in curso){
    console.log(`${propiedad}: ${curso[propiedad]}`);
}
}
export{curso,mostrarObjeto};