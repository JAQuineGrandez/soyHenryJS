function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  /*  let meses = ["Enero", "Marzo", "Noviembre"];
  let nuevosMeses = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === meses[0] ||
      array[i] === meses[1] ||
      array[i] === meses[2]
    ) {
      nuevosMeses.push(array[i]);
    }
  }

  return nuevosMeses.length === 3
    ? nuevosMeses
    : "No se encontraron los meses pedidos"; */

  let nuevosMeses = array.filter(function (elemento) {
    if (
      elemento === "Enero" ||
      elemento === "Marzo" ||
      elemento === "Noviembre"
    ) {
      return elemento;
    }
  });

  return nuevosMeses.length === 3
    ? nuevosMeses
    : "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
