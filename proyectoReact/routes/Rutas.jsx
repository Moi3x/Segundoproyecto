import { Routes, Route } from "react-router-dom";
import Contacto from "../src/components/U4_4.06/Contacto.jsx";
import AcercaDe from "../src/components/U4_4.06/AcercaDe.jsx";
import Error from "../src/components/U4_4.06/Error.jsx";
import Inicio from "../src/components/U4_4.06/Inicio.jsx";
import Productos from "../src/components/U4_4.06/Productos.jsx";
import PaginaPeliculas from "../src/components/U4_4.06/PaginaPeliculas.jsx";
import ImprimirPeliculas from "../src/components/U4_4.06/Pelicula/ImprimirPeliculas.jsx";

// route / ya me carga la pagina no hace falta llamar al componente inicio
const Rutas = () => {
  return (
    <>
      <div className="Rutas">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/paginapeliculas" element={<PaginaPeliculas />}>
            <Route path="imprimirpeliculas" element={<ImprimirPeliculas />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};
export default Rutas;
