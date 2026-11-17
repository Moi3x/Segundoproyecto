import React from "react";
import "./interprete.css";
import Peliculas from "../../../data/Peliculas.json";

const Interprete = (props)=> {
    //Javascrip vanilla

    return (
        //JSX
        <>
        <div className='interprete-contenedor'>
        <h2> {props.nombre}</h2>
        <div>
        <img src={props.cartelera} alt={props.nombre}/>
        </div>
        <div>
            <h2> {props.resumen}</h2>
        </div>
        </div>
        </>
    );
};
export default Interprete;