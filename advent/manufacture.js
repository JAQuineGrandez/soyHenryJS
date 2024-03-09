function manufacture(gifts, materials) {
  const array = [];
  for (let palabra of gifts) {
    let nuevaPalabra = "";
    for (let letra of palabra) {
      if (materials.indexOf(letra) !== -1) {
        nuevaPalabra += letra;
      }
    }
    if (nuevaPalabra === palabra) array.push(palabra);
  }

  return array;
}

const gifts = ["libro", "ps5"];
const materials = "psli";

console.log(manufacture(gifts, materials));
