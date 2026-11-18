import { renderizarCatalogo } from "./catalogo";
import { eventosIniciales } from "./data/eventos";
const id=document.getElementById("catalogoEventos");
const llamarCatalogo=renderizarCatalogo(eventosIniciales,id);


