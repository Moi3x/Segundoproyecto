import Interprete from "./components/Interprete";
import React from "react";
import Contenedor from "./components/Contenedor";
import Pelicula from "./components/Pelicula";
import verduras from "./components/U3_useState/Verduras";
import Listado from "./components/U3_3.08_Estados_en_React/Listado";
function App() {
  return (
    <>
      <section id="center">
        <p>Hola React</p>
        {/* <Contenedor>
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
      </Contenedor>*/}
        {/* <Pelicula
          nombre='Resident Evil'
          imagen='https://pimcore-content.cinepolis.com/assets/Espa%C3%B1a/Tickets/Movies/ResidentEvil/Es/720x1022_19.jpg'
          cartelera='yelmo cines'
          direccion='ssafas'
          resumen='va de zombis'
        >
          qwfwqfqwfqw
        </Pelicula>*/}
        <div className="U3_08_ESTADO">
          <Listado/>
        </div>
      </section>
    </>
  );
}

export default App;
