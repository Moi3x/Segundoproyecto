import { Link, Outlet, } from "react-router-dom";
import Cabecera from "../estructura/Cabecera";
const estilos = {
    header: {
        backgroundColor: "#222",
        padding: "20px",
        color: "white"
    },
    logo: {
        fontSize: "25px",
        fontWeight: "bold",
        marginBottom: "15px"
    },
    lista: {
        display: "flex",
        gap: "25px",
        listStyle: "none",
        padding: "0",
        margin: "0",
        alignItems: "center"
    },
    enlace: {
        color: "white",
        textDecoration: "none"
    },
    contacto: {
        color: "white",
        textDecoration: "none"
    },
    acercade: {
        color: "white",
        textDecoration: "none"
    },
    productos: {
        color: "white",
        textDecoration: "none"
    },
    peliculas: {
        color: "white",
        textDecoration: "none"
    }
};
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
                <Link to="/paginaspeliculas" style={estilos.peliculas}>
                Pagina Pelicula
                </Link>
              <li>
                <Link to="/paginaspeliculas/peliculas" style={estilos.peliculas}>
                Peliculas
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