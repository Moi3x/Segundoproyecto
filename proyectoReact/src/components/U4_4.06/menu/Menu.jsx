import { Link, Outlet, } from "react-router-dom";
import Cabecera from "../estructura/Cabecera";
const Menu = () => {
  return (
    <>
      <div className="Enlaces">
        <header style={estilos.header}>
          <div style={estilos.logo}>
            <Link to="/" style={estilos.enlace}>
              Inicio
            </Link>
          </div>
          <p>Insertar aqui el css bonito el stilo</p>
          <nav>
            <ul style={estilos.lista}>
              <li>
                <Link to="/" style={estilos.enlace}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/contacto" style={estilos.contacto}>
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/acerdade" style={estilos.acercade}>
                  AcercaDe....
                </Link>
              </li>
              <li>
                <Link to="/productos" style={estilos.productos}>
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/Pelicula/Peliculas" style={estilos.paginapeliculas}>
                Pagina Pelicula
                </Link>
              </li>
            
              //continuo asi con lo demas
            </ul>
          </nav>
          <Outlet/>
        </header>
      </div>
    </>
  );
};

export default Menu;