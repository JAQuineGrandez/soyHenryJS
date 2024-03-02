function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x === y){
    return x;
  }else{
    mayor = x > y ? x : y;
    return mayor
  }
}

module.exports = obtenerMayor;
