import './contenedor.css';
import React from 'react';

const Contenedor = (props)=> {
    return (
        <>
        <div className='contenedor-contenedor'>
            <p> essto es un contenedor</p>
            <h2> {props.children}</h2>
        </div>
        </>
    );
}
export default Contenedor;