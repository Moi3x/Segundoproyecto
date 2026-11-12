import React from "react";
import verduras from "./components/U3_useState/Verduras";
import Listado from "./components/U3_3.08_Estados_en_React/Listado";
import ContadorLikes from "./components/U3_3.08_Estados_en_React/ContadorLikes";
import Numericos from "./components/U4.4.04/Numericos";
import { Routes } from "react-router-dom";
import Inicio from "./components/U4_4.06/Inicio";
import Rutas from "./routes/Rutas.jsx";
import Contenedor from "./components/U4_4.06/estructura/Contenedor.jsx";
import Cabecera from "./components/U4_4.06/estructura/Cabecera.jsx";
import Principal from "./components/U4_4.06/estructura/Principal.jsx";
import Pie from "./components/U4_4.06/estructura/Pie.jsx";
// uuid cryptorandomuuid  y tambien set attribute = boton onclick bla bla

// usar link  y navigate
function App() {
  return (
    <>
      <section id="center">
        <Contenedor>
          <Cabecera />
          <Principal >
          <div id="rutas">
            <Rutas />
          </div>
          </Principal>
          <Pie/>
        </Contenedor>
      </section>
    </>
  );
}
{
  /* <Contenedor>
        <Interprete 
          nombre='Feo' 
          imagen='https://static.wikia.nocookie.net/wadguia/images/c/c3/Doom_cover.png/revision/latest?cb=20160522155501'
        >
          sdsafasfafa
        </Interprete>
      <Interprete nombre='Fea'
          imagen='https://static.wikia.nocookie.net/wadguia/images/c/c3/Doom_cover.png/revision/latest?cb=20160522155501'
     >
wwqdwqdqwd
      </Interprete>
      </Contenedor>*/
}
{
  /* <Pelicula
          nombre='Resident Evil'
          imagen='https://pimcore-content.cinepolis.com/assets/Espa%C3%B1a/Tickets/Movies/ResidentEvil/Es/720x1022_19.jpg'
          cartelera='yelmo cines'
          direccion='ssafas'
          resumen='va de zombis'
        >
          qwfwqfqwfqw
        </Pelicula>*/
}
{
  /*<div className="U3_08_ESTADO">
          <ContadorLikes></ContadorLikes>
        </div>
          */
}

export default App;
