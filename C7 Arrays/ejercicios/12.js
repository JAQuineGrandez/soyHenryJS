function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  const mayusculas = array.map(function (elemento) {
    return elemento.toUpperCase();
  });

  return mayusculas;
}

module.exports = convertirStringAMayusculas;
