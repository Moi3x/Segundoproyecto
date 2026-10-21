"use strict";
//--------Ejercicio 1---------------------
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
    alumnado:[],
     matricular: function(discente){
       this.alumnado=[...this.alumnado,discente];
    }
};


const mostrarCurso = (curso) => {
  for (let propiedad in curso) {
    if (propiedad === "direccion") {
      console.log(`${propiedad}:`);

      for (let subPropiedad in curso.direccion) {
        console.log(`     ${subPropiedad}: ${curso.direccion[subPropiedad]}`);
      }
    } else {
      console.log(`${propiedad}: ${curso[propiedad]}`);
    }
  }
};

//--------Ejercicio 2---------------------

const discente={
    id:1,
    nombre:"Moises",
    apellido:"g",
    aficiones:["videojuegos","programar","leer"],
    notas:{primera:2,segunda:10,tercera:8},
};
const calcularMedia=(discente)=>{
let total=0;
let contador=0;
for(let propiedad in discente.notas){
     total +=discente.notas[propiedad];
     contador++;
}
return total /contador;
};
const imprimirAficiones=(discente)=>{
    discente.aficiones.map((v,i,a)=>{
        console.log(`Las aficiones del alumnado son:${v} `);
    });
};
const imprimirInforme=(discente)=>{
    for(let propiedad in discente){
        console.log(`${propiedad}: ${discente[propiedad]}`);
    }
    discente.aficiones.map((v,i,a)=>{
console.log(`Aficiones:${v} y las notas:`);
    });
    for(let propiedad in discente.notas){
     console.log(`${discente.notas[propiedad]}`);
}};

const imprimirObjeto=(parametro)=>{
    // le entra un objeto  y debe validar  el tipo d edato e imrpimirlo
}


export{
    curso
    ,mostrarCurso
    ,discente
    ,calcularMedia,
    imprimirAficiones
    ,imprimirInforme};
