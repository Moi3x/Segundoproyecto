import React, { useRef } from "react";
import Contenedor from "./Contenedor.jsx";
import Interprete from "./Interprete.jsx";
import Taquilla from "./Taquilla.jsx";
import Elenco from "./Elenco.jsx";
import "./peliculas.css";

const Peliculas = ({ pelicula }) => {
  const refElenco = useRef(null);
  const refTaquilla = useRef(null);
  const togleElenco =()=>{
    refElenco.current.classList.toggle("oculto");
  };
  const togleTaquilla =()=>{
    refTaquilla.current.classList.toggle("oculto");
  };
  return (
    <Contenedor>
      <Interprete
        nombre={pelicula.nombre}
        cartelera={pelicula.cartelera}
        resumen={pelicula.resumen}
      />
      <div className="acciones">
<button onClick={togleElenco}>Elenco</button>
<button onClick={togleTaquilla}>Taquilla</button>
<div ref={refTaquilla}className="contenedor-taquilla oculto">
    <Taquilla recaudacion={pelicula.recaudacion} />
      </div>
 </div>     
<div ref={refElenco} className="contenedor-elenco oculto">
<ul>
    {Array.isArray(pelicula.actores)&& pelicula.actores.length > 0 ? 
    (<Elenco actores={pelicula.actores}/>   
    ):(
    <li>no hay actores</li>
    )} 
</ul>
</div>
    </Contenedor>
  );
};
export default Peliculas;


// ME FALTA SABER HACER EL CSS DEL CONTENEDOR DEL INTERPRETE Y CSS DE LOS DEMAS ADEMAS DE EL FOR INTERNO DE ELENCO  Y LA REPRENSENTACIO N EN DINERO DE TAQUILLA.