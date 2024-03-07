function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  if (array.length === 0) return 0;

  // Usamos reduce para encontrar el índice del número más grande
  let indiceMayor = array.reduce(function (
    indiceMax,
    numeroActual,
    indice,
    array
  ) {
    if (numeroActual > array[indiceMax]) {
      return indice;
    } else {
      return indiceMax;
    }
  },
  0);

  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
