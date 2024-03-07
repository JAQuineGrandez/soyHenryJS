function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // Si el array está vacío, todos los elementos son iguales por definición
  if (array.length === 0) return true;

  // Comparamos cada elemento con el primero
  let primerElemento = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== primerElemento) {
      return false; // Tan pronto como encontramos un elemento diferente, retornamos false
    }
  }

  return true;
}

module.exports = todosIguales;
