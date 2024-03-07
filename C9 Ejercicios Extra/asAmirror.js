function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  const array = frase.split(" ");
  const reverse = array.map((word) => word.split("").reverse().join(""));
  return reverse.join(" ");
}

console.log(asAmirror("I love you so much!"));
console.log(asAmirror("The Henry Challenge is close!"));
