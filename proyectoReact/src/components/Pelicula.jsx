import './pelicula.css';
import React from 'react';
const Pelicula = (props)=>{
    return (
        <>
        <div className='pelicula-contenedor'>
            <h2>{props.nombre}</h2>
            <img src={props.imagen}/>
            <p>{props.direccion}</p>
            <p>{props.cartelera}</p>
            <p>{props.resumen}</p>
            <p>{props.children}</p>
        </div>
        </>
    );
};
export default Pelicula;