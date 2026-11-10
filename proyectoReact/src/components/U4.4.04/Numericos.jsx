import generarAleatorio from "./Biblioteca/GenerarAleatorio";

const Numericos =()=>{
const referencia=useRef(null);

const añadirElementoAlInner=(referencia)=>{
referencia.current.innerHTML=`${referencia.current.innerHTML}<li>El numero aleatorio es : ${generarAleatorio()}</li>`;
};
const añadirElemento=(referencia)=>{
let li =document.createElement('li');
let texto=document.createTextNode(generarAleatorio());
li.appendChild(texto);
referencia.current.appendChild(li);
};
const borrarReferencia=(referencia)=>{
  referencia.current.innerHTML="";
};
return (
    <>
    <div>
   <button onClick={()=>añadirElemento(referencia)}>Añadir numerico</button>
    <ol ref={referencia}>
    </ol>
    </div>
    <button onClick={()=>añadirElementoAlInner(referencia)}>Otro ejemplo</button>
    <button onclick={()=>{borrarReferencia(referencia)}}>borrar numeros</button>
    </>
)



}
export default Numericos;