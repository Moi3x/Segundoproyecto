import { Link } from "react-router-dom";
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
              //continuo asi con lo demas
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Menu;