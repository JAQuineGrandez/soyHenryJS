function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0; // Contador para controlar el límite de 8 veces
  do {
    num += 5; // Aumentar el valor de "num" en 5
    contador++; // Incrementar el contador
  } while (contador < 8 ); 
  return num; 

}

module.exports = doWhile;