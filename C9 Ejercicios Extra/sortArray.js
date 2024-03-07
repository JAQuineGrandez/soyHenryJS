function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  return arrayOfStrings.sort(function (a, b) {
    return a.length - b.length;
  });
}

console.log(sortArray(["You", "are", "beautiful", "looking"]));
console.log(sortArray(["pera", "manzana", "alcaucil", "papa"]));
