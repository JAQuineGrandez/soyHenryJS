function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let acumulador = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    acumulador += resultadosTest[i];
  }

  let promedio = acumulador / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
