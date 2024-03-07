function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  const multiplicados = array.map((elemento, indice) => {
    return elemento * indice;
  });

  return multiplicados;
}

module.exports = multiplicarElementosPorIndice;
