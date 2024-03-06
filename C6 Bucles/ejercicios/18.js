//Cambiar

function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // Si a es mayor que b, intercambiar los valores de a y b
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  // Si a es negativo y b es positivo, el resultado debe ser 0
  if (a < 0 && b > 0) {
    return 0;
  }

  let resultado = 1;
  for (let i = a; i <= b; i++) {
    resultado *= i;
  }
  return resultado;
}

module.exports = productoEntreNúmeros;
