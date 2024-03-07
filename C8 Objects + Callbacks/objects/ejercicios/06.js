const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  /*  let cantidad = 0;
  for (let i in objeto) {
    cantidad++;
  }

  return cantidad; */

  return Object.keys(objeto).length;
};

module.exports = contarPropiedades;
