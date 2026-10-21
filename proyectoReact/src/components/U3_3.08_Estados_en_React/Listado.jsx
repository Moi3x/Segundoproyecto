import React ,{useState} from "react";
const listado =()=>{
const numeros=[];
const [listadoNumero,setNumeros]=useState[numeros];
const generar =()=>{
    let nuevoNumero= Math.floor(Math.random()*100)+1;
   // cuando no se cumpla entra 
    if(!numeros.includes(nuevoNumero)){
        setNumeros([...numeros,nuevoNumero]);
    }
};
const eliminar=()=>{
    setNumeros([]);
}

return (
<div className="contenedor-numeros">
    <h2>Numeros listados: </h2>
        <div className="botonera">
        <button onClick={generar}>Generar</button>
        <button onClick={eliminar}>Eliminar</button>
        </div>
    <ul className="lista-numeros">
    {numeros.map((v,i,a)=>(
        <li key={i}>{v}</li>
    ))}
    </ul>
</div>

    );
};
// ME FALTA HACERLO A LO PRO Y CON EL CODIGO  COMO  VERDURAS 


export default Listado;