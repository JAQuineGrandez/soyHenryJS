function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  string = string.toLowerCase();

  //return string.replace(/a|b|c/g, "");

  const array = string.split("").filter((letra) => {
    return !(letra === "a" || letra === "b" || letra === "c");
  });

  return array.join("");
}

console.log(deleteAbc("abcefgh"));
console.log(deleteAbc("abc"));
console.log(deleteAbc("plural"));
console.log(deleteAbc("limon"));
