function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // Convertir ambas palabras a minúsculas y eliminar los espacios en blanco
  /* const palabra1 = str1.toLowerCase().replace(/\s/g, "");
  const palabra2 = str2.toLowerCase().replace(/\s/g, "");

  // Verificar si las palabras tienen la misma longitud
  if (palabra1.length !== palabra2.length) {
    return false;
  }

  // Convertir las palabras en objetos de conteo de caracteres
  const conteo1 = {};
  const conteo2 = {};

  for (let letra of palabra1) {
    conteo1[letra] = (conteo1[letra] !== undefined ? conteo1[letra] : 0) + 1;
  }

  for (let letra of palabra2) {
    conteo2[letra] = (conteo2[letra] !== undefined ? conteo2[letra] : 0) + 1;
  }

  // Verificar si los conteos de caracteres son iguales
  for (let letra in conteo1) {
    if (conteo1[letra] !== conteo2[letra]) {
      return false;
    }
  }

  return true; */

  var str1Ord = str1.toLowerCase().split("").sort().join("");
  var str2Ord = str2.toLowerCase().split("").sort().join("");

  return str1Ord === str2Ord;
}

module.exports = esAnagrama;
