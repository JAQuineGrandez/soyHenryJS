function decode(message) {
  const pila = [];
  let cadena = "";
  let frase = "";
  let tokens = [];

  for (let indice = 0; indice < message.length; indice++) {
    const caracter = message[indice];
    if (caracter === "(") {
      pila.push(caracter);

      if (cadena.length > 0) {
        tokens.push(cadena);
        cadena = "";
      }
    } else if (caracter === ")") {
      let longitudPila = pila.length;

      if (longitudPila === 1) {
        tokens.push(cadena);
        const tokensInvertido = tokens.reverse().map((cadena) => {
          return cadena.split("").reverse().join("");
        });
        cadena = tokensInvertido.join("");
        frase += cadena;
        tokens = [];
      } else {
        if (pila[longitudPila - 1] === "(") {
          cadena = cadena.split("").reverse().join("");
          tokens.push(cadena);
        }
      }
      cadena = "";
      pila.pop();
    } else {
      if (pila.length > 0) {
        cadena += caracter;
      } else {
        frase += caracter;
      }
    }
  }
  return frase;
}

console.log(decode("sa(u(cla)atn)s hola (odnum) (olleh) (dlrow)"));
