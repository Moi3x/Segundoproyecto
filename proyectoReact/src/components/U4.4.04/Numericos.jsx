import React ,{createContext, createElement, useRef, useState} from "react";
import { StrictMode } from 'react'

const Numericos =()=>{
const referencia=useRef(null);
const generarAleatorio=()=>{
    return (Math.floor(Math.random()*1000)+1);
};
const añadirElementoAlInner=(referencia)=>{
referencia.current.innerHTML=`${referencia.current.innerHTML}<li>El numero aleatorio es : ${generarAleatorio()}</li>`;
};
const añadirElemento=(referencia)=>{
let li =document.createElement('li');
let texto=document.createTextNode(generarAleatorio());
li.appendChild(texto);
referencia.current.appendChild(li);
};
return (
    <>
    <div>
   <button onClick={()=>añadirElemento(referencia)}>Añadir numerico</button>
    <ol ref={referencia}>
    </ol>
    </div>
    <button onClick={()=>añadirElementoAlInner(referencia)}>Otro ejemplo</button>
    </>
)



}
export default Numericos;