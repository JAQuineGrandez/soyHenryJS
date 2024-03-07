function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let suma = arrayOfNums.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
  }, 0);

  return suma;
}

module.exports = agregarNumeros;
