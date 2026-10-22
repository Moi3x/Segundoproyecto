import React from "react";
const ListadoNumerosElemento = ({ nombre, indice }) => {
  return (
    <p>
      <b>
        {indice + 1}.-{nombre}
      </b>
    </p>
  );
};
export default ListadoNumerosElemento ;
