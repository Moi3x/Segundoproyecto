import React,{useState} from 'react';
import { generarFrutaAleatorio } from '../../libraries/funciones';
import { generarVerduraAleatorio } from '../../libraries/funciones';
import VerdurasError from './VerdurasError';
import VerdurasListado from './VerdurasListado';
import VerdurasListadoElemento from './VerdurasListadoElemento';
import Boton from './Boton';
const Verduras = () => {
  const listadoInicial = ["Lechuga", "Tomate", "Pimiento"];
  const [listado, setListado] = useState(listadoInicial);
const limpiar = ()=>{
    setListado([]);
};
const reiniciar = ()=> {
    setListado(listadoInicial);
};
const añadir = ()=>{
  setListado([...listado,generarVerduraAleatorio()]);
};
const borrar = (verdura)=>{
//Comprobar si tiene valores.
//listado.length =0 ? : <VerdurasError/>  
const nuevasVerduras = listado.filter((v,i,a)=>{
    return verdura !==v;
});
setListado(nuevasVerduras);
};
  return (
    <>
      <h2>Ejemplo con verduras</h2>
      <div className="butonera">
      <Boton nombre='Limpiar' function={limpiar} activo={listado.length}/>  
      <Boton nombre='Reiniciar' function={reiniciar} activo={listado.length}/> 
      <Boton nombre='Añadir' function={añadir}activo={listado.length}/>
      <Boton nombre='Borrar' 
        function={()=>{
          const verduraEliminada = generarVerduraAleatorio();
          borrar(verduraEliminada);
          console.log(verduraEliminada);
       }}
      />
      </div>
    
      <div>
        {Array.isArray(listado) && listado.length
          ? (<VerdurasListado datos ={listado}/>
           ) : (
              <VerdurasError/>
           )  }
      </div>
    </>
  );
};
export default Verduras;