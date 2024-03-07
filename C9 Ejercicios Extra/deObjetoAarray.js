function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  const array = [];

  for (let item in objeto) {
    array.push([item, objeto[item]]);
  }

  return array;
}

console.log(deObjetoAarray({ x: 1, y: 2 }));
console.log(deObjetoAarray({ x: 10, y: 25 }));
