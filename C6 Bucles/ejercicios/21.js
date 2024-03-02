function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  // Si el número es menor o igual a 0, no es potencia de 2
  if (numero <= 0) {
    return false;
  }

  // Mientras el número sea divisible por 2, dividirlo por 2
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false; // Si en algún momento no es divisible por 2, no es potencia de 2
    }
    numero /= 2;
  }

  return true; // Si llegamos aquí, el número es potencia de 2
}

module.exports = esPotenciaDeDos;
