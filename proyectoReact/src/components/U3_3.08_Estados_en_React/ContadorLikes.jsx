import React, {useState} from "react";

const ContadorLikes =()=>{
    const likes=0;
    const dislikes=0;

const [contadorLikes,setContadorLikes]=useState(likes);
const [contadorDisLikes,setContadorDisLikes]=useState(dislikes);

const sumarLikes=()=>{
setContadorLikes(contadorLikes+1);
}
const restarLikes=()=>{

   contadorLikes > 0 ? setContadorLikes(contadorLikes-1) : 0;
}
const sumarDisLikes=()=>{
    setContadorDisLikes(contadorDisLikes+1);
}
const restarDisLikes=()=>{
  
  contadorDisLikes > 0 ?  setContadorDisLikes(contadorDisLikes-1): 0;
}
return (
    <>
    <div className="center">
    <h1>CONTADOR EJERCICIO LIKES && DISLIKES</h1>
    <br></br>
    <div className="butonera">
    <button onClick={sumarLikes}>SumarLikes</button>
    <button onClick={restarLikes}>Restar likes</button>
    <button onClick={sumarDisLikes}>SumarDislikes</button>
    <button onClick={restarDisLikes}>restarDislikes</button>
    </div>
    <div className="codigo-java">
        <p>Likes:{contadorLikes}</p>
        <p>dislikes:{contadorDisLikes}</p>
    </div>
    </div>
    </>
)

}
export default ContadorLikes;