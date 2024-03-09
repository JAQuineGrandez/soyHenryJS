function findNaughtyStep(original, modified) {
  // Code here

  if (original.length === modified.length) {
    if (original === modified) return "";
  }

  if (original.length < modified.length) {
    for (let caracter in modified) {
      if (original[caracter] !== modified[caracter]) {
        return modified[caracter];
      }
    }
  } else {
    for (let caracter in original) {
      if (original[caracter] !== modified[caracter]) {
        return original[caracter];
      }
    }
  }
}

const original = "xxxx";
const modified = "xxoxx";

console.log(findNaughtyStep(original, modified)); //f
