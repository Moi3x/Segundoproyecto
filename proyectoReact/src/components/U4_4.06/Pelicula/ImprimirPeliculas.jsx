import datos from "../../../data/Peliculas.json";
import Pelicula from "./Peliculas.jsx";

const ImprimirPeliculas = () => {
  return (
    <div>
      {datos.peliculas.map((pelicula) => (
        <Pelicula key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default ImprimirPeliculas;