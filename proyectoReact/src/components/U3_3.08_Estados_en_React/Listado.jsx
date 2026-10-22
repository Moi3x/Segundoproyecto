import React, { useState } from "react";
import Boton from "./Boton";
import ListadoNumeros from "./ListadoNumeros";
import ListadoNumerosError from "./ListadoNumerosError";
import ListadoNumerosElemento from "./ListadoNumerosElemento";
const Listado = () => {
  const numerosInicial = [];
  const [numeros, setNumeros] = useState(numerosInicial);
  const generar = () => {
    let nuevoNumero = Math.floor(Math.random() * 100) + 1;
    // cuando no se cumpla entra
    if (!numeros.includes(nuevoNumero)) {
      setNumeros([...numeros, nuevoNumero]);
    }
  };
  const eliminar = () => {
    setNumeros([]);
  };

  return (
    <>
    <div className="contenedor-numeros">
      <h2>Numeros listados: </h2>
      <div className="botonera">
        <Boton nombre="generar" funcion={generar} />
        <Boton nombre="eliminar" funcion={eliminar} />
      </div>
      <div>
        {Array.isArray(numeros) && numeros.length ? (
          <ListadoNumeros datos={numeros} />
        ) : (
          <ListadoNumerosError />
        )}
      </div>
    </div>
    </>
  );
};
// ME FALTA HACERLO A LO PRO Y CON EL CODIGO  COMO  VERDURAS

export default Listado;
