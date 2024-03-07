function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

  // array.pop();
  let longitudArray = array.length;
  return array[longitudArray - 1];
}

module.exports = devolverUltimoElemento;
