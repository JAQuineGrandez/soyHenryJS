/*
. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
*/

function cyberReindeer(road, time) {
  // Code here

  let abrirPaso = false;
  let continuarViaje = false;
  let termino = false;
  let arrayRoad = road.split("");
  const salida = [];

  salida.push(arrayRoad.join(""));

  const arrayPares = arrayRoad
    .map((elemento, indice) => {
      if (elemento === "|") return indice;
    })
    .filter((elemento) => elemento !== undefined);

  let i = 0;

  const intervalAbrirPaso = setTimeout(() => {
    abrirPaso = true;
  }, time * 500);

  const intervalId = setInterval(() => {
    if (i < arrayRoad.length) {
      if (abrirPaso) {
        clearInterval(intervalAbrirPaso);

        road = road.replace(/\|/g, "*");
        arrayRoad = road.split("");
        continuarViaje = true;
        abrirPaso = false;
      } else {
        if (!(continuarViaje === false && arrayPares.includes(i + 1))) {
          const temporal = arrayRoad[i];
          arrayRoad[i] = arrayRoad[i + 1];
          arrayRoad[i + 1] = temporal;
          road = arrayRoad.join("");
          i++;
        }
      }
      salida.push(arrayRoad.join(""));
      console.log(salida);
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    termino = true;
  }, time * 1000);
}

const road = "S.|.|...|..";
const time = 10; // unidades de tiempo

console.log(cyberReindeer(road, time));
