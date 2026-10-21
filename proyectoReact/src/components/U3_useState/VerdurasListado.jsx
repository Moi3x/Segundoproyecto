import VerdurasListadoElemento from "./VerdurasListadoElemento";
const VerdurasListado = ({datos})=>{
 // const {datos}= props; en vez de props.datos.map seria simplemente props en (props)props.datos.map
    return datos.map((v, i, a) => {
              return <VerdurasListadoElemento key={i} nombre={v} indice={i}/>;
        });  
    };
export default VerdurasListado;