import React from "react";
import "./interprete.css";

const Interprete = (props)=> {
    //Javascrip vanilla

    return (
        //JSX
        <>
        <div className='interprete-contenedor'>
        <img src={props.imagen}/>
        <h2> {props.nombre}</h2>
        <h4>{props.children}</h4>
        </div>
        </>
    );
};
export default Interprete;