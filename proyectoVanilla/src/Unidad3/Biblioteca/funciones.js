"use strict";
export {
  validarNumeros,
  sumaParametros,
  validarNumero2,
  multiplicarNumero,
  tablas,
};

//EJERCICIO 1 --------------------------

function validarNumeros(...numeros) {
  if (numeros.length <= 2) {
    console.error("Error: Se esperaban al menos 3 números.");
    return false;
  }
  const comprobarNumeros= (num=[]) =>{
    if(Array.isArray(num)){
      return num.every((acumulador,indice,a)=>{
        return !isNaN(acumulador);
      });
    } 
  };
  if (!numeros.every((numero) => typeof numero === "number" && !Number.isNaN(numero),))  {
    console.error("Error: Se esperaba un número válido.");
    return false;
  }
  return true;
}

function sumaParametros(...numeros) {
  if (validarNumeros(...numeros) === true) {
                        //Entra una funcion y funcion
    //const sumarFeos=numeros.every((numero,indice,total)=>( ));
     const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
      return `La suma de los números es: ${suma}`;
  } else {
    return false;                  
   
  }
};
//---------------------------------
// el every es para un array
//EJERCICIO 2 ---------------------
function validarNumero2(numero2) {
  if (!Number.isInteger(numero2) && numero2 <= 2) {
    console.error("Error: Se esperaba un número entero mayor que 2.");
    return false;
  }
  return true;
}
function multiplicarNumero(numero) {
  console.log(`---Tabla de ${numero}----`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
}
function tablas(numero, multiplicar) {
  if (!validarNumero2(numero)) return;
  for (let i = numero; i >= 2; i--) {
    multiplicarNumero(i);
  }
  // Implementación de la multiplicación de tablas
}
//---------------------------------------------------
// Ejercicio 3
//------------------------------------------------------

function asignarFacturas(...facturas){
  return [...facturas];
}

function asignarPropinas(facturaREAL){
  let propinasREAL = [];
  for(let i = 0; i < facturaREAL.length; i++){
    if(facturaREAL[i] < 50){
      propinasREAL[i] = (facturaREAL[i] * 20) / 100;
    }
    if(facturaREAL[i] >= 50 && facturaREAL[i] <= 200){
      propinasREAL[i] = (facturaREAL[i] * 15) / 100;
    }
    if(facturaREAL[i] > 200){
      propinasREAL[i] = (facturaREAL[i] * 10) / 100;
    }
  }
  return propinasREAL;
}

function asignarFacturaFinal(facturaREAL, propinasREAL){
  let arrayAuxiliar = [];
  for (let i = 0; i < facturaREAL.length; i++){
    arrayAuxiliar[i] = facturaREAL[i] + propinasREAL[i]; // ✅ Corregido
  }
  return arrayAuxiliar;
}

function calculadoraDePropinas(...facturas){
  const facturaREAL = asignarFacturas(...facturas);
  const propinasREAL = asignarPropinas(facturaREAL);
  const facturaFinal = asignarFacturaFinal(facturaREAL, propinasREAL);
  
  return { facturaREAL, propinasREAL, facturaFinal }; // ✅ Añadido
}

