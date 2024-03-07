function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  return numero.toString() === numero.toString().split("").reverse().join("")
    ? "Es capicua"
    : "No es capicua";
}

console.log(capicua(12321));
console.log(capicua(1111));
console.log(capicua(105217));
console.log(capicua(7878700));
