import React,{useState} from 'react';
const Boton = ({nombre, funcion ,activo})=> {
    return (
    <button
    disabled={!activo }
        className='Boton_boton'
        onClick={()=>{
            funcion();
        }}
  > 
    {nombre}
  </button>  
    );
};
export default Boton;