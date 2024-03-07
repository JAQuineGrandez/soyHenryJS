function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  /*  return array1.length > array2.length
    ? array1.filter((elemento) => array2.includes(elemento))
    : array2.filter((elemento) => array1.includes(elemento)); */

  const arrayMayor = array1.length > array2.length ? array1 : array2;
  const arrayMenor = array1.length > array2.length ? array2 : array1;
  return arrayMenor.filter((elemento) => arrayMayor.includes(elemento));
}

console.log(buscoInterseccion([1, 2, 3], [1, 5, 8, 3]));
console.log(buscoInterseccion([7, 23, 4], [23, 70]));
console.log(buscoInterseccion([1, 20, 3], [22, 5, 7]));
