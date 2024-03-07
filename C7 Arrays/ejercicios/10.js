function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  const cadena = array.find((string) => string.length > 5);

  return cadena;
}

module.exports = obtenerPrimerStringLargo;
