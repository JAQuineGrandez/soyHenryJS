function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  const resultado = arrayOfStrings.filter(function (elemento) {
    return elemento[0] === "a";
  });

  return resultado;
}

module.exports = filter;
