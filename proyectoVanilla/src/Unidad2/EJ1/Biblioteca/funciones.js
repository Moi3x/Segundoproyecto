"use strict";
/* * EJERCICIO 1 *
* Calcula el índice de masa corporal (IMC) a partir de la masa 
* y la altura de una persona. */
/** * Calcula el IMC de una persona. * 
 * * @param {number} masa - Masa de la persona en kilogramos. 
 * * @param {number} altura - Altura de la persona en metros. *
 *  @returns {number} El índice de masa corporal calculado. */
function calcularIMC(masa, altura) {
  return masa / (altura * altura);
}
/**
 * Calcula la media de una lista de numeros usando `arguments`.
 * Al no declarar parametros , acepta cualquier cantidad valores.
 * @returns {number} la media aritmetica de todos los argumentos recibidos.
 */
function mediaEquipo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma / arguments.length;
}
function equipoMayor() {
  let mediaMasAlta = 0;
  let mejorEquipo = "";
  let empate = false;

  for (let i = 0; i < arguments.length; i++) {
    const nombre = arguments[i];
    const media = arguments[i + 1];
    if (media > mediaMasAlta) {
      mediaMasAlta = media;
      mejorEquipo = nombre;
      empate = false;
    } else if (media === mediaMasAlta) {
      empate = true;
    }
  }
  return { mejorEquipo, mediaMasAlta, empate };
}
function multiplicarNumero(num1, num2) {
  let comodin = num2;
  let cadena = "";

  for (let i = 1; i <= num1; i++) {
    cadena += comodin + " ";

    comodin = comodin * 2;
  }
  return cadena.trim();
}

//parametros por defecto
//nombreProducto=Producto generico", precio=100,impuesto=21

function impuestoProducto(nombreProducto, precio, impuesto) {
  nombreProducto =
    nombreProducto === "" || nombreProducto === undefined
      ? "Producto generico"
      : nombreProducto;
  precio = precio === undefined || precio == null ? 100 : precio;
  impuesto = impuesto === undefined || impuesto == null ? 21 : impuesto;
  if (isNaN(precio) || isNaN(impuesto)) {
    console.error(
      "Los numeros introducidos en el precio o el impuesto no son validos",
    );
    return;
  }
  const precioFinal = precio + (precio * impuesto) / 100;

  return `${nombreProducto} Precio: ${precio} Iva: ${precioFinal}`;
}

function numeroMeses(numero) {
  if (
    numero === null ||
    typeof numero !== "number" ||
    Number.isNaN(numero) ||
    !Number.isInteger(numero) ||
    numero <= 0 ||
    numero > 12
  ) {
    console.error("El numero introducido esta fuera de rango o es incorrecto");
    return;
  }
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return meses[numero - 1];

  /*  switch(numero){
        case 1:
            return "Enero";
        case 2:
           return  "Febrero";
        case 3:
            return "marzo";
        case 4:
            return "abril";
        case 5:
            return "mayo";
        case 6:
            return "junio" ;
        case 7:
            return "julio";
        case 8:
            return "agosto";
        case 9:
            return "septiembre";
        case 10:
            return "octubre";
        case 11: 
            return "noviembre";
        case 12:
            return "diciembre";
        }*/
}
function esNumero(numero) {
  return typeof numero === "number" && !Number.isNaN(numero);
}
function comprobarParidad(numero) {
  return numero % 2 == 0 ? "par" : "impar";
}
function comprobarSigno(numero) {
  if (numero > 0) {
    return "positivo";
  }
  if (numero < 0) {
    return "negativo";
  }
  return "cero";
}
function esPrimo(numero) {
  if (!Number.isInteger(numero) || numero < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}
function analisisNumerico(numero) {
  if (!esNumero(numero)) {
    console.error("No es un numero");
    return null;
  }
  return {
    numero: numero,
    paridad: comprobarParidad(numero),
    signo: comprobarParidad(numero),
    esPrimo: esPrimo(numero),
  };
}
function mostrarAnalisis(resultado) {
  console.log(`========== EJERCICIO 2 ==========`);
  console.log(`Número analizado: ${resultado.numero}`);
  console.log(`Paridad: ${resultado.paridad}`);
  console.log(`Signo: ${resultado.signo}`);
  console.log(`Primo: ${resultado.esPrimo ? "Sí" : "No"}`);
  console.log("=================================");
}
function mostrarMultiplosDeTres(numeroLimite) {
  if (!Number.isInteger(numeroLimite) || numeroLimite <= 0) {
    console.log("Error: Debes introducir un numero entero positivo");
    return;
  }
  console.log("========== EJERCICIO 3 ==========");
  console.log(`Límite introducido: ${numeroLimite}`);
  console.log("Múltiplos de 3:");
  // Comenzamos en 3 y avanzamos de tres en tres para obtener directamente
  // los múltiplos de 3 sin comprobar el resto de números.
  for (let numero = 3; numero <= numeroLimite; numero += 3) {
    console.log(numero);
  }
}
function calcularPotencia(base, exponente) {
  if (!Number.isInteger(base) || !Number.isInteger(exponente)) {
    console.log("ERROR: La base y el exponente deben ser números enteros.");
    return;
  }

  let resultado = 1;
  let contador = 0;

  if (exponente >= 0) {
    while (contador < exponente) {
      resultado *= base;
      contador++;
    }
  } else {
    while (contador < Math.abs(exponente)) {
      resultado *= base;
      contador++;
    }
    resultado = 1 / resultado; // ← dentro del else
  }
  return resultado;
}
function calcularMedia() {
  if (arguments.length === 0) {
    console.error("ERRROR DEBES INTRODUCIR ALMENOS 1 NUMERO");
    return null;
  }
  let suma = 0;
  for (let posicion = 0; posicion < arguments.length; posicion++) {
    const numero = arguments[posicion];
    if (!Number.isInteger(numero) || numero < 0) {
      console.error(
        `Error : el valor situado en la posicion ${posicion + 1}` +
          `debe ser un numero  entero positivo o cero `,
      );
      return;
    }
    suma += numero;
  }
  return suma / arguments.length;
}
function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  return num1 / num2;
}
function calcularModulo(num1, num2) {
  return num1 % num2;
}
function calculadora(num1, num2, operador) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    console.error("Error: Los dos operadores deben ser numeros enteros");
    return;
  }
  const operadoresValidos = ["+", "-", "/", "%", "*"];

  if (!operadoresValidos.includes(operador)) {
    console.error("Operador erroneo ");
    return;
  }
  if ((operador === "/" || operador === "%") && num2 === 0) {
    console.error("ERROR no se puede dividir entre 0");
    return;
  }
  let resultado;
  switch (operador) {
    case "+":
      resultado = sumar(num1, num2);
      break;
    case "-":
      resultado = resta(num1, num2);
      break;
    case "/":
      resultado = dividir(num1, num2);
      break;
    case "%":
      resultado = calcularModulo(num1, num2);
      break;
  }
  return resultado;
}

export {
  calcularIMC,
  mediaEquipo,
  equipoMayor,
  multiplicarNumero,
  impuestoProducto,
  numeroMeses,
  esNumero,
  comprobarParidad,
  comprobarSigno,
  esPrimo,
  analisisNumerico,
  mostrarAnalisis,
  mostrarMultiplosDeTres,
  calcularPotencia,
  calcularMedia,
  calculadora,
};
