function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  const longitudMatriz = array.length;
  const indiceAleatorio = Math.floor(Math.random() * longitudMatriz);
  const elementoAleatorio = array[indiceAleatorio];

  return elementoAleatorio;
}

module.exports = obtenerElementoAleatorio;
