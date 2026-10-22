import React from "react";

const Boton =({nombre , funcion})=>{
    return (
        <button className="Boton" 
        onClick={()=>{
            funcion();
        }}
        >{nombre}
        </button>
    );
};
export default Boton;