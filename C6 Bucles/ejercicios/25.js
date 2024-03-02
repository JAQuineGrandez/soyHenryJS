function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // Divide la frase en un array de palabras
  let palabras = string.split(" ");

  if (palabras.length === 1) {
    return string === string.split("").reverse().join("");
  }

  // Invierte el orden de las palabras en el array
  let palabrasInvertidas = palabras.reverse();

  // Une las palabras invertidas en una sola cadena separadas por espacio
  let fraseInvertida = palabrasInvertidas.join(" ");

  return fraseInvertida === string;
}

module.exports = esPalindromo;
