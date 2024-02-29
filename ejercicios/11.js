
function esMayorDeEdad(fechaNacimiento) {
   const fechaActual = new Date(); //Obtiene la fecha actual
   const anioNacimiento = fechaNacimiento.getFullYear();
   const anioActual = fechaActual.getFullYear();
   return anioActual - anioNacimiento >= 18;
}

module.exports = esMayorDeEdad;