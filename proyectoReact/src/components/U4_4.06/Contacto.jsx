import { useNavigate } from "react-router-dom"
import React from "react";
const Contacto=()=>{
    const navegar =useNavigate();
    return(
        <>
        <h2>Esta Pagina puede encontrar informacion sobre el usuario</h2>
            <br/><br/>
            <p>Si desea mas informacion pongase en contacto con rascapicapica@gmail.asistence.es</p>
            <button 
            onClick={()=>{
                navegar("/");
            }

            }>Volver al Inicio.</button>


        </>
    );
};
export default Contacto;
