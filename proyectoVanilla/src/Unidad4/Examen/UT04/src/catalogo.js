"use strict"
import "../src/css/estilo.css";

const renderizarCatalogo = (eventos, id) => {
    const contenedor = document.getElementById(id);
    if (comprobarArray(eventos, id)) {
        vaciarContenedor(contenedor);
        for (let i = 0; i < eventos.length; i++) {
            crearTarjetas(eventos[i], contenedor);
        }
    }
}

const comprobarArray = (eventos, id) => {
    const comprobarContenedor = document.getElementById(id);
    const texto = "Error el array esta vacio";

    if (Array.isArray(eventos)) {
        if (comprobarContenedor) {
            if (eventos.length > 0) {
                return true;
            } else {
                comprobarContenedor.insertAdjacentHTML(
                    "beforeend",
                    `<p>${texto}</p>`          // ✅ backticks
                );
                return false;
            }
        } else {
            console.log("El contendor no existe");
            return false;
        }
    } else {
        console.log("El array no es valido");
        return false;
    }
}

const vaciarContenedor = (contenedor) => {
    if (contenedor) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }
}

const crearTarjetas = (evento, contenedor) => {   // ✅ parámetro "contenedor"
    const crearTarjeta = document.createElement("div");
    const crearEncabezado = document.createElement("header");

    const texto = [evento.nombre, evento.municipio, evento.recinto, evento.categoria, evento.fecha];
    for (let i = 0; i < texto.length; i++) {
        const crearParrafo = document.createElement("p");
        const crearTextoEncabezado = document.createTextNode("");
        crearTextoEncabezado.textContent = texto[i];
        crearParrafo.appendChild(crearTextoEncabezado);
        crearEncabezado.appendChild(crearParrafo);
    }
    crearTarjeta.appendChild(crearEncabezado);

    const crearListaNoOrdenada = document.createElement("ul");
    for (let i = 0; i < evento.servicios.length; i++) {
        const crearLista = document.createElement("li");
        const crearTextoServicios = document.createTextNode("");
        crearTextoServicios.textContent = evento.servicios[i];
        crearLista.appendChild(crearTextoServicios);
        crearListaNoOrdenada.appendChild(crearLista);
    }
    crearTarjeta.appendChild(crearListaNoOrdenada);

    if (evento.precio === 0) {                    // ✅ if, no iif
        const crearParrafoDestacado = document.createElement("p");
        const crearTextoDestacado = document.createTextNode("");
        const textoGratis = "Entrada Gratuita";
        crearTextoDestacado.textContent = textoGratis;
        crearParrafoDestacado.appendChild(crearTextoDestacado);
        crearTarjeta.appendChild(crearParrafoDestacado);
    } else {
        const precioTextoElemento = document.createElement("p");
        const precioTexto = document.createTextNode("");
        const precio = evento.precio.toFixed(2);
        precioTexto.textContent = `${precio} €`;
        precioTextoElemento.appendChild(precioTexto);
        crearTarjeta.appendChild(precioTextoElemento);
    }

    if (evento.destacado === true) {
        crearTarjeta.classList.add("destacado");
    }

    contenedor.appendChild(crearTarjeta);         // ✅ "contenedor" coincide
}

const carteleraCompleta = (eventos, id) => {
    const botonCartelera = document.querySelector('[name="Ver Cartelera Completa"]');
    if (botonCartelera) {
        botonCartelera.onclick = () => {
            renderizarCatalogo(eventos, id);
        };
    }
}

export { comprobarArray, renderizarCatalogo, vaciarContenedor, crearTarjetas, carteleraCompleta };