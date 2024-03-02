function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // use for para recorrer el string

  // let cadena = "";

  // for (let i = texto.length - 1; i >= 0; i--) {
  //   cadena += texto[i];
  // }

  // return cadena;
  return texto.split("").reverse().join("");
}

module.exports = invertirTexto;
