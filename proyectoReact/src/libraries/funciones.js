"use strict"

const generarVerduraAleatorio = () => {
  // Listas de verduras
  let verduras = [
    "Acelga",
    "Ajo",
    "Apio",
    "Berro",
    "Berenjena",
    "Calabaza",
    "Cebolla",
    "Coliflor",
    "Chayote",
    "Chícharo",
    "Col",
    "Colifrol",
    "Chile poblano",
    "Ejote",
    "Elote",
    "Espinaca",
    "Jitomate",
    "Lechuga",
    "Pepino",
    "Rábano",
    "Nopales",
    "Verdolagas",
    "Tomate",
    "Zanahoria",
  ];

  // Devolver una verdura aleatoria
  return verduras[Math.floor(Math.random() * verduras.length)];
};

const generarFrutaAleatorio = () => {
  // Listas de frutas
  var frutas = [
    "Manzana",
    "Plátano",
    "Fresa",
    "Uva",
    "Kiwi",
    "Naranja",
    "Mango",
    "Pera",
    "Cereza",
    "Sandía",
    "Piña",
    "Melón",
    "Limón",
    "Coco",
    "Granada",
    "Mandarina",
    "Fruta de la pasión",
    "Frambuesa",
    "Papaya",
    "Melocotón",
  ];

  // Devolver una fruta aleatoria
  return frutas[Math.floor(Math.random() * frutas.length)];
};
export {generarFrutaAleatorio,generarVerduraAleatorio};