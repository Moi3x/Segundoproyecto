import { Outlet,Link } from "react-router-dom"
import Pelicula from "./Pelicula/Peliculas"

const PaginaPeliculas =()=>{

return (

<>

<h1> Bienvenido a la pagina de peliculas</h1>
<br></br>
    <Link to="/paginapeliculas/imprimirpeliculas">
    Peliculas
    </Link>
    <Outlet/>
</>


)

}
export default PaginaPeliculas;
