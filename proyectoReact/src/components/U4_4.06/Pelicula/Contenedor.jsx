import './contenedor.css';
import React from 'react';

const Contenedor = ({children})=> {
    return (
        <>
        <div className='contenedor-contenedor'>
            <p> Contenedor</p>
            <div> {children}</div>
        </div>
        </>
    );
}
export default Contenedor;