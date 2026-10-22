import React from "react";
import ListadoNumerosElemento from "./ListadoNumerosElemento";

const ListadoNumeros =({datos})=>{
    return datos.map((v,i,a)=>{
        return <ListadoNumerosElemento key={i} nombre={v} indice={i}/>;
    });
};

export default ListadoNumeros;