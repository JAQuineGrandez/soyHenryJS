function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let mayusculas = "";
  let minusculas = "";

  for (let caracter of string) {
    if (caracter === caracter.toUpperCase()) {
      mayusculas += caracter;
    } else {
      minusculas += caracter;
    }
  }

  return `${mayusculas}${minusculas}`;
}

console.log(capToFront("DESArrollaDOR"));
