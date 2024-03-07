function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let resultados = [];

  // Iterar desde 0 hasta 10
  for (let i = 0; i <= 10; i++) {
    // Multiplicar 6 por el índice del bucle y agregar el resultado al array
    resultados.push(6 * i);
  }

  return resultados;
}

module.exports = tablaDelSeis;
