import { useNavigate } from "react-router-dom"

const AcercaDe=()=>{
    const navegar =useNavigate();
    return(
        <>
        <div className="acercaDe">
            <p>fdsfsd</p>
            <br/><br/>
        <button 
        onClick={()=>{

            navegar("/");

        }}>Volver al inicio</button>

        </div>
        
        
        </>
    );
};
export default AcercaDe;