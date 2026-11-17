import { Outlet } from "react-router-dom"
import Pelicula from "./Pelicula/Peliculas"

const PaginaPeliculas =()=>{

return (

<>

<h1> Bienvenido a la pagina de peliculas</h1>





<Outlet/>

</>

)

}
export default PaginaPeliculas;
